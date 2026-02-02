import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Repertoire = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[5];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <RepertoireStyled>
        <h2>Building a repertoire</h2>
        <Image src={`${course.imgPath}/ag-black-background.jpg`} width={250} height={324} alt="Acoustic guitar with black background" />
        <p>Think about why you decided to play guitar. If you're like most students, you'd like to pick up an instrument and be able to play a song. Throughout this book, we will focus on methods to improve technique and overall understanding of the inner workings of music. It is equally important to develop your repertoire (or what songs you know) as you work through this book. In many ways having a large repertoire of music committed to memory is more important than other skills like understanding theory or reading sheet music. Not only will this repertoire determine what you play when you pick up your instrument but also what you can play with other people. Playing music with others is integral to developing as a musician. Many songs are based on similar chord progressions or melodic content. Building a large repertoire will also help you to recognize patterns and similarities between songs—only increasing your repertoire more.</p>
        <p>It may be difficult to decide which songs to begin with. In many ways, your specific repertoire doesn't really matter. Learning songs you like will help you retain interest in progressing and improving. If you enjoy hearing a song, you'll want to play it. Sounds obvious, right? Start with a list of five songs.</p>

        <h2>Learn the classics</h2>
        <p>In addition to songs you particularly like, it is also valuable to learn the classics. The history of guitar music is vast, and there is no better way to learn the instrument than from the masters. When parts of a song are too difficult for a beginner, it is always possible to learn a simplified version. You can revisit these songs while you grow as a musician. Learn the more intricate details when you are ready.</p>

        <h2>How to practice repertoire</h2>
        <p>Use the practice skills discussed previously when learning new repertoire. Devote part of your practice time to learning new music and part to reviewing songs you have already learned. This review is especially important as it is surprisingly easy to forget songs you once knew as your repertoire database grows. You can always learn simplified versions of any song to begin with and learn the more difficult parts as you get better at guitar. Use the repertoire list pages in the resources section at the end of this book to keep track of your repertoire. Be sure to add any and all new songs learned. If you don't ultimately like a song that you learned, don't hesitate to remove it from your list. There is no reason to waste practice time with music you dislike once you've learned what you can from a less-than-enjoyable song. Play songs you learn in as many settings as possible: by yourself, with other musicians on any instrument, with a full band, and especially along with recordings. Your repertoire list will grow and evolve with your skills and as your interests in new styles evolves. It is truly gratifying to look back at a long repertoire list after years of studying music.</p>

        <p><em>Interactive song list tracker and 300+ iconic guitar songs playlist coming soon.</em></p>
      </RepertoireStyled>
    </CourseContainer>
  );
};

export default Repertoire;

const RepertoireStyled = styled.div`
  h2 {
    margin-top: 1.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
