import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { theme } from "../../utils/styles/theme";

interface Props {
  isComplete: boolean;
  onToggle: () => void;
}

const LessonCompleteButton = ({ isComplete, onToggle }: Props): JSX.Element => {
  return (
    <Button onClick={onToggle} $isComplete={isComplete} aria-pressed={isComplete}>
      <FaCheck aria-hidden="true" />
      {isComplete ? "Completed" : "Mark Lesson Complete"}
    </Button>
  );
};

export default LessonCompleteButton;

const Button = styled.button<{ $isComplete: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 2em;
  padding: 0.75em 1.5em;
  min-height: 44px;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid
    ${({ $isComplete }) =>
      $isComplete ? theme.colors.green : theme.colors.neutral[10]};
  border-radius: 4px;
  background-color: ${({ $isComplete }) =>
    $isComplete ? theme.colors.green : "transparent"};
  color: ${({ $isComplete }) =>
    $isComplete ? theme.colors.neutral[2] : theme.colors.neutral[4]};
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    border-color: ${theme.colors.green};
    background-color: ${({ $isComplete }) =>
      $isComplete ? theme.colors.green : "rgba(131, 231, 203, 0.1)"};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.green};
    outline-offset: 2px;
  }

  svg {
    font-size: 0.9em;
  }
`;
