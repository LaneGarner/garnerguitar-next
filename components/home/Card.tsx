import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { theme } from "../../utils/styles/theme";

interface CardContentProps {
  description: string;
  title: string;
  img: {
    file: string,
    width: number,
    height: number,
  };
}

interface CardProps extends CardContentProps {
  url: string;
}

const CardContent = ({ title, description, img }: CardContentProps): JSX.Element => {
  return (
    <CardStyled>
      <h2 className="heading-style" style={{}}>
        {title}
      </h2>
      {/* <p>{description}</p> */}
      <Image src={`/images/${img.file}`} width={img.width} height={img.height} alt="courses" />
    </CardStyled>
  );
};

const Card = ({ title, description, img, url }: CardProps): JSX.Element => {
  return (
    <>
      {title !== "Practice App" ? (
        <Link href={`/${url}`}>
          <CardContent title={title} description={description} img={img} />
        </Link>
      ) : (
        <a href={url} target="_blank" rel="noreferrer noopener">
          <CardContent title={title} description={description} img={img} />
        </a>
      )}
    </>
  );
};

export default Card;

const CardStyled = styled.article`
  ${theme.utils.cards.darker}
  width: 17em;
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.utils.shadows.dark};
  }

  h2 {
    font-size: ${theme.sizes.l};
    margin: 0 auto 0px;
    padding: 20px;
    &:hover {
      text-decoration: none;
    }
  }
`;
