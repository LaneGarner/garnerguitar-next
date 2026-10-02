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
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [bulkCourseId, setBulkCourseId] = useState("");
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

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(null), notice.kind === "error" ? 10000 : 6000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const act = async (payload: Record<string, unknown>, success: string) => {
    setBusy(true);
    setNotice(null);
    try {
      const response = await fetch("/api/admin/dashboard", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Operation failed");
      setNotice({ kind: "success", text: success });
      await load();
      return true;
    } catch (error) {
      setNotice({ kind: "error", text: error instanceof Error ? error.message : "Operation failed" });
      setBusy(false);
      return false;
    }
  };

  const filteredUsers = useMemo(() => (data?.users || []).filter((user) => user.email?.toLowerCase().includes(search.trim().toLowerCase())), [data, search]);
  const selectedUsers = useMemo(() => (data?.users || []).filter((user) => selectedUserIds.includes(user.id)), [data, selectedUserIds]);
  const allFilteredSelected = filteredUsers.length > 0 && filteredUsers.every((user) => selectedUserIds.includes(user.id));
  const courseName = (id: string) => data?.courses.find((course) => course.id === id)?.title || "Unknown course";
  const copy = async (value: string, label: string) => { await navigator.clipboard.writeText(value); setNotice({ kind: "success", text: `${label} copied` }); };
  const toggleUser = (userId: string) => setSelectedUserIds((current) => current.includes(userId) ? current.filter((id) => id !== userId) : [...current, userId]);
  const toggleVisibleUsers = () => setSelectedUserIds((current) => allFilteredSelected ? current.filter((id) => !filteredUsers.some((user) => user.id === id)) : Array.from(new Set([...current, ...filteredUsers.map((user) => user.id)])));
  const bulkAct = async (payload: Record<string, unknown>, success: string) => {
    if (await act({ ...payload, userIds: selectedUserIds }, success)) setSelectedUserIds([]);
  };
  const deleteUser = (user: AdminUser, accessCount: number) => {
    const consequence = accessCount ? ` This will also remove ${accessCount} access record${accessCount === 1 ? "" : "s"}.` : "";
    if (confirm(`Permanently delete ${user.email}?${consequence} This cannot be undone.`)) void act({ action: "delete-user", userId: user.id }, `${user.email} was deleted`);
  };

  return <Layout><Head><title>Course Administration | Garner Guitar</title></Head><div className={styles.admin} aria-busy={busy}>
    <header><p className="eyebrow">Private administration</p><h1>Course operations</h1><p>Manage users, course access, publishing, videos, and live Stripe pricing.</p></header>
    {notice && <div className={`notice ${notice.kind}`} role={notice.kind === "error" ? "alert" : "status"}><span>{notice.text}</span><button className="notice-dismiss" type="button" aria-label="Dismiss notification" onClick={() => setNotice(null)}><span aria-hidden="true">×</span></button></div>}
    {!data ? <div className="loading" role="status">Loading dashboard…</div> : <>
      <nav aria-label="Admin sections"><a href="#users">Users</a><a href="#courses">Courses</a></nav>
      <section id="users" aria-labelledby="users-title">
        <div className="section-heading"><div><h2 id="users-title">Users</h2><p>{data.users.length} total users</p></div><label className="search">Search users<input type="search" placeholder="Search by email" value={search} onChange={(event) => setSearch(event.target.value)} /></label></div>
        {selectedUsers.length > 0 && <div className="bulk-toolbar" aria-label="Bulk user actions"><div className="bulk-heading"><strong>{selectedUsers.length} selected</strong><button className="clear-selection" type="button" onClick={() => setSelectedUserIds([])}>Clear</button></div><div className="bulk-course-actions"><label htmlFor="bulk-course">Course</label><select id="bulk-course" value={bulkCourseId} onChange={(event) => setBulkCourseId(event.target.value)}><option value="">Choose a course</option>{data.courses.filter((course) => !course.is_free).map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}</select><button disabled={busy || !bulkCourseId} onClick={() => void bulkAct({ action: "bulk-grant", courseId: bulkCourseId }, `Course access granted to ${selectedUsers.length} user${selectedUsers.length === 1 ? "" : "s"}`)}>Grant access</button><button className="secondary" disabled={busy || !bulkCourseId} onClick={() => confirm(`Revoke complimentary access to ${courseName(bulkCourseId)} for the selected users? Purchased access will not be affected.`) && void bulkAct({ action: "bulk-revoke", courseId: bulkCourseId }, `Complimentary access revoked for selected users`)}>Revoke grants</button></div><div className="bulk-other-actions"><button className="secondary" disabled={busy} onClick={() => confirm(`Send password reset emails to ${selectedUsers.length} selected user${selectedUsers.length === 1 ? "" : "s"}?`) && void bulkAct({ action: "bulk-reset-password" }, `Password resets sent to ${selectedUsers.length} user${selectedUsers.length === 1 ? "" : "s"}`)}>Send password resets</button><button className="secondary" disabled={busy} onClick={() => void copy(selectedUsers.map((user) => user.email).join(", "), `${selectedUsers.length} email${selectedUsers.length === 1 ? "" : "s"}`)}>Copy emails</button><button className="secondary danger" disabled={busy || selectedUserIds.includes(data.currentUserId)} onClick={() => confirm(`Permanently delete ${selectedUsers.length} selected user${selectedUsers.length === 1 ? "" : "s"}? Their access records will also be removed. This cannot be undone.`) && void bulkAct({ action: "bulk-delete-users" }, `${selectedUsers.length} user${selectedUsers.length === 1 ? "" : "s"} deleted`)}>Delete selected</button></div></div>}
        <div className="user-list"><div className="user-row user-head"><label className="select-user"><input type="checkbox" checked={allFilteredSelected} onChange={toggleVisibleUsers} aria-label={allFilteredSelected ? "Deselect all visible users" : "Select all visible users"} /><span className="sr-only">Select all visible users</span></label><span>User</span><span>Course access</span><span>Last sign-in</span><span>Actions</span></div>
          {filteredUsers.map((user) => {
            const purchases = data.purchases.filter((purchase) => purchase.user_id === user.id);
            const grants = data.grants.filter((grant) => grant.user_id === user.id && !grant.revoked_at);
            const isManaged = managedUserId === user.id;
            return <div className="user-record" key={user.id}><div className="user-row"><label className="select-user"><input type="checkbox" checked={selectedUserIds.includes(user.id)} onChange={() => toggleUser(user.id)} aria-label={`Select ${user.email}`} /><span className="sr-only">Select {user.email}</span></label>
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
          const lessons = data.lessons.filter((lesson) => lesson.course_id === course.id); const published = lessons.filter((lesson) => lesson.published).length; const unpublished = lessons.length - published; const videos = lessons.filter((lesson) => lesson.video_id).length; const empty = lessons.filter((lesson) => !lesson.content?.trim()).length; const isFullyPublished = lessons.length > 0 && unpublished === 0; const isFullyUnpublished = published === 0;
          return <article className="course" key={course.id}>
            <div className="course-title"><div><div className="title-line"><h3>{course.title}</h3>{course.is_free && <span className="status-badge">Free course</span>}<span className={`course-state ${isFullyPublished ? "live" : "draft"}`}>{isFullyPublished ? "Live" : isFullyUnpublished ? "Unpublished" : "Partially published"}</span></div><p>Review the course at a glance, then change only what needs attention.</p></div><Link className="preview-link" href={`/courses/${course.category_slug}/${course.slug}`} target="_blank">Preview course <span aria-hidden="true">↗</span></Link></div>
            <dl className="course-stats" aria-label={`${course.title} content health`}>
              <div><dt>Published</dt><dd>{published} of {lessons.length}</dd></div>
              <div><dt>With video</dt><dd>{videos} of {lessons.length}</dd></div>
              <div className={empty ? "needs-attention" : ""}><dt>Empty lessons</dt><dd>{empty}</dd></div>
            </dl>
            <div className="course-settings">
              {!course.is_free && <div className="setting-row"><div className="setting-copy"><strong>Live price</strong><span>Changes the price customers see at checkout.</span></div><div className="price-controls"><label className="sr-only" htmlFor={`price-${course.id}`}>Price in dollars for {course.title}</label><span className="currency" aria-hidden="true">$</span><input id={`price-${course.id}`} type="number" min="0.5" step="0.01" inputMode="decimal" defaultValue={((course.price_cents || 0) / 100).toFixed(2)} /><button className="secondary" disabled={busy || !course.stripe_price_id} onClick={() => { const input = document.getElementById(`price-${course.id}`) as HTMLInputElement; void act({ action: "set-price", courseId: course.id, priceCents: Math.round(Number(input.value) * 100) }, `${course.title} price updated`); }}>{course.stripe_price_id ? "Save price" : "Stripe unavailable"}</button></div></div>}
              <div className="setting-row"><div className="setting-copy"><strong>Course visibility</strong><span>{isFullyPublished ? "Every lesson is available to students." : isFullyUnpublished ? "Students cannot access any lessons." : `${unpublished} lesson${unpublished === 1 ? " is" : "s are"} still hidden.`}</span></div><div className="publish-actions">{!isFullyPublished && lessons.length > 0 && <button className="secondary" disabled={busy} onClick={() => void act({ action: "set-course-published", courseId: course.id, published: true }, `${course.title} published`)}>Publish {isFullyUnpublished ? "course" : "remaining lessons"}</button>}{!isFullyUnpublished && <button className="secondary danger" disabled={busy} onClick={() => confirm(`Unpublish every lesson in ${course.title}? Students will lose access until you publish it again.`) && void act({ action: "set-course-published", courseId: course.id, published: false }, `${course.title} unpublished`)}>Unpublish course</button>}</div></div>
            </div>
            <details className="lessons"><summary><span>Lessons</span><span className="lesson-summary">Manage titles, video status, and publishing for {lessons.length} lessons</span></summary>{lessons.map((lesson) => <div className="lesson" key={lesson.id}><span>{lesson.sort_order}. {lesson.title}</span><span className="muted">{lesson.video_id ? "Video added" : "No video"}{!lesson.content?.trim() ? " · Empty" : ""}</span><button className={`secondary ${lesson.published ? "danger" : ""}`} disabled={busy} onClick={() => void act({ action: "set-lesson-published", lessonId: lesson.id, published: !lesson.published }, lesson.published ? `${lesson.title} unpublished` : `${lesson.title} published`)}>{lesson.published ? "Unpublish" : "Publish"}</button></div>)}</details>
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
