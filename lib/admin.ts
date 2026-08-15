import type { NextApiRequest, NextApiResponse } from "next";
import { createApiRouteClient, createServiceClient } from "./supabase/server";

export function isAdminUser(user: { email?: string | null; app_metadata?: Record<string, unknown> }) {
  const configuredEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return user.app_metadata?.role === "admin" ||
    (!!user.email && configuredEmails.includes(user.email.toLowerCase()));
}

export async function requireApiAdmin(req: NextApiRequest, res: NextApiResponse) {
  const authClient = createApiRouteClient(req, res);
  const { data: { user }, error } = await authClient.auth.getUser();

  if (error || !user) {
    res.status(401).json({ error: "Authentication required" });
    return null;
  }

  if (!isAdminUser(user)) {
    res.status(403).json({ error: "Administrator access required" });
    return null;
  }

  return { user, service: createServiceClient() };
}
