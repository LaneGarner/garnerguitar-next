import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";

const EasySongs = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[15];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <EasySongsStyled>

        <p>Songs are an ideal way to learn new material. Not only will you grasp the information more quickly, but it will be fun at the same time! The repertoire list presented previously is a comprehensive resource to inspire you throughout your growth as a guitarist. Use the following song ideas to help you work on specific aspects of your playing as you learn. Remember, these lists are just a starting point.</p>

        <h2>Easy single string riffs</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHyjW_PUXxko8nvuK3WIjLeT2MuwTFKZT"
            title="Easy single string riffs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="tip"><em><strong>Tip:</strong> Click the playlist icon to access the full YouTube playlist.</em></p>
        <ul>
          <li>"Airbag" - Radiohead</li>
          <li>"Another One Bites The Dust" - Queen</li>
          <li>"Heard It Through The Grapevine" - CCR</li>
          <li>"Iron Man" - Iron Maiden</li>
          <li>"My My, Hey Hey" - Neil Young</li>
          <li>"Peter Gunn Theme" - Henry Mancini</li>
          <li>"Running Down A Dream" - Tom Petty</li>
          <li>"Satisfaction" - The Rolling Stones</li>
          <li>"Seven Nation Army" - The White Stripes</li>
          <li>"Smoke On The Water" - Deep Purple</li>
          <li>"Sunshine Of Your Love" - Cream</li>
        </ul>

        <h2>Easy riffs</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHyjW_PUXxkrfyLA6g0jKDyASTbYV6mNA"
            title="Easy riffs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <ul>
          <li>"Are You Gonna Go My Way" - Lenny Kravitz</li>
          <li>"Bad To The Bone" - George Thorogood</li>
          <li>"Beat It" - Michael Jackson</li>
          <li>"Blister in the Sun" - Violent Femmes</li>
          <li>"Born Under A Bad Sign" - Albert King</li>
          <li>"Bulls On Parade" - Rage Against The Machine</li>
          <li>"Come As You Are" - Nirvana</li>
          <li>"Day Tripper" - The Beatles</li>
          <li>"Do I Wanna Know?" - Arctic Monkeys</li>
          <li>"Enter Sandman" - Metallica</li>
          <li>"Fortunate Son" - Creedence Clearwater Revival</li>
          <li>"Heart Breaker" - Led Zeppelin</li>
          <li>"James Bond Theme" - John Berry</li>
          <li>"Oh, Pretty Woman" - Roy Orbison</li>
          <li>"One" - Metallica</li>
          <li>"Play That Funky Music" - Wild Cherry</li>
          <li>"Pumped Up Kicks" - Foster The People</li>
          <li>"Redemption Song" - Bob Marley</li>
          <li>"Walk This Way" - Aerosmith</li>
        </ul>

        <h2>Songs to learn with power chords</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHyjW_PUXxko0C7ZdmEo65oqmPWASK_nP"
            title="Power chords songs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <ul>
          <li>"All Day and All Night" - The Kinks</li>
          <li>"All the Small Things" - Blink 182</li>
          <li>"Back in Black" - AC/DC</li>
          <li>"Blitzkrieg Bop" - The Ramones</li>
          <li>"Brain Stew" - Green Day</li>
          <li>"Closing Time" - Semisonic</li>
          <li>"Eye Of The Tiger" - Survivor</li>
          <li>"Fortunate Son" - Creedence Clearwater Revival</li>
          <li>"I Love Rock and Roll" - Joan Jett & the Blackhearts</li>
          <li>"Iron Man" - Black Sabbath</li>
          <li>"Jessie's Girl" - Rick Springfield</li>
          <li>"Layla" - Eric Clapton</li>
          <li>"Lose Yourself" - Eminem</li>
          <li>"Rolling In The Deep" - Adele</li>
          <li>"Seven Nation Army" - The White Stripes</li>
          <li>"Smells Like Teen Spirit" - Nirvana</li>
          <li>"Smoke On The Water" - Deep Purple</li>
          <li>"Song 2" - Blur</li>
          <li>"When I Come Around" - Green Day</li>
          <li>"Whole Lotta Love" - Led Zeppelin</li>
          <li>"You Really Got Me" - The Kinks</li>
          <li>"Zombie" - Cranberries</li>
        </ul>

        <h2>Songs to learn with open chords</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLhj7_YSVBVT7Bov8m9gkmXrLCHwn3uvUX"
            title="Open chords songs playlist"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <ul>
          <li>"Big Yellow Taxi" - Joni Mitchell</li>
          <li>"Free Fallin'" - Tom Petty</li>
          <li>"Good Riddance (Time of your life)" - Green Day</li>
          <li>"Highway to Hell" - AC/DC</li>
          <li>"Hotel California" - The Eagles</li>
          <li>"House of the Rising Sun" - The Animals</li>
          <li>"Hurt" - Johnny Cash</li>
          <li>"My My, Hey Hey" - Neil Young</li>
          <li>"Redemption Song" - Bob Marley</li>
          <li>"Semi Charmed Life" - Third Eye Blind</li>
          <li>"Sweet Home Alabama" - Lynyrd Skynyrd</li>
          <li>"Wish You Were Here" - Pink Floyd</li>
          <li>"Wonderwall" - Oasis</li>
        </ul>
      </EasySongsStyled>
    </CourseContainer>
  );
};

export default EasySongs;

const EasySongsStyled = styled.div`
  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
  ul {
    margin: 1em 0;
  }
  li {
    margin-bottom: 0.5em;
  }
  .video-container {
    margin: 1em 0;
    iframe {
      max-width: 100%;
      border: none;
    }
  }
  .tip {
    font-size: 0.9em;
    color: #666;
  }
`;
