import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { stripe } from "../../lib/stripe/server";
import { linkGuestPurchases } from "../../lib/purchases/linkGuestPurchases";

type ResponseData = {
  status?: "created" | "accountExists";
  error?: string;
};

/**
 * Creates an account for a guest who just completed checkout, then links their
 * guest purchase(s) to it. Gated entirely on possession of a PAID Stripe
 * session — the email is taken from the retrieved session, never from the
 * client. The account is created already-confirmed (the paid checkout proves
 * the email), so the client can sign in immediately afterwards.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { session_id, password } = req.body ?? {};

  if (!session_id || typeof session_id !== "string") {
    return res.status(400).json({ error: "Missing session_id" });
  }
  if (!password || typeof password !== "string" || password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters" });
  }

  try {
    // Verify the session is real and paid (never trust the client for this).
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid" || session.mode !== "payment") {
      return res.status(400).json({ error: "Payment is not complete" });
    }

    const email = (
      session.customer_details?.email ?? session.customer_email ?? ""
    ).toLowerCase();
    const courseId = session.metadata?.courseId;

    if (!email) {
      return res.status(400).json({ error: "No email on the checkout session" });
    }
    if (!courseId) {
      return res.status(400).json({ error: "No course on the checkout session" });
    }

    const serviceClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // If an account already exists for this email, don't create one — link any
    // guest rows and tell the client to log in instead.
    const { data: usersData } = await serviceClient.auth.admin.listUsers();
    const existingUser = usersData?.users?.find(
      (u) => u.email?.toLowerCase() === email
    );

    if (existingUser) {
      await linkGuestPurchases(serviceClient, existingUser.id, email);
      return res.status(200).json({ status: "accountExists" });
    }

    // Create an already-confirmed account so sign-in works immediately.
    const { data: created, error: createError } =
      await serviceClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

    if (createError || !created?.user) {
      // Race: an account was created between our check and now. Treat as
      // "account exists" so the client redirects to login.
      const alreadyRegistered = createError?.message
        ?.toLowerCase()
        .includes("already");

      if (alreadyRegistered) {
        const { data: refetch } = await serviceClient.auth.admin.listUsers();
        const raced = refetch?.users?.find(
          (u) => u.email?.toLowerCase() === email
        );
        if (raced) {
          await linkGuestPurchases(serviceClient, raced.id, email);
        }
        return res.status(200).json({ status: "accountExists" });
      }

      console.error("Failed to create account from purchase:", createError);
      return res.status(500).json({ error: "Failed to create account" });
    }

    await linkGuestPurchases(serviceClient, created.user.id, email);

    console.log(`Account created from purchase: email=${email}, course=${courseId}`);
    return res.status(200).json({ status: "created" });
  } catch (error) {
    console.error("create-account-from-purchase error:", error);
    return res.status(500).json({ error: "Failed to process purchase" });
  }
}
