import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Link any unlinked guest purchases (user_id IS NULL) for a given email to a
 * user account. Emails are stored lowercased, so callers should pass a
 * lowercased email and write lowercased emails everywhere.
 *
 * Guards against the dual-row case: if the user already owns a course (a
 * `(user_id, course_id)` row exists), the matching guest row is deleted instead
 * of updated, to avoid violating the `idx_user_purchases_user_course` unique
 * index.
 *
 * Uses a service-role client (RLS-bypassing). Returns the number of guest rows
 * linked to the account.
 */
export async function linkGuestPurchases(
  serviceClient: SupabaseClient,
  userId: string,
  email: string
): Promise<number> {
  const normalizedEmail = email.toLowerCase();

  const { data: guestPurchases, error: fetchError } = await serviceClient
    .from("user_purchases")
    .select("id, course_id")
    .eq("email", normalizedEmail)
    .is("user_id", null);

  if (fetchError) {
    throw new Error(`Failed to fetch guest purchases: ${fetchError.message}`);
  }

  if (!guestPurchases || guestPurchases.length === 0) {
    return 0;
  }

  // Find which of these courses the user already owns, to avoid a unique-index
  // collision when we set user_id on the guest row.
  const courseIds = guestPurchases.map((p: { course_id: string }) => p.course_id);
  const { data: ownedRows } = await serviceClient
    .from("user_purchases")
    .select("course_id")
    .eq("user_id", userId)
    .in("course_id", courseIds);

  const ownedCourseIds = new Set(
    (ownedRows ?? []).map((r: { course_id: string }) => r.course_id)
  );

  const toDrop = guestPurchases.filter(
    (p: { course_id: string }) => ownedCourseIds.has(p.course_id)
  );
  const toLink = guestPurchases.filter(
    (p: { course_id: string }) => !ownedCourseIds.has(p.course_id)
  );

  if (toDrop.length > 0) {
    await serviceClient
      .from("user_purchases")
      .delete()
      .in("id", toDrop.map((p: { id: string }) => p.id));
  }

  if (toLink.length > 0) {
    const { error: updateError } = await serviceClient
      .from("user_purchases")
      .update({ user_id: userId })
      .in("id", toLink.map((p: { id: string }) => p.id));

    if (updateError) {
      throw new Error(`Failed to link guest purchases: ${updateError.message}`);
    }
  }

  return toLink.length;
}
