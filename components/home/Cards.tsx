import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

import Card from "./Card";

const Cards = (): JSX.Element => {
  interface CardInterface {
    title: string;
    description: string;
    img: string;
    url: string;
  }

  const cardList: CardInterface[] = [
    {
      title: "Courses",
      description: "description",
      img: "course-icon.png",
      url: "courses",
    },
    {
      title: "Book",
      description: "description",
      img: "Garner-Guitar-Book-Cover.jpg",
      url: "book",
    },
    {
      title: "Practice App",
      description: "description",
      img: "shedr-screenshot.webp",
      url: "https://shedr.app/",
    },
    {
      title: "Lessons",
      description: "description",
      img: "zoomLogo.png",
      url: "lessons",
    },
    {
      title: "Lessons",
      description: "description",
      img: "zoomLogo.png",
      url: "lessons",
    },
    {
      title: "Lessons",
      description: "description",
      img: "zoomLogo.png",
      url: "lessons",
    },
  ];
  return (
    <CardContainerStyled>
      {cardList.map((card, i) => (
        <Card key={i} title={card.title} description={card.description} img={card.img} url={card.url} />
      ))}
    </CardContainerStyled>
  );
};

export default Cards;

const CardContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.sizes.l};
  max-width: 100vw;
  justify-content: center;
  margin: ${theme.sizes.xl} ${theme.sizes.m};
`;
