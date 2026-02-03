import { Layout } from "../../components";
import styled from "styled-components";
import Head from "next/head";
import { CourseTitleCard, WhyLearnCard } from "../../components/courses";
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
          <div className="intro-card">
            <p className="intro">
              Structured courses to take you from first chord to confident player. Learn at your own pace with video lessons and guided exercises designed to build real musical skills.
            </p>
          </div>

          <section className="courses-grid">
            {courses.map((category, index) => {
              const metrics = getMetrics(category);
              const gridClass =
                index === 0 ? "featured-card" : index === 1 ? "jazz-card" : "young-card";
              return (
                <div key={category.shortName} className={gridClass}>
                  <CourseTitleCard
                    title={category.title}
                    tagline={category.tagline}
                    img={category.img}
                    shortName={`/courses/${category.shortName}`}
                    courseCount={metrics.courseCount}
                    lessonCount={metrics.lessonCount}
                    highlights={
                      index === 0
                        ? category.courses.flatMap((course) => course.skills)
                        : category.highlights
                    }
                    isFeatured={index === 0}
                    isComingSoon={category.isComingSoon}
                  />
                </div>
              );
            })}
            <div className="why-card">
              <WhyLearnCard />
            </div>
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

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.75rem;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }

  .intro-card {
    ${theme.utils.cards.darker}
    margin-bottom: ${theme.sizes.m};
    width: 80%;
    max-width: 700px;
    text-align: center;
    line-height: 1.6;

    @media (max-width: ${theme.breakpoints.md}) {
      width: 90%;
      padding: 1.25rem 1.5rem;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 95%;
      padding: 1rem 1.25rem;
      font-size: 1em;
    }
  }

  .intro {
    margin: 0;
  }

  .courses-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 1.5rem;
    max-width: 900px;
    width: 90%;
    align-items: start;
  }

  .featured-card {
    grid-row: 1 / 3;
    grid-column: 1;
  }

  .jazz-card {
    grid-row: 1;
    grid-column: 2;
    margin-top: 1rem;
  }

  .young-card {
    grid-row: 2;
    grid-column: 2;
  }

  .why-card {
    grid-row: 3;
    grid-column: 1 / -1;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    text-align: center;

    .courses-grid {
      grid-template-columns: 1fr;
      padding: 0 1rem;
      justify-items: center;
    }

    .featured-card {
      grid-row: auto;
      grid-column: 1;
    }

    .jazz-card {
      grid-row: auto;
      grid-column: 1;
      margin-top: 0;
    }

    .young-card {
      grid-row: auto;
      grid-column: 1;
    }

    .why-card {
      grid-row: auto;
      grid-column: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    .courses-grid {
      padding: 0 ${theme.sizes.xs};
      gap: 1rem;
    }
  }
`;
