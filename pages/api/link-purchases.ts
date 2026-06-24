import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { createApiRouteClient } from "../../lib/supabase/server";

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

    // Find guest purchases with matching email that haven't been linked
    const { data: guestPurchases, error: fetchError } = await serviceClient
      .from("user_purchases")
      .select("id")
      .eq("email", user.email)
      .is("user_id", null);

    if (fetchError) {
      console.error("Error fetching guest purchases:", fetchError);
      return res.status(500).json({ error: "Failed to fetch purchases" });
    }

    if (!guestPurchases || guestPurchases.length === 0) {
      return res.status(200).json({ linked: 0 });
    }

    // Link the purchases to the user
    const purchaseIds = guestPurchases.map((p: { id: string }) => p.id);
    const { error: updateError } = await serviceClient
      .from("user_purchases")
      .update({ user_id: user.id })
      .in("id", purchaseIds);

    if (updateError) {
      console.error("Error linking purchases:", updateError);
      return res.status(500).json({ error: "Failed to link purchases" });
    }

    console.log(`Linked ${purchaseIds.length} guest purchases to user ${user.id}`);
    return res.status(200).json({ linked: purchaseIds.length });
  } catch (error) {
    console.error("Link purchases error:", error);
    return res.status(500).json({ error: "Failed to link purchases" });
  }
}
