import { useCallback, useEffect, useMemo, useState } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components";
import { isAdminUser } from "../../lib/admin";
import { createServerSideClient } from "../../lib/supabase/server";
import styles from "./Admin.module.scss";

type AdminUser = { id: string; email: string; created_at: string; last_sign_in_at: string | null };
type Course = { id: string; title: string; slug: string; category_slug: string; is_free: boolean; price_cents: number | null; stripe_price_id: string | null };
type Lesson = { id: string; course_id: string; title: string; sort_order: number; published: boolean; video_id: string | null; content: string };
type Purchase = { id: string; user_id: string | null; course_id: string };
type Grant = { id: string; user_id: string; course_id: string; reason: string | null; revoked_at: string | null };
type DashboardData = { currentUserId: string; users: AdminUser[]; courses: Course[]; lessons: Lesson[]; purchases: Purchase[]; grants: Grant[] };
type Notice = { kind: "success" | "error"; text: string } | null;

export default function AdminPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [search, setSearch] = useState("");
  const [managedUserId, setManagedUserId] = useState<string | null>(null);
  const [notice, setNotice] = useState<Notice>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setBusy(true);
    try {
      const response = await fetch("/api/admin/dashboard");
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Could not load dashboard");
      setData(body);
    } catch (error) {
      setNotice({ kind: "error", text: error instanceof Error ? error.message : "Could not load dashboard" });
    } finally {
      setBusy(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const act = async (payload: Record<string, unknown>, success: string) => {
    setBusy(true);
    setNotice(null);
    try {
      const response = await fetch("/api/admin/dashboard", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Operation failed");
      setNotice({ kind: "success", text: success });
      await load();
    } catch (error) {
      setNotice({ kind: "error", text: error instanceof Error ? error.message : "Operation failed" });
      setBusy(false);
    }
  };

  const filteredUsers = useMemo(() => (data?.users || []).filter((user) => user.email?.toLowerCase().includes(search.trim().toLowerCase())), [data, search]);
  const courseName = (id: string) => data?.courses.find((course) => course.id === id)?.title || "Unknown course";
  const copy = async (value: string, label: string) => { await navigator.clipboard.writeText(value); setNotice({ kind: "success", text: `${label} copied` }); };
  const deleteUser = (user: AdminUser, accessCount: number) => {
    const consequence = accessCount ? ` This will also remove ${accessCount} access record${accessCount === 1 ? "" : "s"}.` : "";
    if (confirm(`Permanently delete ${user.email}?${consequence} This cannot be undone.`)) void act({ action: "delete-user", userId: user.id }, `${user.email} was deleted`);
  };

  return <Layout><Head><title>Course Administration | Garner Guitar</title></Head><div className={styles.admin} aria-busy={busy}>
    <header><p className="eyebrow">Private administration</p><h1>Course operations</h1><p>Manage users, course access, publishing, videos, and live Stripe pricing.</p></header>
    {notice && <div className={`notice ${notice.kind}`} role={notice.kind === "error" ? "alert" : "status"}>{notice.text}</div>}
    {!data ? <div className="loading" role="status">Loading dashboard…</div> : <>
      <nav aria-label="Admin sections"><a href="#users">Users</a><a href="#courses">Courses</a></nav>
      <section id="users" aria-labelledby="users-title">
        <div className="section-heading"><div><h2 id="users-title">Users</h2><p>{data.users.length} total users</p></div><label className="search">Search users<input type="search" placeholder="Search by email" value={search} onChange={(event) => setSearch(event.target.value)} /></label></div>
        <div className="user-list"><div className="user-row user-head" aria-hidden="true"><span>User</span><span>Course access</span><span>Last sign-in</span><span>Actions</span></div>
          {filteredUsers.map((user) => {
            const purchases = data.purchases.filter((purchase) => purchase.user_id === user.id);
            const grants = data.grants.filter((grant) => grant.user_id === user.id && !grant.revoked_at);
            const isManaged = managedUserId === user.id;
            return <div className="user-record" key={user.id}><div className="user-row">
              <span className="identity"><strong>{user.email}</strong><small>Joined {new Date(user.created_at).toLocaleDateString()}</small></span>
              <span className="access-summary">{purchases.map((purchase) => <em key={purchase.id}>Purchased · {courseName(purchase.course_id)}</em>)}{grants.map((grant) => <em key={grant.id}>Granted · {courseName(grant.course_id)}</em>)}{!purchases.length && !grants.length && <span className="muted">No paid-course access</span>}</span>
              <span>{user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : <span className="muted">Never</span>}</span>
              <details className="action-menu"><summary aria-label={`Actions for ${user.email}`}>•••</summary><div className="menu-items">
                <button onClick={() => setManagedUserId(isManaged ? null : user.id)}>{isManaged ? "Close access manager" : "Manage course access"}</button>
                <button onClick={() => void act({ action: "reset-password", email: user.email }, `Password reset sent to ${user.email}`)}>Send password reset</button>
                <button onClick={() => void copy(user.email, "Email")}>Copy email</button><button onClick={() => void copy(user.id, "User ID")}>Copy user ID</button>
                <button className="menu-danger" disabled={user.id === data.currentUserId} onClick={() => deleteUser(user, purchases.length + grants.length)}>Delete user</button>
              </div></details>
            </div>{isManaged && <div className="access-manager"><div><h3>Course access for {user.email}</h3><p>Purchases are permanent records. Complimentary grants can be added or revoked here.</p></div><div className="access-courses">
              {data.courses.filter((course) => !course.is_free).map((course) => {
                const purchase = purchases.find((item) => item.course_id === course.id); const grant = grants.find((item) => item.course_id === course.id);
                return <div className="access-course" key={course.id}><div><strong>{course.title}</strong><span>{purchase ? "Purchased" : grant ? "Complimentary access" : "No access"}</span></div>{purchase ? <span className="status-badge">Purchased</span> : grant ? <button className="secondary danger" disabled={busy} onClick={() => void act({ action: "revoke", grantId: grant.id }, `Access to ${course.title} revoked`)}>Revoke access</button> : <button className="secondary" disabled={busy} onClick={() => void act({ action: "grant", userId: user.id, courseIds: [course.id], reason: "Complimentary access" }, `Access to ${course.title} granted`)}>Grant access</button>}</div>;
              })}
            </div></div>}</div>;
          })}{!filteredUsers.length && <p className="no-results">No users match “{search}”.</p>}
        </div>
      </section>
      <section id="courses" aria-labelledby="courses-title"><div className="section-heading"><div><h2 id="courses-title">Courses</h2><p>Publishing, content health, previews, and pricing</p></div></div>
        {data.courses.map((course) => {
          const lessons = data.lessons.filter((lesson) => lesson.course_id === course.id); const published = lessons.filter((lesson) => lesson.published).length; const unpublished = lessons.length - published; const isFullyPublished = lessons.length > 0 && unpublished === 0; const isFullyUnpublished = published === 0;
          return <article className="course" key={course.id}><div className="course-title"><div><div className="title-line"><h3>{course.title}</h3>{course.is_free && <span className="status-badge">Free</span>}</div><p>{published}/{lessons.length} published · {lessons.filter((lesson) => lesson.video_id).length} with video · {lessons.filter((lesson) => !lesson.content?.trim()).length} empty</p></div><Link href={`/courses/${course.category_slug}/${course.slug}`} target="_blank">Preview course <span aria-hidden="true">↗</span></Link></div>
            {!course.is_free && <div className="price-row"><label htmlFor={`price-${course.id}`}>Price in dollars</label><input id={`price-${course.id}`} type="number" min="0.5" step="0.01" defaultValue={((course.price_cents || 0) / 100).toFixed(2)} /><button className="secondary" disabled={busy || !course.stripe_price_id} onClick={() => { const input = document.getElementById(`price-${course.id}`) as HTMLInputElement; void act({ action: "set-price", courseId: course.id, priceCents: Math.round(Number(input.value) * 100) }, `${course.title} price updated`); }}>{course.stripe_price_id ? "Update live price" : "Stripe price unavailable"}</button></div>}
            <div className="publish-row"><span className={`publish-status ${isFullyPublished ? "complete" : ""}`}>{isFullyPublished ? "All lessons published" : isFullyUnpublished ? "Course unpublished" : `${unpublished} lesson${unpublished === 1 ? "" : "s"} unpublished`}</span><div className="publish-actions">{!isFullyPublished && lessons.length > 0 && <button className="secondary" disabled={busy} onClick={() => void act({ action: "set-course-published", courseId: course.id, published: true }, `${course.title} published`)}>Publish {isFullyUnpublished ? "all" : "remaining"}</button>}{!isFullyUnpublished && <button className="secondary danger" disabled={busy} onClick={() => confirm(`Unpublish every lesson in ${course.title}?`) && void act({ action: "set-course-published", courseId: course.id, published: false }, `${course.title} unpublished`)}>Unpublish all</button>}</div></div>
            <details className="lessons"><summary>Manage {lessons.length} lessons</summary>{lessons.map((lesson) => <div className="lesson" key={lesson.id}><span>{lesson.sort_order}. {lesson.title}</span><span className="muted">{lesson.video_id ? "Video" : "No video"}{!lesson.content?.trim() ? " · Empty" : ""}</span><button className={`secondary ${lesson.published ? "danger" : ""}`} disabled={busy} onClick={() => void act({ action: "set-lesson-published", lessonId: lesson.id, published: !lesson.published }, lesson.published ? `${lesson.title} unpublished` : `${lesson.title} published`)}>{lesson.published ? "Unpublish" : "Publish"}</button></div>)}</details>
          </article>;
        })}
      </section>
    </>}
  </div></Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createServerSideClient(context); const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { redirect: { destination: "/login?redirect=/admin", permanent: false } };
  if (!isAdminUser(user)) return { notFound: true };
  return { props: {} };
};
