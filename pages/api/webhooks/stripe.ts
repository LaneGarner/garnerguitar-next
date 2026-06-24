import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { stripe } from "../../../lib/stripe/server";

// Disable body parsing - Stripe needs raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return res.status(500).json({ error: "Webhook secret not configured" });
  }

  let event: Stripe.Event;

  try {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    if (!sig) {
      return res.status(400).json({ error: "Missing stripe-signature header" });
    }

    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${message}`);
    return res.status(400).json({ error: `Webhook Error: ${message}` });
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }

      case "payment_intent.succeeded": {
        // Additional handling if needed
        console.log("Payment succeeded:", event.data.object.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Error processing webhook: ${message}`);
    return res.status(500).json({ error: `Webhook processing error: ${message}` });
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const { userId, courseId } = session.metadata || {};
  const customerEmail = session.customer_email || session.customer_details?.email;

  if (!courseId) {
    console.error("Missing courseId in checkout session:", session.id);
    throw new Error("Missing courseId in session metadata");
  }

  // Use untyped service client to bypass RLS and type constraints
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // For logged-in users (userId present), check if purchase already exists
  if (userId) {
    const { data: existingPurchase } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", userId)
      .eq("course_id", courseId)
      .single();

    if (existingPurchase) {
      console.log(`Purchase already exists for user=${userId}, course=${courseId}`);
      return;
    }

    console.log(`Processing purchase: user=${userId}, course=${courseId}`);

    // Create purchase with user_id
    const purchaseData = {
      user_id: userId,
      course_id: courseId,
      email: customerEmail || null,
      stripe_payment_id: session.payment_intent as string,
      purchased_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("user_purchases").insert(purchaseData);

    if (error) {
      console.error("Failed to create purchase record:", error);
      throw new Error(`Failed to create purchase: ${error.message}`);
    }

    console.log(`Purchase created successfully: user=${userId}, course=${courseId}`);
    return;
  }

  // Guest purchase flow - no userId, but we have email from Stripe
  if (!customerEmail) {
    console.error("No email found for guest checkout:", session.id);
    throw new Error("No email found for guest checkout");
  }

  console.log(`Processing guest purchase: email=${customerEmail}, course=${courseId}`);

  // Check if a user with this email already exists - if so, link immediately
  const { data: usersData } = await supabase.auth.admin.listUsers();
  const existingUser = usersData?.users?.find(
    (u) => u.email?.toLowerCase() === customerEmail.toLowerCase()
  );

  // Check for existing purchase by email (guest) or user_id (if user exists)
  if (existingUser) {
    const { data: existingPurchase } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", existingUser.id)
      .eq("course_id", courseId)
      .single();

    if (existingPurchase) {
      console.log(`Purchase already exists for user=${existingUser.id}, course=${courseId}`);
      return;
    }

    // User exists, create purchase linked to their account
    const existingUserPurchaseData = {
      user_id: existingUser.id,
      course_id: courseId,
      email: customerEmail,
      stripe_payment_id: session.payment_intent as string,
      purchased_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("user_purchases").insert(existingUserPurchaseData);

    if (error) {
      console.error("Failed to create purchase record:", error);
      throw new Error(`Failed to create purchase: ${error.message}`);
    }

    console.log(`Purchase created and linked to existing user: user=${existingUser.id}, course=${courseId}`);
    return;
  }

  // No existing user - check for existing guest purchase with same email
  const { data: existingGuestPurchase } = await supabase
    .from("user_purchases")
    .select("*")
    .eq("email", customerEmail)
    .eq("course_id", courseId)
    .is("user_id", null)
    .single();

  if (existingGuestPurchase) {
    console.log(`Guest purchase already exists for email=${customerEmail}, course=${courseId}`);
    return;
  }

  // Create guest purchase with email only (no user_id)
  const guestPurchaseData = {
    user_id: null,
    course_id: courseId,
    email: customerEmail,
    stripe_payment_id: session.payment_intent as string,
    purchased_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("user_purchases").insert(guestPurchaseData);

  if (error) {
    console.error("Failed to create guest purchase record:", error);
    throw new Error(`Failed to create guest purchase: ${error.message}`);
  }

  console.log(`Guest purchase created: email=${customerEmail}, course=${courseId}`);
}
