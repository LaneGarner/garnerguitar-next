import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe/server";
import { createServiceClient } from "../../../lib/supabase/server";

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

  if (!userId || !courseId) {
    console.error("Missing metadata in checkout session:", session.id);
    throw new Error("Missing userId or courseId in session metadata");
  }

  console.log(`Processing purchase: user=${userId}, course=${courseId}`);

  // Use service client to bypass RLS for inserting purchase
  const supabase = createServiceClient();

  // Check if purchase already exists (idempotency)
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

  // Create the purchase record
  const purchaseData = {
    user_id: userId,
    course_id: courseId,
    stripe_payment_id: session.payment_intent as string,
    purchased_at: new Date().toISOString(),
  };

  // Using 'as any' because the Database types may not be generated from actual schema
  const { error } = await supabase.from("user_purchases").insert(purchaseData as any);

  if (error) {
    console.error("Failed to create purchase record:", error);
    throw new Error(`Failed to create purchase: ${error.message}`);
  }

  console.log(`Purchase created successfully: user=${userId}, course=${courseId}`);
}
