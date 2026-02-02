import { CourseContainer } from "../../../../components";
import { courses } from "../../../../data";
import styled from "styled-components";
import Image from "next/image";

const Listening = (): JSX.Element => {
  const courseTypeIndex = 0;
  const courseIndex = 0;
  const course = courses[courseTypeIndex].courses[courseIndex];
  const page = course.pages[6];

  return (
    <CourseContainer courseTypeIndex={courseTypeIndex} course={course} courseIndex={courseIndex} page={page}>
      <ListeningStyled>
        <p>The best thing you can do while learning (or reviewing) music is to listen. Good listening skills are vital in developing your musicianship. As technology advances, the already vast amount of music available at the click of a finger is expanding exponentially. Up to the invention of recording, the only way to hear music was to attend a performance or to play it for yourself on an instrument. Physical copies of music were limited to published sheet music. Since then, recorded music has become more and more ubiquitous with each new technology: records, tapes, CDs, mp3s, streaming services, and whatever the next format happens to be. This easy access to such a vast amount of material has both positive and negative consequences. It is increasingly effortless to find recordings from nearly any conceivable artist, era, style, or geographic location. Great, but listeners eventually face information overload.</p>
        <p>With so much music to choose from, where to begin? When teaching a new guitar student, one my first questions is always, "What is your favorite music?" This question is intentionally vague, allowing the student to respond with a musician, a band, or a style. A surprising pattern that I've noticed, especially in young beginners, is the alarming answer, "I don't know. I don't listen to music." Many youngsters are not exposed to music at home. This answer says a lot about the way our society as a whole listens to music. This is the age of shuffle listening. The era of DJs and devices.</p>
        <p>Music is a language. One of the best ways to quickly learn a language is through immersion learning. Think of music theory as the grammar of music and listening (and playing) as immersion. Imagine trying to learn Chinese strictly from a novel written in Chinese. It would be impossible to decipher pronunciation of the unfamiliar foreign characters. Learning from a book alone is not enough. On the other hand, if you moved to China, you would be forced to learn the basics of the language rather quickly in order to survive. You would hear others speak (listening), try to copy the sounds (playing), then later learn the correct grammar and sentence structure (theory). Notice: the first step in this process is listening.</p>
        <Image src={`${course.imgPath}/chinese-music.jpg`} width={100} height={100} alt="Chinese symbol for music" />
        <p><em>Chinese characters for "music"</em></p>

        <h2>Five ways to improve your listening habits</h2>

        <h3>1) Listen intentionally:</h3>
        <p>Most music we hear throughout the day is background music. Canned music is played in stores and restaurants. TV shows and movies use music behind dialogue and for transitions. We listen to music absent-mindedly while actively doing something else such as driving or cleaning. This consistent exposure to background music teaches passive listening. Your goal as a musician should be to listen actively and intentionally.</p>
        <p>Regularly block out a pre-scheduled time to sit down and do nothing but listen to music. Remove all distractions. Turn off your computer and TV and put your phone in another room. If listening to music on an internet-connected device, put it in do not disturb mode to avoid distracting notifications, text messages, emails, etc.</p>

        <h3>2) Listen in context:</h3>
        <p>A playlist might be great for background music at a party but listening to a full album is key to understanding a song's greater function and context. Most artists craft albums of songs that fit together in a specific order. A good album, like a good book, has an overlying arch and storyline. After listening to an album in its entirety, research the history of the recording. Use the wealth of information on the internet for some good! Who are the musicians in the band? Who wrote the songs? When was it recorded? Where was it recorded? Who is the producer? What other recordings have the artists/musicians/producers made? Where does this recording fit in the artist's catalog chronologically? Asking yourself these types of questions teaches you to more fully appreciate the context of your listening. What else could you ask?</p>

        <h3>3) Listen analytically:</h3>
        <p>It isn't necessary to be a music-theory wizard or have perfect pitch to listen to music analytically. Whatever your level, find aspects of a recording to latch on to. This could be the harmony, the song form, or even the instrumentation. Try listening to a song on repeat. Let the music play and listen passively the first time through. On the second listen, identify specific aspects you hear. On the third listen, identify aspects that you aren't sure about. This could be an unfamiliar chord progression or an irregular meter or phrase length. A beginner who doesn't know what these fancy musical terms mean might be unsure of which instrument is playing a certain part. Listen repeatedly and try to decipher what you can at your current level. While you grow as a musician and listener, revisiting music will reveal new aspects that you could not hear before.</p>

        <h3>4) Listen to a variety of styles:</h3>
        <p>Listen to music that you are not immediately drawn to. Listen to music that you don't like. If the music doesn't grow on you, try to find specific aspects of the music that you dislike. Aside from these unattractive elements, is there anything about the music that you find enjoyable? Perhaps a rap song has a fat bass line or a country player's rhythm and timing is spot on. The more music you are exposed to (whether you like it or not), the more you can draw from those elements by embracing what you like and avoiding what you don't.</p>

        <h3>5) Listen to both new music and the classics</h3>
        <p>Discovering music that you've never heard is an exhilarating process. Each introductory listening experience has the potential to blow your mind. When seeking out new music, don't forget about music that has stood the test of time. There is a reason why the classics are the classics. Whether the Beatles or Beethoven, Led Zeppelin or Liszt, Miles Davis or Metallica, listening to a classic for the first time has the same mind-blowing potential as new music. It is new to you, after all. Revisiting classics that you've heard many times will allow you to learn them more fully.</p>

        <h3>One more listening tip: try vinyl.</h3>
        <p>There is something special about listening on vinyl. Physically hand-selecting an album from the shelf, taking the record out of its sleeve, carefully placing it on the record player, lining up the needle, listening to a side at a time, and flipping the record to repeat the process for side two. At times it feels almost ceremonial. As an added benefit, the analog sound is pleasing to ears accustomed to digital formats. The process of building a record collection is also a very different experience than our current reality of immediate access to any music at any time. A small record collection is the antithesis to information overload. With fewer choices, you will have the opportunity to learn each album more fully.</p>
        <Image src={`${course.imgPath}/f-hole-cutout.jpg`} width={400} height={300} alt="Guitar f-hole" />
      </ListeningStyled>
    </CourseContainer>
  );
};

export default Listening;

const ListeningStyled = styled.div`
  h2, h3 {
    margin-top: 1.5em;
  }
  p {
    margin-bottom: 1em;
  }
`;
