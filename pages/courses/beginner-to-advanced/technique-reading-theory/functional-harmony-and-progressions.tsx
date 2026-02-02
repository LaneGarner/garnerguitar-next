import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const FunctionalHarmony = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 1;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[27];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <FunctionalHarmonyStyled>

        <h2>Functional harmony</h2>
        <p>Functional harmony describes the relationship of each chord to the key center. Stacking thirds from each degree of the major scale creates seven chords within a given key. The key will determine whether each interval is a major or minor third. Analyzing these patterns will tell you whether you have a major, minor, or diminished chord. Let's look at the key of C major:</p>
        <Image src={`${course.imgPath}/functional-harmony.jpg`} width={600} height={180} alt="Functional harmony" />

        <h2>Roman numerals & Nashville numbers</h2>
        <p>There are two common ways to notate chord function. The traditional (i.e. classical) method is to use Roman numerals: uppercase for major and lowercase for minor. Another common method is the Nashville Number System. This system uses Arabic numerals and chord symbols in place of Roman numerals but essentially works in the same way. These systems make it easier to learn songs or teach a chord progression to a fellow musician.</p>
        <Image src={`${course.imgPath}/roman-numberals-nashville.jpg`} width={600} height={107} alt="Roman numerals and Nashville numbers" />
        <Image src={`${course.imgPath}/chord-function.jpg`} width={600} height={494} alt="Chord function" />

        <h2>Common chord progressions</h2>
        <p>Most popular music uses the same chord progressions, or patterns, over and over in different keys. Practicing 1, 4, 5, and 6m chords in common guitar keys will help you advance as a guitarist and learn new songs quickly. Use the chart on the previous page for help finding these chords in some common guitar keys.</p>

        <h3>Common guitar keys: CAGED</h3>
        <p>After learning chord progressions in these common keys, we can transpose them to less common keys with barre chords or even with a capo.</p>
        <p>These popular songs use 1, 4, 5, and 6m chords in different orders and combinations. This list is a starting point as these progressions are used in many styles of music. How many of these songs are you familiar with?</p>

        <h3>1 6m 4 5</h3>
        <ul>
          <li>"Stand By Me" - Ben E. King (A)</li>
          <li>"I Will Always Love You" - Whitney Houston (A) & Dolly Parton (Ab)</li>
          <li>"Hallelujah" - Leonard Cohen & Jeff Buckley (C) (verse: 1 6 1 6 4 5 1 5)</li>
          <li>"Last Kiss" - Pearl Jam (G)</li>
          <li>"Purple Rain" - Prince (Bb) (verse: 1 6 5 4)</li>
          <li>"Total Eclipse Of The Heart" - Bonnie Tyler (chorus) (Ab)</li>
          <li>"No Surprises" - Radiohead (F) (1 6 4 5 4)</li>
          <li>"Happiness Is A Warm Gun" - The Beatles (chorus) (C)</li>
          <li>"Unchained Melody" - Righteous Brothers (C)</li>
          <li>"Earth Angel" - The Penguins (chorus) (Ab)</li>
          <li>"In The Aeroplane Over The Sea" - Neutral Milk Hotel (G)</li>
        </ul>

        <h3>1 4 5</h3>
        <ul>
          <li>"Donna" - Ritchie Valens (F)</li>
          <li>"Mr. Big Stuff" - Jean Knight (Eb)</li>
          <li>"I Love Rock And Roll" - Joan Jett and the Black Hearts (chorus) (E)</li>
          <li>"Here Comes The Sun" - The Beatles (verse) (A)</li>
        </ul>

        <h3>1 5 6m 4</h3>
        <ul>
          <li>"Let It Be" - Paul McCartney (C) (1 5 6 4, 1 5 4 1)</li>
          <li>"I'm Yours" - Jason Mraz (B)</li>
          <li>"Hey Soul Sister" - Train (E)</li>
          <li>"Under The Bridge" - Red Hot Chili Peppers (E)</li>
          <li>"When I Come Around" - Green Day (F#)</li>
          <li>"Don't Stop Believin'" - Journey (E) (1 5 6 4, 1 5 3 4)</li>
          <li>"With Or Without You" - U2 (D)</li>
          <li>"No Woman No Cry" - Bob Marley (C#) (chorus: 1 5 6 4, 1 4 1 5)</li>
          <li>"Taylor" - Jack Johnson (C)</li>
          <li>"Take on Me" - A-Ha (C)</li>
          <li>"What's My Age Again?" - Blink-182 (chorus) (Gb/F#)</li>
          <li>"Someone Like You" - Adele (Chorus) (A)</li>
          <li>"Glycerine" - Bush (F) (Verse)</li>
          <li>"Man In The Mirror" - Michael Jackson (G) (verse: 1 5/7 6 4)</li>
        </ul>

        <h3>6m 4 1 5</h3>
        <ul>
          <li>"One Of Us" - Joan Osborne (verse/chorus) (A)</li>
          <li>"Complicated" - Avril Lavigne (chorus) (F)</li>
          <li>"Poker Face" - Lady Gaga (B)</li>
          <li>"Africa" - Toto (Chorus) (A)</li>
          <li>"Bullet With Butterfly Wings" - The Smashing Pumpkins (chorus) (Db)</li>
          <li>"Holiday" - Green Day (G)</li>
          <li>"It's My Life" - Bon Jovi (chorus) (Eb)</li>
        </ul>

        <h3>6m 5 4 5</h3>
        <ul>
          <li>"All Along The Watchtower" - Bob Dylan (E) Jimi Hendrix (Eb)</li>
          <li>"Rolling In The Deep" - Adele (chorus) (Eb)</li>
          <li>"My Heart Will Go On" - Celine Dion (E)</li>
          <li>"Sultans Of Swing" - Dire Straits (instrumental) (F)</li>
          <li>"Somebody That I Used to Know" - Gotye (chorus) (F)</li>
          <li>"Smooth Criminal" - Michael Jackson (chorus) (C)</li>
        </ul>

        <h3>1 4 1 5</h3>
        <ul>
          <li>"Brown-Eyed Girl" - Van Morrison (verse) (G)</li>
          <li>"The Lion Sleeps Tonight" - The Tokens/Lion King (F)</li>
          <li>"Why Don't You Get A Job" - The Offspring (F)</li>
          <li>"Another Saturday Night" - Sam Cooke (A)</li>
        </ul>

        <h3>1 4 5 4</h3>
        <ul>
          <li>"Wild Thing" - The Troggs (A)</li>
          <li>"Louie Louie" - The Kingsmen (Ab)</li>
          <li>"The Joker" - Steve Miller Band (F)</li>
          <li>"Walking On Sunshine" - Katrina And The Waves (Bb)</li>
          <li>"Hang On Sloopy" - The McCoys (G)</li>
          <li>"Summer Nights" - Grease (D)</li>
          <li>"La Bamba" - Ritchie Valens (C)</li>
          <li>"Dancing With Myself" - Generation X/Billy Idol (E)</li>
        </ul>
      </FunctionalHarmonyStyled>
    </CourseContainer>
  );
};

export default FunctionalHarmony;

const FunctionalHarmonyStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    margin-bottom: 1em;
  }
  li {
    margin-bottom: 0.25em;
  }
`;
