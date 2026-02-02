import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

import Card from "./Card";

const Cards = (): JSX.Element => {
  interface CardInterface {
    title: string;
    description: string;
    img: {
      file: string;
      width: number;
      height: number;
    };
    url: string;
  }

  const cardList: CardInterface[] = [
    {
      title: "Courses",
      description: "description",
      img: {file: "course-icon.png", width: 225, height: 300 },
      url: "courses",
    },
    {
      title: "Courses",
      description: "description",
      img: {file: "Garner-Guitar-Book-Cover.jpg", width: 174, height: 225},
      url: "courses",
    },
    {
      title: "Practice App",
      description: "description",
      img: {file: "shedr-screenshot.webp", width: 225, height: 140.63},
      url: "https://shedr.app/",
    },
    {
      title: "Lessons",
      description: "description",
      img: {file: "zoomLogo.png", width: 0, height: 0},
      url: "lessons",
    },
    {
      title: "Resources",
      description: "description",
      img: {file: "zoomLogo.png", width: 0, height: 0},
      url: "lessons",
    },
    {
      title: "Lessons",
      description: "description",
      img: {file: "zoomLogo.png", width: 0, height: 0},
      url: "lessons",
    },
  ];

  return (
    <CardContainerStyled>
      <div className="margin">
        {cardList.map((card, i) => (
          <Card key={i} title={card.title} description={card.description} img={card.img} url={card.url} />
        ))}
      </div>
    </CardContainerStyled>
  );
};

export default Cards;

const CardContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  margin-top: ${theme.sizes.xl};
  margin-bottom: ${theme.sizes.xxl};
  /* margin-left: 10%;
  margin-right: 10%; */
  .margin {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.sizes.l};
    width: 80%;
  }
`;
