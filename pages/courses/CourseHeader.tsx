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
    switch (route) {
      case "/courses/beginner":
        setCourse({ name: "Beginning to Intermediate Guitar Course" });
        break;
      case "/courses/jazz":
        setCourse({ name: "Jazz Guitar Course" });
        break;
      case "/courses/young-beginner":
        setCourse({ name: "Guitar for Young Beginners Course" });
        break;
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
