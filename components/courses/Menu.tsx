import Link from "next/link";
import { useRouter } from "next/router";
import { CourseInterface } from "../../data/courseData";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";
import { toKebabCase } from "../../utils";

interface Props {
  course: CourseInterface;
}

const Menu = (props: Props): JSX.Element => {
  const { course } = props;
  const router = useRouter();
  const currentPath = router.asPath;

  const getLessonUrl = (page: { title: string }, index: number) => {
    return page.title === "Introduction" || index === 0
      ? course.url
      : `${course.url}/${toKebabCase(page.title)}`;
  };

  const isActive = (page: { title: string }, index: number) => {
    const lessonUrl = getLessonUrl(page, index);
    return currentPath === lessonUrl;
  };

  return (
    <MenuStyled className="menu">
      <h3 className="course-head">{course.title}</h3>
      <hr />
      <ul className="nav-list">
        {course.pages.map((page, i) => (
          <li key={i} className="nav-item">
            <Link href={getLessonUrl(page, i)}>
              <a className={`nav-link ${isActive(page, i) ? "active" : ""}`}>
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
  background-color: ${theme.colors.neutral[14]};
  overflow-y: auto;
  height: 100vh;
  padding: ${theme.sizes.s};
  padding-bottom: ${theme.sizes.l};

  .course-head {
    font-size: 1.4rem;
    margin: 0;
    padding-left: 0.5em;
    color: ${theme.colors.neutral[3]};
  }

  hr {
    border-top: 1px solid ${theme.colors.neutral[11]};
    margin: 0.75em 0;
  }

  .nav-list {
    padding-left: 0;
    margin: 0;
  }

  .nav-item {
    list-style-type: none;
    margin-bottom: 0.25em;
  }

  .nav-link {
    display: block;
    padding: 0.5em 1em;
    color: ${theme.colors.neutral[5]};
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover {
      background-color: ${theme.colors.green};
      color: ${theme.colors.neutral[2]};
    }

    &.active {
      background-color: ${theme.colors.green};
      color: ${theme.colors.neutral[2]};
      font-weight: 600;
    }
  }
`;
