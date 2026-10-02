import { useCallback, useEffect, useMemo, useState } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../../components";
import { isAdminUser } from "../../lib/admin";
import { createServerSideClient } from "../../lib/supabase/server";
import { theme } from "../../utils/styles/theme";

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

  return <Layout><Head><title>Course Administration | Garner Guitar</title></Head><AdminStyled aria-busy={busy}>
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
  </AdminStyled></Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createServerSideClient(context); const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { redirect: { destination: "/login?redirect=/admin", permanent: false } };
  if (!isAdminUser(user)) return { notFound: true };
  return { props: {} };
};

const AdminStyled = styled.div`
  width:min(1180px,calc(100% - 2rem));margin:0 auto;padding:3rem 0 6rem;color:#f1f1f1;
  header{margin-bottom:2rem;max-width:760px}h1{font-size:clamp(2rem,5vw,4rem);margin:.2rem 0}.eyebrow{color:#9ff3dc;text-transform:uppercase;letter-spacing:.12em;font-weight:700}header p:last-child{color:#d3d3d3;font-size:1.05rem}
  nav{position:sticky;top:${theme.sizes.header};z-index:2;display:flex;gap:.5rem;background:#111;padding:.75rem 0}nav a{color:#081c16;background:#9ff3dc;padding:.6rem .9rem;border-radius:6px;font-weight:800;text-decoration:none}nav a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible,a:focus-visible{outline:3px solid #f6d86b;outline-offset:3px}
  section{background:#262626;border:1px solid #4d4d4d;padding:1.5rem 2rem;border-radius:12px;box-shadow:${theme.utils.shadows.dark};margin:1.5rem 0}h2,h3{color:#fff}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:1.5rem;margin-bottom:1rem}.section-heading h2{margin:0}.section-heading p{color:#c7c7c7;margin:.3rem 0 0}.search{width:min(360px,100%);color:#f1f1f1;font-weight:700}.search input{margin-top:.4rem;width:100%}
  button{min-height:44px;background:#9ff3dc;color:#081c16;border:1px solid transparent;border-radius:6px;padding:.7rem .9rem;font-weight:800;cursor:pointer}button:disabled{opacity:.55;cursor:not-allowed}.secondary{padding:.55rem .75rem}.danger{background:#8f2d35;color:#fff;border-color:#e49ca2}.notice{padding:1rem;border-radius:8px;font-weight:700}.notice.success{background:#163d32;border:1px solid #9ff3dc}.notice.error{background:#4b1e21;border:1px solid #efadb2}.loading{background:#262626;border:1px solid #555;border-radius:12px;padding:2rem}
  input{min-height:44px;box-sizing:border-box;background:#111;border:1px solid #858585;border-radius:6px;color:#fff;padding:.7rem;font:inherit}.muted{color:#c2c2c2}.user-list{border-top:1px solid #555}.user-record{border-bottom:1px solid #555}.user-row{display:grid;grid-template-columns:minmax(220px,1.2fr) minmax(240px,1.5fr) 140px 70px;align-items:center;gap:1rem;padding:1rem 0}.user-head{color:#c7c7c7;text-transform:uppercase;font-size:.78rem;font-weight:700}.identity,.access-summary{display:flex;flex-direction:column;gap:.3rem;min-width:0}.identity strong,.access-summary em{overflow-wrap:anywhere}.identity small{color:#c7c7c7}.access-summary em{font-style:normal}.action-menu{position:relative;justify-self:end}.action-menu summary{list-style:none;width:44px;height:44px;display:grid;place-items:center;border:1px solid #858585;border-radius:6px;cursor:pointer;color:#fff;font-size:1.1rem}.action-menu summary::-webkit-details-marker{display:none}.menu-items{position:absolute;right:0;top:calc(100% + .4rem);z-index:4;width:min(220px,calc(100vw - 2rem));background:#111;border:1px solid #777;border-radius:8px;padding:.4rem;box-shadow:${theme.utils.shadows.dark}.menu-items button{display:block;width:100%;background:transparent;color:#fff;text-align:left;border:0}.menu-items button:hover{background:#333}.menu-items .menu-danger{color:#ffb4b9}.access-manager{min-width:0;background:#181818;border:1px solid #666;border-radius:8px;margin:0 0 1rem;padding:1rem}.access-manager h3{margin:0;overflow-wrap:anywhere}.access-manager p{color:#c7c7c7;margin:.3rem 0 1rem}.access-courses{display:grid;gap:.65rem}.access-course{min-width:0;display:flex;align-items:center;justify-content:space-between;gap:1rem;background:#252525;border:1px solid #4f4f4f;border-radius:7px;padding:.8rem}.access-course div{display:flex;flex-direction:column;gap:.2rem;min-width:0}.access-course strong{overflow-wrap:anywhere}.access-course div span{color:#c7c7c7}.status-badge{display:inline-flex;width:max-content;max-width:100%;background:#305f52;color:#fff;border:1px solid #9ff3dc;border-radius:999px;padding:.25rem .55rem;font-size:.8rem;font-weight:800}.no-results{color:#d3d3d3;padding:1rem 0}
  .course{min-width:0;border-top:1px solid #666;padding:1.4rem 0}.course:first-of-type{border-top:0}.course-title{display:flex;align-items:start;justify-content:space-between;gap:1rem;min-width:0}.title-line{display:flex;align-items:center;gap:.6rem;min-width:0}.course-title h3{margin:0;overflow-wrap:anywhere}.course-title p{margin:.4rem 0 0;color:#c7c7c7}.course-title a{color:#9ff3dc;font-weight:800}.price-row{display:grid;grid-template-columns:auto 130px auto;align-items:center;justify-content:start;gap:.75rem;margin:1.2rem 0}.price-row label{font-weight:700}.price-row input{text-align:center}.publish-row{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:#1b1b1b;border:1px solid #555;border-radius:8px;padding:.8rem;margin:1rem 0}.publish-status{color:#e5cf7c;font-weight:700}.publish-status.complete{color:#9ff3dc}.publish-actions{display:flex;gap:.6rem}.lessons>summary{min-height:44px;display:flex;align-items:center;cursor:pointer;color:#9ff3dc;font-weight:800;padding:.7rem 0}.lesson{display:grid;grid-template-columns:1fr 180px auto;align-items:center;gap:1rem;padding:.7rem;border-top:1px solid #4d4d4d}

  @media (max-width: ${theme.breakpoints.md}) {
    width: min(100% - 1rem, 1180px);
    padding: 2rem 0 4rem;

    nav {
      top: ${theme.sizes.headerMobile};
      overflow-x: auto;
    }

    .section-heading,
    .course-title,
    .publish-row {
      align-items: stretch;
      flex-direction: column;
    }

    .search { width: 100%; }
    .user-head { display: none; }
    .user-row { grid-template-columns: minmax(0, 1fr) auto; }
    .access-summary,
    .user-row > span:nth-child(3) { grid-column: 1 / -1; }
    .action-menu { grid-column: 2; grid-row: 1; }
    .access-course { align-items: stretch; flex-direction: column; }
    .price-row { grid-template-columns: minmax(0, 1fr); }
    .price-row input { width: 100%; text-align: left; }
    .publish-actions { display: grid; grid-template-columns: 1fr; }
    .lesson { grid-template-columns: minmax(0, 1fr); padding-inline: 0; }
    .lesson span { overflow-wrap: anywhere; }
    .lesson button { justify-self: stretch; }
    section { min-width: 0; padding: 1.25rem; }
    .menu-items { right: 0; }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 { font-size: 2.25rem; }
    section { padding: 1rem; }
    .title-line { align-items: flex-start; flex-direction: column; }
    .course-title a,
    .price-row button,
    .access-course button { width: 100%; text-align: center; }
  }
`;
