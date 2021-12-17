import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../utils/styles/theme";

interface Props {
  title: string;
  img: string;
  shortName: string;
}

const CourseTitleCard = (props: Props): JSX.Element => {
  const { title, img, shortName } = props;

  console.log(shortName);
  return (
    <Link href={shortName}>
      <a>
        <CourseTitleCardStyled>
          <h3>{title} Guitar Courses</h3>
          <Image className="img" src={img} width={225} height={300} alt={"Garner Guitar Book Cover"} />
        </CourseTitleCardStyled>
      </a>
    </Link>
  );
};

export default CourseTitleCard;

const CourseTitleCardStyled = styled.div`
  width: 300px;
  /* height: 300px; */
  border-radius: ${theme.sizes.s};
  background-color: ${theme.colors.neutral[3]};
  color: white;
  padding: 1em;
  display: flex;
  box-shadow: ${theme.utils.shadows.primary};
  /* flex-direction: center; */
  align-items: center;

  &:hover {
    transform: translateX(5px);
    transform: translateY(-5px);
    box-shadow: ${theme.utils.shadows.dark};
  }

  .img {
    border-radius: ${theme.sizes.xs};
  }
  h3 {
    padding-bottom: ${theme.sizes.xs};
    transform: translateY(20px);
    text-align: right;
    margin-right: ${theme.sizes.xs};

    &::before {
      position: absolute;
      height: 9px;
      width: 200px;
      transform: translateY(-12px);
      content: "";
      background-color: ${theme.colors.gold};
    }
  }
`;
