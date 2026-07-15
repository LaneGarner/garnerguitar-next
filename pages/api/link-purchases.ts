import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { createApiRouteClient } from "../../lib/supabase/server";
import { linkGuestPurchases } from "../../lib/purchases/linkGuestPurchases";

type ResponseData = {
  linked?: number;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get current user from session
    const supabase = createApiRouteClient(req, res);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return res.status(401).json({ error: "Authentication required" });
    }

    // Use untyped service client to bypass RLS and type constraints
    const serviceClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Link any guest purchases for this email to the now-authenticated user.
    // Backstop for the normal returning-customer login flow; the post-purchase
    // endpoint is the authoritative linker for the guest-checkout flow.
    const linked = await linkGuestPurchases(serviceClient, user.id, user.email);

    console.log(`Linked ${linked} guest purchases to user ${user.id}`);
    return res.status(200).json({ linked });
  } catch (error) {
    console.error("Link purchases error:", error);
    return res.status(500).json({ error: "Failed to link purchases" });
  }
}
