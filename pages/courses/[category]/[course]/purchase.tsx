import { GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Layout } from "../../../../components";
import { createServerSideClient } from "../../../../lib/supabase/server";
import type { Course } from "../../../../lib/supabase/types";
import { theme } from "../../../../utils/styles/theme";

interface PurchasePageProps {
  course: Course;
  categorySlug: string;
  userEmail: string;
  alreadyPurchased: boolean;
}

export default function PurchasePage({
  course,
  categorySlug,
  userEmail,
  alreadyPurchased,
}: PurchasePageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const priceDisplay = course.price_cents
    ? `$${(course.price_cents / 100).toFixed(2)}`
    : "Free";

  const handlePurchase = async () => {
    if (!course.stripe_price_id) {
      setError("This course is not available for purchase.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: course.stripe_price_id,
          courseId: course.id,
          successUrl: `${window.location.origin}/courses/${categorySlug}/${course.slug}?success=true`,
          cancelUrl: `${window.location.origin}/courses/${categorySlug}/${course.slug}/purchase?canceled=true`,
        }),
      });

      const { url, error: apiError } = await response.json();

      if (apiError) {
        setError(apiError);
        return;
      }

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError("Failed to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (alreadyPurchased) {
    return (
      <Layout>
        <Head>
          <title>Already Purchased | Garner Guitar</title>
        </Head>
        <PurchasePageStyled>
          <div className="purchase-container">
            <div className="success-badge">
              <FaCheck />
            </div>
            <h1>You already own this course!</h1>
            <p>You have full access to {course.title}.</p>
            <Link
              href={`/courses/${categorySlug}/${course.slug}`}
              className="primary-btn"
            >
              Go to Course
            </Link>
          </div>
        </PurchasePageStyled>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Purchase {course.title} | Garner Guitar</title>
      </Head>
      <PurchasePageStyled>
        <div className="purchase-container">
          <h1>{course.title}</h1>
          <p className="description">{course.description}</p>

          <div className="price-card">
            <div className="price">{priceDisplay}</div>
            <p className="price-note">One-time purchase. Lifetime access.</p>
          </div>

          {router.query.canceled && (
            <div className="info-message">
              Checkout was canceled. You can try again when you&apos;re ready.
            </div>
          )}

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <button
            onClick={handlePurchase}
            className="purchase-btn"
            disabled={loading || !course.stripe_price_id}
          >
            {loading ? "Processing..." : `Purchase for ${priceDisplay}`}
          </button>

          <p className="logged-in-as">
            Logged in as <strong>{userEmail}</strong>
          </p>

          <Link
            href={`/courses/${categorySlug}`}
            className="back-link"
          >
            Back to courses
          </Link>
        </div>
      </PurchasePageStyled>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PurchasePageProps> = async (
  context
) => {
  const { category, course: courseSlug } = context.params as {
    category: string;
    course: string;
  };

  const supabase = createServerSideClient(context);

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Require authentication
  if (!user) {
    return {
      redirect: {
        destination: `/login?redirect=/courses/${category}/${courseSlug}/purchase`,
        permanent: false,
      },
    };
  }

  // Get the course
  const { data: courseData, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("category_slug", category)
    .eq("slug", courseSlug)
    .single();

  if (courseError || !courseData) {
    return { notFound: true };
  }

  const course = courseData as Course;

  // Free courses don't need purchase
  if (course.is_free) {
    return {
      redirect: {
        destination: `/courses/${category}/${courseSlug}`,
        permanent: false,
      },
    };
  }

  // Check if already purchased
  const { data: purchase } = await supabase
    .from("user_purchases")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_id", course.id)
    .single();

  return {
    props: {
      course,
      categorySlug: category,
      userEmail: user.email || "",
      alreadyPurchased: !!purchase,
    },
  };
};

const PurchasePageStyled = styled.div`
  min-height: calc(100vh - ${theme.sizes.header});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .purchase-container {
    width: 100%;
    max-width: 500px;
    ${theme.utils.cards.dark}
    text-align: center;
  }

  .success-badge {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;

    svg {
      font-size: 1.5rem;
      color: ${theme.colors.neutral[2]};
    }
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: ${theme.colors.neutral[15]};
  }

  .description {
    color: ${theme.colors.neutral[10]};
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .price-card {
    background-color: ${theme.colors.neutral[2]};
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    .price {
      font-size: 2.5rem;
      font-weight: 700;
      color: ${theme.colors.green};
      margin-bottom: 0.5rem;
    }

    .price-note {
      color: ${theme.colors.neutral[8]};
      font-size: 0.875rem;
      margin: 0;
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

  .info-message {
    background-color: rgba(131, 231, 203, 0.1);
    border: 1px solid rgba(131, 231, 203, 0.3);
    color: ${theme.colors.green};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }

  .purchase-btn {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.neutral[2]};
    border: none;
    border-radius: 6px;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 150ms ease, transform 150ms ease;
    margin-bottom: 1rem;

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

  .primary-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.neutral[2]};
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 150ms ease;

    &:hover {
      opacity: 0.9;
    }
  }

  .logged-in-as {
    color: ${theme.colors.neutral[8]};
    font-size: 0.875rem;
    margin-bottom: 1rem;

    strong {
      color: ${theme.colors.neutral[10]};
    }
  }

  .back-link {
    color: ${theme.colors.green};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
