import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface Props {
  route: string;
}

interface CourseStateInterface {
  name: string;
}

const CourseHeader = ({ route }: Props): JSX.Element => {
  const [course, setCourse] = useState<CourseStateInterface>({ name: "" });

  useEffect(() => {
    const courseRoute = route.split("/");
    if (courseRoute.includes("beginner-to-advanced")) {
      setCourse({ name: "Beginner to Advanced Guitar Courses" });
    } else if (courseRoute.includes("jazz")) {
      setCourse({ name: "Jazz Guitar Courses" });
    } else if (courseRoute.includes("young-beginner")) {
      setCourse({ name: "Young Beginners Guitar Courses" });
    }
  }, []);

  return (
    <CourseHeaderStyled>
      <div>{course.name}</div>
    </CourseHeaderStyled>
  );
};

export default CourseHeader;

const CourseHeaderStyled = styled.header`
  background-color: dodgerblue;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
  height: ${theme.sizes.header};
`;
