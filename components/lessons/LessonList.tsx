import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface LessonListProps {
  children: ReactNode;
  ordered?: boolean;
}

interface LessonListItemProps {
  children: ReactNode;
  term?: string;
}

export const LessonList = ({
  children,
  ordered = false,
}: LessonListProps): JSX.Element => {
  const ListTag = ordered ? "ol" : "ul";

  return <ListWrapper as={ListTag}>{children}</ListWrapper>;
};

export const LessonListItem = ({
  children,
  term,
}: LessonListItemProps): JSX.Element => {
  return (
    <ListItem>
      {term ? (
        <>
          <strong>{term}:</strong> {children}
        </>
      ) : (
        children
      )}
    </ListItem>
  );
};

export default LessonList;

const ListWrapper = styled.ul`
  margin: 1em 0;
  padding-left: 1.5em;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: 1.25em;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.75em;
  line-height: 1.6;

  strong {
    color: ${theme.colors.neutral[2]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1em;
  }
`;
