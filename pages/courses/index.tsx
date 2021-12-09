import { CourseCard, Layout } from "../../components";
import styled from "styled-components";
import Head from "next/head";
import { CourseTitleCard } from "../../components/courses";
import { theme } from "../../utils/styles/theme";
import Image from "next/image";

import { courses } from "./courseData";

const Courses = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>Online Guitar Courses - Garner Guitar</title>
        </Head>
        <CoursesPageStyled>
          <h2 className="heading-style">Online Guitar Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem voluptates quis, reiciendis iusto iste nam quisquam eos similique maxime tempora dolor sint
            enim fuga pariatur voluptatibus illum, sunt at consequuntur veritatis in veniam praesentium. Minus voluptate voluptas odio, deserunt a quisquam. Culpa provident nulla
            laboriosam veniam explicabla consequuntur alias eaque veniam natus possimus sunt tempora amet exercitationem, quisquam, deleniti dolore quam. Tempora perferendis
            expedita doloremque aut dolores corrupti, itaque, adipisci tenetur inventore velit sunt ipsam, perspiciatis debitis sint.
          </p>
          <div className="course-title-cards">
            {courses.map((course) => (
              <CourseTitleCard title={course.title} img={course.img} url={course.url} />
            ))}
          </div>
          {courses.map((course, i) => (
            <>
              <h3 className="course-name-heading" id="beginner">
                {course.title}
              </h3>
              <div className="course-description-container">
                <div>
                  <Image src={course.img} width={174} height={225} layout="fixed" alt="Garner Guitar book cover" />
                </div>
                <p>{course.description}</p>
              </div>
              <div className="course-cards">
                {course.parts.map((part, i) => (
                  <CourseCard
                    key={i}
                    title={part.title}
                    part={part.part}
                    courseName={course.title}
                    img={part.img}
                    description={part.description}
                    description2={part.description2}
                    skills={part.skills}
                    url={part.url}
                  />
                ))}
              </div>
            </>
          ))}
        </CoursesPageStyled>
      </Layout>
    </>
  );
};

export default Courses;

const CoursesPageStyled = styled.div`
  margin-top: ${theme.sizes.s};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${theme.sizes.l};
  }

  .course-name-heading {
    font-size: ${theme.sizes.l};
    text-align: center;
    margin: 0 ${theme.sizes.l} ${theme.sizes.xs};
  }

  .course-description-container {
    display: flex;
    align-items: center;
    gap: ${theme.sizes.l};
    width: 80%;
    margin-bottom: ${theme.sizes.xxl};
  }

  p {
    margin-bottom: ${theme.sizes.m};
    width: 80%;
  }

  .course-title-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.m};
    margin-bottom: ${theme.sizes.l};
  }

  .course-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    margin-bottom: ${theme.sizes.m};
  }

  #beginner {
    scroll-margin: ${theme.sizes.header};
  }
`;
