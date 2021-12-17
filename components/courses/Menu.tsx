import Link from "next/link";
import { CourseInterface } from "../../data/courseData";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface Props {
  course: CourseInterface;
}

const Menu = (props: Props): JSX.Element => {
  const { course } = props;
  const toKebabCase = (title: string) => {
    return title.toLowerCase().split(" ").join("-");
  };

  // console.log(toKebabCase(courses.pages[0].))
  // console.log(course);
  return (
    <MenuStyled className="menu">
      <h2>{course.title}</h2>
      <ul>
        {course.pages.map((page, i) => (
          <li key={i}>
            <Link href={`${course.url}/${toKebabCase(course.pages[i].title)}`}>
              <a>
                {i}
                {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.aside`
  grid-area: 1 / 1 / 2 / 2;
  background-color: red;
  /* position: fixed; */
  overflow: scroll;
  height: 100vh;
  padding-bottom: ${theme.sizes.l};
  /* display: none; */
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 1em;
  }
`;
