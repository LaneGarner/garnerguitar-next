import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../components";
import { createClient } from "../lib/supabase/client";
import { theme } from "../utils/styles/theme";

export default function LoginPage() {
  const router = useRouter();
  const redirect = (router.query.redirect as string) || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        return;
      }

      // Redirect after successful login
      router.push(redirect);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Log In | Garner Guitar</title>
      </Head>
      <LoginPageStyled>
        <div className="form-container">
          <h1>Log In</h1>
          <p className="subtitle">
            Welcome back! Log in to access your courses.
          </p>

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                disabled={loading}
                minLength={6}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="links">
            <Link href="/forgot-password">Forgot your password?</Link>
            <p>
              Don&apos;t have an account?{" "}
              <Link href={`/signup${redirect !== "/" ? `?redirect=${encodeURIComponent(redirect)}` : ""}`}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </LoginPageStyled>
    </Layout>
  );
}

const LoginPageStyled = styled.div`
  min-height: calc(100vh - ${theme.sizes.header});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .form-container {
    width: 100%;
    max-width: 400px;
    ${theme.utils.cards.dark}
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.neutral[15]};
  }

  .subtitle {
    color: ${theme.colors.neutral[10]};
    margin-bottom: 1.5rem;
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
  }

  .submit-btn {
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

  .links {
    margin-top: 1.5rem;
    text-align: center;

    a {
      color: ${theme.colors.green};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin-top: 1rem;
      color: ${theme.colors.neutral[10]};
    }
  }
`;
