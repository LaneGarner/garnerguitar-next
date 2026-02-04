import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe/server";
import { createApiRouteClient } from "../../lib/supabase/server";

type ResponseData = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { priceId, courseId, successUrl, cancelUrl } = req.body;

  if (!priceId || !courseId || !successUrl || !cancelUrl) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const supabase = createApiRouteClient(req, res);

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    // Check if user already purchased this course
    const { data: existingPurchase } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .single();

    if (existingPurchase) {
      return res.status(400).json({ error: "You already own this course" });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: user.email ?? undefined,
      metadata: {
        userId: user.id,
        courseId: courseId,
      },
    });

    // Return the checkout URL for client-side redirect
    return res.status(200).json({ url: session.url ?? undefined });
  } catch (error) {
    console.error("Checkout error:", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}
