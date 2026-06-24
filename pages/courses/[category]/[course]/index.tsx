import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import Image from "next/image";
import { Layout } from "../../../../components";
import LessonCompleteButton from "../../../../components/courses/LessonCompleteButton";
import {
  LessonImage,
  LessonHeading,
  VideoPlayer,
  YouTubeEmbed,
} from "../../../../components/lessons";
import { createServerSideClient, isPreviewMode } from "../../../../lib/supabase/server";
import type { LessonWithCourse, Course, Lesson } from "../../../../lib/supabase/types";
import { theme } from "../../../../utils/styles/theme";
import { useLessonProgress } from "../../../../hooks";
import { useSupabaseCourse } from "../../../../context";

interface CourseIndexPageProps {
  lesson: LessonWithCourse;
  course: Course;
  allLessons: Lesson[];
  categorySlug: string;
}

export default function CourseIndexPage({
  lesson,
  course,
  allLessons,
  categorySlug,
}: CourseIndexPageProps) {
  const supabaseCourse = useSupabaseCourse();

  // Populate the Supabase course context for navigation
  useEffect(() => {
    if (supabaseCourse?.setCourseData) {
      supabaseCourse.setCourseData({
        course,
        lessons: allLessons,
        categorySlug,
      });
    }
  }, [course, allLessons, categorySlug]);

  // Build lesson key for progress tracking
  const lessonKey = `${categorySlug}:${course.slug}:${lesson.slug}`;
  const { isComplete, toggleComplete } = useLessonProgress(lessonKey);

  // Custom components for ReactMarkdown
  const components = {
    img: ({ src, alt, ...props }: { src?: string; alt?: string }) => {
      if (!src) return null;

      const isStoragePath = !src.startsWith("/") && !src.startsWith("http");
      const isFree = course.is_free;

      if (isStoragePath) {
        return (
          <LessonImage
            src={src}
            alt={alt || "Lesson image"}
            isFree={isFree}
            courseSlug={course.slug}
          />
        );
      }

      return (
        <Image
          src={src}
          alt={alt || "Lesson image"}
          width={700}
          height={500}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      );
    },

    h2: ({ children, ...props }: { children?: React.ReactNode }) => (
      <LessonHeading level={2}>{children}</LessonHeading>
    ),
    h3: ({ children, ...props }: { children?: React.ReactNode }) => (
      <LessonHeading level={3}>{children}</LessonHeading>
    ),

    video: ({ node, ...props }: any) => {
      const videoId = props.id || props["data-id"];
      if (videoId) {
        return <VideoPlayer videoId={videoId} title={props.title} />;
      }
      return null;
    },

    youtube: ({ node, ...props }: any) => {
      const videoId = props.id || props["data-id"];
      if (videoId) {
        return <YouTubeEmbed videoId={videoId} title={props.title} />;
      }
      return null;
    },
  };

  return (
    <Layout course>
      <Head>
        <title>{lesson.title} | {course.title} | Garner Guitar</title>
        <meta name="description" content={course.description || `Learn guitar with the ${course.title} course.`} />
      </Head>
      <LessonContainerStyled>
        <section className="container">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={components}
          >
            {lesson.content}
          </ReactMarkdown>

          <LessonCompleteButton
            isComplete={isComplete}
            onToggle={toggleComplete}
          />
        </section>
      </LessonContainerStyled>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<CourseIndexPageProps> = async (
  context
) => {
  const { category, course: courseSlug } = context.params as {
    category: string;
    course: string;
  };

  const supabase = createServerSideClient(context);

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

  // Check access for paid courses BEFORE fetching lessons (RLS blocks lesson reads without auth)
  if (!course.is_free) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // Redirect to purchase page (guests can buy without logging in first)
      return {
        redirect: {
          destination: `/courses/${category}/${courseSlug}/purchase`,
          permanent: false,
        },
      };
    }

    const { data: purchase } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", course.id)
      .single();

    if (!purchase) {
      return {
        redirect: {
          destination: `/courses/${category}/${courseSlug}/purchase`,
          permanent: false,
        },
      };
    }
  }

  // Get the first lesson (Introduction) - now safe to fetch after auth check
  let lessonQuery = supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id);

  // Only filter by published in production
  if (!isPreviewMode) {
    lessonQuery = lessonQuery.eq("published", true);
  }

  const { data: lessonData, error: lessonError } = await lessonQuery
    .order("sort_order", { ascending: true })
    .limit(1)
    .single();

  if (lessonError || !lessonData) {
    return { notFound: true };
  }

  const lesson = lessonData as Lesson;

  // Get all lessons for navigation
  let allLessonsQuery = supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id);

  if (!isPreviewMode) {
    allLessonsQuery = allLessonsQuery.eq("published", true);
  }

  const { data: allLessonsData } = await allLessonsQuery
    .order("sort_order", { ascending: true });

  const allLessons = (allLessonsData || []) as Lesson[];

  const lessonWithCourse: LessonWithCourse = {
    ...lesson,
    courses: course,
  };

  return {
    props: {
      lesson: lessonWithCourse,
      course,
      allLessons: allLessons || [],
      categorySlug: category,
    },
  };
};

const LessonContainerStyled = styled.div`
  overflow-x: hidden;

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    margin-top: 1.5em;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.3em;
    }
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 0.7em;
    margin-top: 0.7em;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.25em;
    }
  }

  p {
    margin-bottom: 1em;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1em;
    }
  }

  img {
    margin: 0.5em 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${theme.colors.neutral[2]};
  }

  .container {
    padding: 1em;
    padding-left: 2em;
    max-width: 720px;
    overflow-x: hidden;

    @media (max-width: ${theme.breakpoints.md}) {
      padding-left: 1em;
      max-width: 100%;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0.75em;
    }

    > :first-child > h2:first-child,
    > :first-child > h3:first-child {
      margin-top: 0;
    }
  }
`;
