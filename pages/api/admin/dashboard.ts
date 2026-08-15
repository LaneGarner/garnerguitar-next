import type { NextApiRequest, NextApiResponse } from "next";
import { requireApiAdmin } from "../../../lib/admin";
import { stripe } from "../../../lib/stripe/server";

async function listAllUsers(service: any) {
  const users: any[] = [];
  for (let page = 1; ; page += 1) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    users.push(...data.users);
    if (data.users.length < 1000) return users;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const admin = await requireApiAdmin(req, res);
  if (!admin) return;
  const { user: adminUser } = admin;
  const service: any = admin.service;

  try {
    if (req.method === "GET") {
      const [users, coursesResult, lessonsResult, purchasesResult, grantsResult] = await Promise.all([
        listAllUsers(service),
        service.from("courses").select("*").order("part"),
        service.from("lessons").select("id,course_id,slug,title,sort_order,published,video_id,content").order("sort_order"),
        service.from("user_purchases").select("*").order("purchased_at", { ascending: false }),
        service.from("course_access_grants").select("*").order("granted_at", { ascending: false }),
      ]);
      for (const result of [coursesResult, lessonsResult, purchasesResult, grantsResult]) {
        if (result.error) throw result.error;
      }
      return res.status(200).json({
        users: users.map((user) => ({ id: user.id, email: user.email, created_at: user.created_at, last_sign_in_at: user.last_sign_in_at })),
        courses: coursesResult.data,
        lessons: lessonsResult.data,
        purchases: purchasesResult.data,
        grants: grantsResult.data,
      });
    }

    if (req.method !== "POST") {
      res.setHeader("Allow", "GET, POST");
      return res.status(405).end("Method Not Allowed");
    }

    const action = typeof req.body?.action === "string" ? req.body.action : "";

    if (action === "grant") {
      const email = String(req.body.email || "").trim().toLowerCase();
      const courseIds = Array.isArray(req.body.courseIds) ? req.body.courseIds.filter((id: unknown) => typeof id === "string") : [];
      if (!email || !courseIds.length) return res.status(400).json({ error: "Email and at least one course are required" });
      const users = await listAllUsers(service);
      const target = users.find((candidate) => candidate.email?.toLowerCase() === email);
      if (!target) return res.status(404).json({ error: "No account exists for that email. Ask them to sign up first." });
      const rows = courseIds.map((courseId: string) => ({
        user_id: target.id,
        course_id: courseId,
        granted_by: adminUser.id,
        reason: String(req.body.reason || "Complimentary access").trim(),
        granted_at: new Date().toISOString(),
        revoked_at: null,
        revoked_by: null,
      }));
      const { error } = await service.from("course_access_grants").upsert(rows, { onConflict: "user_id,course_id" });
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    if (action === "revoke") {
      const { error } = await service.from("course_access_grants").update({
        revoked_at: new Date().toISOString(), revoked_by: adminUser.id,
      }).eq("id", String(req.body.grantId || "")).is("revoked_at", null);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    if (action === "reset-password") {
      const email = String(req.body.email || "").trim().toLowerCase();
      if (!email) return res.status(400).json({ error: "Email is required" });
      const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://garnerguitar.com";
      const { error } = await service.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/reset-password` });
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    if (action === "set-lesson-published") {
      const { error } = await service.from("lessons").update({ published: !!req.body.published }).eq("id", String(req.body.lessonId || ""));
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    if (action === "set-course-published") {
      const { error } = await service.from("lessons").update({ published: !!req.body.published }).eq("course_id", String(req.body.courseId || ""));
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    if (action === "set-price") {
      const courseId = String(req.body.courseId || "");
      const priceCents = Number(req.body.priceCents);
      if (!Number.isInteger(priceCents) || priceCents < 50) return res.status(400).json({ error: "Price must be at least $0.50" });
      const { data: course, error: courseError } = await service.from("courses").select("*").eq("id", courseId).single();
      if (courseError || !course?.stripe_price_id) throw courseError || new Error("Course has no Stripe price");
      const currentPrice = await stripe.prices.retrieve(course.stripe_price_id);
      const productId = typeof currentPrice.product === "string" ? currentPrice.product : currentPrice.product.id;
      const newPrice = await stripe.prices.create({ product: productId, currency: "usd", unit_amount: priceCents });
      const { error } = await service.from("courses").update({ price_cents: priceCents, stripe_price_id: newPrice.id }).eq("id", courseId);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: "Unknown admin action" });
  } catch (error) {
    console.error("Admin dashboard error", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Admin operation failed" });
  }
}
