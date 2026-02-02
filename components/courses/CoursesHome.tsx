import { Layout } from "../../components";
import styled from "styled-components";
import Head from "next/head";
import { CourseTitleCard } from "../../components/courses";
import { theme } from "../../utils/styles/theme";

import { courses, CoursesInterface } from "../../data/courseData";

const getMetrics = (category: CoursesInterface) => {
  const courseCount = category.courses.filter((c) => c.title !== "title").length;
  const lessonCount = category.courses.reduce(
    (total, c) => total + c.pages.filter((p) => p.title.trim()).length,
    0
  );
  return { courseCount, lessonCount };
};

const CoursesHome = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>Online Guitar Courses - Garner Guitar</title>
        </Head>
        <CoursesPageStyled>
          <h1 className="heading-style">Guitar Courses</h1>
          <p className="intro">
            Structured courses to take you from first chord to confident player. Learn at your own pace with video lessons and guided exercises designed to build real musical skills.
          </p>

          <section className="all-courses">
            <div className="course-cards-row">
              {courses.map((category, index) => {
                const metrics = getMetrics(category);
                return (
                  <CourseTitleCard
                    key={category.shortName}
                    title={category.title}
                    tagline={category.tagline}
                    img={category.img}
                    shortName={`/courses/${category.shortName}`}
                    courseCount={metrics.courseCount}
                    lessonCount={metrics.lessonCount}
                    highlights={category.highlights}
                    isFeatured={index === 0}
                    isComingSoon={category.isComingSoon}
                  />
                );
              })}
            </div>
          </section>

          <section className="value-props">
            <h2>Why learn with these courses?</h2>
            <ul>
              <li>
                <span className="checkmark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Self-paced learning</strong>
                  <span>Learn on your schedule, revisit lessons anytime</span>
                </div>
              </li>
              <li>
                <span className="checkmark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Free intro course</strong>
                  <span>Start learning at no cost with the Guitar Basics course</span>
                </div>
              </li>
              <li>
                <span className="checkmark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Video demonstrations</strong>
                  <span>See and hear exactly how each technique should sound</span>
                </div>
              </li>
              <li>
                <span className="checkmark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>Structured curriculum</strong>
                  <span>Clear path from fundamentals to advanced concepts</span>
                </div>
              </li>
            </ul>
          </section>
        </CoursesPageStyled>
      </Layout>
    </>
  );
};

export default CoursesHome;

const CoursesPageStyled = styled.div`
  margin-top: ${theme.sizes.s};
  margin-bottom: ${theme.sizes.xl};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.25rem;
    font-family: monospace;
    margin-bottom: 0.25em;
  }

  .intro {
    margin-bottom: ${theme.sizes.m};
    width: 80%;
    max-width: 700px;
    text-align: center;
  }

  .all-courses {
    margin-bottom: ${theme.sizes.l};
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .course-cards-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .value-props {
    background-color: ${theme.colors.neutral[2]};
    border-radius: ${theme.sizes.s};
    padding: ${theme.sizes.m};
    width: 90%;
    max-width: 600px;

    h2 {
      font-size: 1.25rem;
      margin-bottom: ${theme.sizes.s};
      text-align: center;
      color: ${theme.colors.neutral[15]};
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      align-items: flex-start;
      gap: ${theme.sizes.s};
      margin-bottom: ${theme.sizes.s};

      &:last-child {
        margin-bottom: 0;
      }
    }

    .checkmark {
      color: ${theme.colors.green};
      font-size: 1.25rem;
      line-height: 1.4;
    }

    strong {
      display: block;
      color: ${theme.colors.neutral[14]};
    }

    span {
      color: ${theme.colors.neutral[10]};
      font-size: 0.9rem;
    }
  }

  @media (max-width: 900px) {
    .intro {
      width: 90%;
    }

    .course-cards-row {
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
    }

    .value-props {
      width: 90%;
    }
  }
`;
