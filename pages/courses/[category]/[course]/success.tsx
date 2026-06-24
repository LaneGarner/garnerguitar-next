import { GetServerSideProps } from "next";
import { useState, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Layout } from "../../../../components";
import { stripe } from "../../../../lib/stripe/server";
import { createServiceClient } from "../../../../lib/supabase/server";
import { createClient } from "../../../../lib/supabase/client";
import type { Course } from "../../../../lib/supabase/types";
import { theme } from "../../../../utils/styles/theme";

type SuccessState = "needsAccount" | "accountExists" | "loggedInAlready";

interface SuccessPageProps {
  email: string;
  courseTitle: string;
  courseHref: string;
  loginHref: string;
  state: SuccessState;
  sessionId: string;
}

export default function SuccessPage({
  email,
  courseTitle,
  courseHref,
  loginHref,
  state,
  sessionId,
}: SuccessPageProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateAccount = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/create-account-from-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      // An account already existed for this email — send them to log in.
      if (data.status === "accountExists") {
        window.location.href = loginHref;
        return;
      }

      // Account created. Sign in to establish the session cookie, and only
      // redirect into the course once that resolves (otherwise the course's
      // server-side access check runs before the cookie is set and bounces
      // the user back to the purchase page).
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        // Account exists but sign-in failed — fall back to the login page.
        window.location.href = loginHref;
        return;
      }

      window.location.href = courseHref;
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Payment Complete | Garner Guitar</title>
      </Head>
      <SuccessPageStyled>
        <div className="form-container">
          <div className="badge" aria-hidden="true">
            <FaCheck />
          </div>
          <h1>Payment complete</h1>

          {state === "loggedInAlready" && (
            <>
              <p className="subtitle">
                You now have access to <strong>{courseTitle}</strong>. Enjoy the
                course!
              </p>
              <Link href={courseHref} className="primary-btn">
                Start the course
              </Link>
            </>
          )}

          {state === "accountExists" && (
            <>
              <p className="subtitle">
                Thanks for your purchase of <strong>{courseTitle}</strong>. You
                already have an account for <strong>{email}</strong> — log in to
                access your course.
              </p>
              <Link href={loginHref} className="primary-btn">
                Log in to access
              </Link>
            </>
          )}

          {state === "needsAccount" && (
            <>
              <p className="subtitle">
                You&apos;re in! Set a password for <strong>{email}</strong> to
                create your account and unlock <strong>{courseTitle}</strong>.
              </p>

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleCreateAccount}>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    disabled={loading}
                    minLength={8}
                  />
                  <span className="hint">At least 8 characters</span>
                </div>

                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    disabled={loading}
                    minLength={8}
                  />
                </div>

                <button type="submit" className="primary-btn" disabled={loading}>
                  {loading ? "Creating your account..." : "Create account & start learning"}
                </button>
              </form>
            </>
          )}
        </div>
      </SuccessPageStyled>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<SuccessPageProps> = async (
  context
) => {
  const { category, course: courseSlug } = context.params as {
    category: string;
    course: string;
  };
  const sessionId = context.query.session_id as string | undefined;

  const coursePurchaseHref = `/courses/${category}/${courseSlug}/purchase`;

  if (!sessionId) {
    return { redirect: { destination: coursePurchaseHref, permanent: false } };
  }

  const service = createServiceClient();

  // Look up the course so we can verify it matches the paid session and show
  // its title.
  const { data: courseData } = await service
    .from("courses")
    .select("*")
    .eq("category_slug", category)
    .eq("slug", courseSlug)
    .single();

  if (!courseData) {
    return { notFound: true };
  }

  const course = courseData as Course;

  // Verify the Stripe session is real, paid, and for THIS course.
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return { redirect: { destination: coursePurchaseHref, permanent: false } };
  }

  if (
    session.payment_status !== "paid" ||
    session.metadata?.courseId !== course.id
  ) {
    return { redirect: { destination: coursePurchaseHref, permanent: false } };
  }

  const email = (
    session.customer_details?.email ?? session.customer_email ?? ""
  ).toLowerCase();

  const courseHref = `/courses/${category}/${courseSlug}`;
  const loginHref = `/login?redirect=${encodeURIComponent(courseHref)}`;

  // Determine the state: logged-in buyer, existing account, or brand-new guest.
  let state: SuccessState;
  if (session.metadata?.userId) {
    state = "loggedInAlready";
  } else {
    const { data: usersData } = await service.auth.admin.listUsers();
    const existing = usersData?.users?.find(
      (u) => u.email?.toLowerCase() === email
    );
    state = existing ? "accountExists" : "needsAccount";
  }

  return {
    props: {
      email,
      courseTitle: course.title,
      courseHref,
      loginHref,
      state,
      sessionId,
    },
  };
};

const SuccessPageStyled = styled.div`
  min-height: calc(100vh - ${theme.sizes.header});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .form-container {
    width: 100%;
    max-width: 440px;
    ${theme.utils.cards.dark}
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${theme.colors.green};
    color: ${theme.colors.neutral[2]};
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.neutral[15]};
  }

  .subtitle {
    color: ${theme.colors.neutral[10]};
    line-height: 1.6;
    margin-bottom: 1.5rem;

    strong {
      color: ${theme.colors.neutral[13]};
    }
  }

  .error-message {
    background-color: rgba(220, 53, 69, 0.1);
    border: 1px solid rgba(220, 53, 69, 0.3);
    color: #ff6b6b;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 500;
      color: ${theme.colors.neutral[12]};
    }

    input {
      padding: 0.75rem 1rem;
      border: 1px solid ${theme.colors.neutral[5]};
      border-radius: 6px;
      background-color: ${theme.colors.neutral[2]};
      color: ${theme.colors.neutral[15]};
      font-size: 1rem;
      transition: border-color 150ms ease;

      &:focus {
        outline: none;
        border-color: ${theme.colors.green};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .hint {
      font-size: 0.75rem;
      color: ${theme.colors.neutral[8]};
    }
  }

  .primary-btn {
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 0.875rem 1.5rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.neutral[2]};
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 150ms ease, transform 150ms ease;
    margin-top: 0.5rem;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
