import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe/server";
import { createApiRouteClient, createServiceClient } from "../../lib/supabase/server";
import type { Course } from "../../lib/supabase/types";

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

  const { courseId } = req.body;

  if (!courseId || typeof courseId !== "string") {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const supabase = createApiRouteClient(req, res);
    const serviceClient = createServiceClient();

    // Price and course access metadata must come from our database, never the browser.
    const { data: courseData, error: courseError } = await serviceClient
      .from("courses")
      .select("*")
      .eq("id", courseId)
      .single();
    const course = courseData as Course | null;

    if (courseError || !course || course.is_free || !course.stripe_price_id) {
      return res.status(400).json({ error: "This course is not available for purchase" });
    }

    // Get the current user (optional for guest checkout)
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // If user is logged in, check for existing purchase
    if (user) {
      const { data: existingPurchase } = await supabase
        .from("user_purchases")
        .select("*")
        .eq("user_id", user.id)
        .eq("course_id", courseId)
        .single();

      if (existingPurchase) {
        return res.status(400).json({ error: "You already own this course" });
      }
    }

    // Build metadata - include userId only if authenticated
    const metadata: Record<string, string> = {
      courseId: courseId,
    };
    if (user) {
      metadata.userId = user.id;
    }

    // Create Stripe checkout session
    // For guests, Stripe will collect email at checkout
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: course.stripe_price_id,
          quantity: 1,
        },
      ],
      success_url: `${getRequestOrigin(req)}/courses/${course.category_slug}/${course.slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getRequestOrigin(req)}/courses/${course.category_slug}/${course.slug}/purchase?canceled=true`,
      // Pre-fill email for logged-in users, let Stripe collect for guests
      customer_email: user?.email ?? undefined,
      metadata,
    });

    // Return the checkout URL for client-side redirect
    return res.status(200).json({ url: session.url ?? undefined });
  } catch (error) {
    console.error("Checkout error:", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}

function getRequestOrigin(req: NextApiRequest): string {
  const forwardedHost = req.headers["x-forwarded-host"];
  const host = (Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost) || req.headers.host;
  const forwardedProto = req.headers["x-forwarded-proto"];
  const protocol = (Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto) ||
    (process.env.NODE_ENV === "production" ? "https" : "http");

  if (!host) {
    throw new Error("Unable to determine request origin");
  }

  return `${protocol}://${host}`;
}
