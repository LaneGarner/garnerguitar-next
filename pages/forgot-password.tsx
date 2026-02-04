import { useState, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Layout } from "../components";
import { createClient } from "../lib/supabase/client";
import { theme } from "../utils/styles/theme";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      if (authError) {
        setError(authError.message);
        return;
      }

      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Layout>
        <Head>
          <title>Check Your Email | Garner Guitar</title>
        </Head>
        <ForgotPasswordPageStyled>
          <div className="form-container">
            <h1>Check Your Email</h1>
            <p className="success-message">
              If an account exists for <strong>{email}</strong>, we&apos;ve sent
              a password reset link. Please check your inbox.
            </p>
            <p className="note">
              If you don&apos;t see the email, check your spam folder.
            </p>
            <Link href="/login" className="back-link">
              Return to login
            </Link>
          </div>
        </ForgotPasswordPageStyled>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Reset Password | Garner Guitar</title>
      </Head>
      <ForgotPasswordPageStyled>
        <div className="form-container">
          <h1>Reset Password</h1>
          <p className="subtitle">
            Enter your email and we&apos;ll send you a link to reset your
            password.
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

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="links">
            <Link href="/login">Back to login</Link>
          </div>
        </div>
      </ForgotPasswordPageStyled>
    </Layout>
  );
}

const ForgotPasswordPageStyled = styled.div`
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

  .success-message {
    color: ${theme.colors.neutral[12]};
    line-height: 1.6;
    margin-bottom: 1rem;

    strong {
      color: ${theme.colors.green};
    }
  }

  .note {
    color: ${theme.colors.neutral[8]};
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .back-link {
    display: inline-block;
    color: ${theme.colors.green};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
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
  }
`;
