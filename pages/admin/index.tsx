import { useMemo, useState } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../../components";
import { isAdminUser } from "../../lib/admin";
import { createServerSideClient } from "../../lib/supabase/server";
import { theme } from "../../utils/styles/theme";

type DashboardData = { users: any[]; courses: any[]; lessons: any[]; purchases: any[]; grants: any[] };

export default function AdminPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [reason, setReason] = useState("Complimentary access");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setBusy(true);
    const response = await fetch("/api/admin/dashboard");
    const body = await response.json();
    setBusy(false);
    if (!response.ok) return setMessage(body.error || "Could not load dashboard");
    setData(body);
  };

  const act = async (payload: Record<string, unknown>, success: string) => {
    setBusy(true); setMessage("");
    const response = await fetch("/api/admin/dashboard", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const body = await response.json();
    setBusy(false);
    if (!response.ok) return setMessage(body.error || "Operation failed");
    setMessage(success);
    await load();
  };

  const filteredUsers = useMemo(() => (data?.users || []).filter((user) => user.email?.toLowerCase().includes(search.toLowerCase())), [data, search]);
  const courseName = (id: string) => data?.courses.find((course) => course.id === id)?.title || "Unknown course";

  return <Layout>
    <Head><title>Course Administration | Garner Guitar</title></Head>
    <AdminStyled>
      <header><div><p className="eyebrow">Private administration</p><h1>Course operations</h1><p>Manage customers, complimentary access, publishing, videos, and live Stripe pricing.</p></div><button onClick={load} disabled={busy}>{data ? "Refresh" : "Load dashboard"}</button></header>
      {message && <div className="message" role="status">{message}</div>}
      {!data ? <section className="empty"><h2>Ready when you are</h2><p>Load current data securely from the server.</p></section> : <>
        <nav><a href="#customers">Customers</a><a href="#grants">Access grants</a><a href="#courses">Courses</a></nav>

        <section id="customers"><h2>Customers</h2><input aria-label="Search users" placeholder="Search by email" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="table"><div className="tr head"><span>Email</span><span>Access</span><span>Account</span></div>{filteredUsers.map((user) => {
            const paid = data.purchases.filter((p) => p.user_id === user.id);
            const grants = data.grants.filter((g) => g.user_id === user.id && !g.revoked_at);
            return <div className="tr" key={user.id}><span>{user.email}</span><span>{paid.map((p) => <em key={p.id}>Paid: {courseName(p.course_id)}</em>)}{grants.map((g) => <em key={g.id}>Free: {courseName(g.course_id)}</em>)}{!paid.length && !grants.length && "None"}</span><span><button className="small" onClick={() => act({ action: "reset-password", email: user.email }, `Password reset sent to ${user.email}`)}>Send password reset</button></span></div>;
          })}</div>
        </section>

        <section id="grants"><h2>Grant complimentary access</h2><div className="form-grid"><label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@example.com" /></label><label>Reason<input value={reason} onChange={(e) => setReason(e.target.value)} /></label></div>
          <div className="checks">{data.courses.filter((c) => !c.is_free).map((course) => <label key={course.id}><input type="checkbox" checked={selectedCourses.includes(course.id)} onChange={(e) => setSelectedCourses(e.target.checked ? [...selectedCourses, course.id] : selectedCourses.filter((id) => id !== course.id))} />{course.title}</label>)}</div>
          <button disabled={busy || !email || !selectedCourses.length} onClick={() => act({ action: "grant", email, courseIds: selectedCourses, reason }, `Access granted to ${email}`)}>Grant selected courses</button>
          <h3>Grant history</h3><div className="table"><div className="tr head"><span>User</span><span>Course / reason</span><span>Status</span></div>{data.grants.map((grant) => { const user = data.users.find((u) => u.id === grant.user_id); return <div className="tr" key={grant.id}><span>{user?.email || grant.user_id}</span><span>{courseName(grant.course_id)}<em>{grant.reason}</em></span><span>{grant.revoked_at ? `Revoked ${new Date(grant.revoked_at).toLocaleDateString()}` : <button className="danger small" onClick={() => act({ action: "revoke", grantId: grant.id }, "Access revoked")}>Revoke</button>}</span></div>; })}</div>
        </section>

        <section id="courses"><h2>Courses</h2>{data.courses.map((course) => { const lessons = data.lessons.filter((lesson) => lesson.course_id === course.id); const published = lessons.filter((lesson) => lesson.published).length; return <article className="course" key={course.id}><div className="course-title"><div><h3>{course.title}</h3><p>{published}/{lessons.length} published · {lessons.filter((l) => l.video_id).length} with video · {lessons.filter((l) => !l.content?.trim()).length} empty</p></div><Link href={`/courses/${course.category_slug}/${course.slug}`} target="_blank">Preview ↗</Link></div>
            {!course.is_free && <div className="price"><label>Price in dollars<input id={`price-${course.id}`} type="number" min="0.5" step="0.01" defaultValue={(course.price_cents / 100).toFixed(2)} /></label><button className="small" onClick={() => { const input = document.getElementById(`price-${course.id}`) as HTMLInputElement; act({ action: "set-price", courseId: course.id, priceCents: Math.round(Number(input.value) * 100) }, "Stripe price and course price updated"); }}>Update live price</button></div>}
            <div className="actions"><button className="small" onClick={() => act({ action: "set-course-published", courseId: course.id, published: true }, "Course published")}>Publish all</button><button className="small danger" onClick={() => confirm(`Unpublish every lesson in ${course.title}?`) && act({ action: "set-course-published", courseId: course.id, published: false }, "Course unpublished")}>Unpublish all</button></div>
            <details><summary>Manage {lessons.length} lessons</summary>{lessons.map((lesson) => <div className="lesson" key={lesson.id}><span>{lesson.sort_order}. {lesson.title}</span><span>{lesson.video_id ? "Video" : "No video"}{!lesson.content?.trim() ? " · Empty" : ""}</span><button className={`small ${lesson.published ? "danger" : ""}`} onClick={() => act({ action: "set-lesson-published", lessonId: lesson.id, published: !lesson.published }, lesson.published ? "Lesson unpublished" : "Lesson published")}>{lesson.published ? "Unpublish" : "Publish"}</button></div>)}</details>
          </article>; })}</section>
      </>}
    </AdminStyled>
  </Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createServerSideClient(context);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { redirect: { destination: "/login?redirect=/admin", permanent: false } };
  if (!isAdminUser(user)) return { notFound: true };
  return { props: {} };
};

const AdminStyled = styled.div`
  width:min(1180px,calc(100% - 2rem));margin:0 auto;padding:3rem 0 6rem;color:${theme.colors.neutral[13]};
  header{display:flex;justify-content:space-between;gap:2rem;align-items:end;margin-bottom:2rem}h1{font-size:clamp(2rem,5vw,4rem);margin:.2rem 0}.eyebrow{color:${theme.colors.green};text-transform:uppercase;letter-spacing:.12em}nav{position:sticky;top:${theme.sizes.header};z-index:2;display:flex;gap:1rem;background:#111;padding:1rem 0}nav a{color:${theme.colors.green}}section{${theme.utils.cards.darker};margin:1.5rem 0}button{background:${theme.colors.green};border:0;border-radius:6px;padding:.75rem 1rem;font-weight:700;cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}.danger{background:#733;color:white}.small{padding:.5rem .7rem}input{width:100%;box-sizing:border-box;background:#171717;border:1px solid #555;border-radius:6px;color:white;padding:.7rem}.message{padding:1rem;background:#173c34;border:1px solid ${theme.colors.green};border-radius:8px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}label{display:grid;gap:.4rem}.checks{display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0}.checks label{display:flex}.checks input{width:auto}.table{margin-top:1rem}.tr{display:grid;grid-template-columns:1fr 1.5fr 1fr;gap:1rem;padding:.8rem 0;border-top:1px solid #444}.tr.head{color:#999;text-transform:uppercase;font-size:.8rem}.tr em{display:block;font-style:normal;margin:.2rem 0}.course{border-top:1px solid #555;padding:1.2rem 0}.course-title,.price,.actions,.lesson{display:flex;align-items:center;justify-content:space-between;gap:1rem}.course-title h3{margin-bottom:.25rem}.course-title p{margin:0;color:#aaa}.course-title a{color:${theme.colors.green}}.price{justify-content:flex-start;margin:1rem 0}.price label{max-width:180px}.actions{justify-content:flex-start;margin-bottom:1rem}.lesson{padding:.6rem;border-top:1px solid #3b3b3b}.lesson span:first-child{flex:1}@media(max-width:${theme.breakpoints.md}){header,.course-title{align-items:start;flex-direction:column}.form-grid{grid-template-columns:1fr}.tr{grid-template-columns:1fr}.tr.head{display:none}.lesson{align-items:flex-start;flex-wrap:wrap}nav{top:${theme.sizes.headerMobile};overflow:auto}}
`;
