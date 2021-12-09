import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { theme } from "../../utils/styles/theme";

interface CardContentProps {
  description: string;
  title: string;
  img: string;
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
      <Image src={`/images/${img}`} width={225} height={300} alt="courses" />
    </CardStyled>
  );
};

const Card = ({ title, description, img, url }: CardProps): JSX.Element => {
  return (
    <>
      {title !== "Practice App" ? (
        <Link href={`/${url}`}>
          <a>
            <CardContent title={title} description={description} img={img} />
          </a>
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
  width: 17em;
  box-shadow: ${theme.utils.shadows.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.sizes.s};
  cursor: pointer;
  &:hover {
    transform: translateX(5px);
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
