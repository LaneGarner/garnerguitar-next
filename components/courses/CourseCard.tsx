import Image from "next/image";
import styled from "styled-components";

import { Button } from "..";
import { theme } from "../../utils/styles/theme";

interface Props {
  title: string;
  part?: number;
  courseName: string;
  img: string;
  description: string;
  description2?: string;
  skills: string[];
  url: string;
}

const Card = ({ title, part, courseName, img, description, description2, skills, url }: Props): JSX.Element => {
  const half: number = Math.ceil(skills.length / 2);

  const skills1: string[] = skills.slice(0, half);
  const skills2: string[] = skills.slice(-half);
  return (
    <CardStyled id={`${courseName} ${part}`}>
      <p className="course-name">{courseName} Guitar Courses</p>
      {part && <h2>Course {part}</h2>}
      <h3 className="sub-heading">{title}</h3>
      {/* <figure className="course-image">
        <Image src={`/images/${img}`} width={225} height={300} alt={`${courseName}`} />
      </figure> */}

      <Button link={url}>Start {part && `part ${part}`}</Button>
      <p className="description">{description}</p>
      {description2 && <p className="description">{description2}</p>}
      <h3>You will learn:</h3>
      <ul>
        <div>
          {skills1.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </div>
        <div>
          {skills2.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </div>
      </ul>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  background-color: #eee;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em 2em 2em;
  border-radius: 1em;
  box-shadow: ${theme.utils.shadows.primary};

  .course-name {
    background-color: ${theme.colors.navy};
    color: white;
    width: 420px;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 1em;
  }

  .sub-heading {
    font-size: 1.4em;
    transform: translateY(-20px);
    text-align: center;
    margin-top: 0.5em;
  }

  .course-image {
    margin-bottom: 1em;
  }

  .description {
    margin-bottom: 1em;
    margin-top: 1em;
  }

  ul {
    display: flex;
    margin-top: 0;
    li {
      width: 150px;
    }
    div {
      margin: 1.2em;
    }
  }
`;
