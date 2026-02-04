-- Migration SQL for Courses 2 & 3
-- Generated on 2026-02-03T19:04:18.450Z

-- Course 2: Technique, Reading & Theory

INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'introduction', 'Introduction', '![Jazzmaster headstock closeup](jm-closeup.jpg)

        
Guitar technique comes down to two primary factors: left-hand finger independence and coordinating the left and right hands. Finger independence allows you to execute chord transitions, melody lines, scales, solos, etc. One of my guitar teachers used to repeat the quote, "The left hand is the brain, the right hand is the muscle." Coordinating the hands allows you to play in time and is one of the biggest challenges for many beginning guitarists. Any technical aspect of guitar playing can be summed up by both, one, or part of these two factors.

        
When performing any physical activity, it is important to first warm up your muscles. Playing a musical instrument is no exception. The motions necessary to play guitar are tiny compared to many physical activities, but they are precise and repetitive, which can lead to injury if you''re not careful. To avoid injury while improving your dexterity on the instrument, warm up every day before playing. Even a quick warm-up limbers your fingers and mind and allows you to practice and/or play to your full potential. Warm-up is a great time to focus on technique. Technical exercises can be adapted to any playing level and might include finger exercises, chords, scales, arpeggios, picking exercises, ear-training, and more. As new topics are presented throughout this book, your warm-ups will evolve along with your playing. Think of warming up before practice as doing cardio before weightlifting to prepare for performance.', 0, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'finger-combination-exercise', 'Finger combination exercise', 'The matrix on this page contains all possible combinations of the numbers 1-4. It is a study in the one-finger-per-fret rule. Each number represents a left-hand finger. Start off with the first finger at the fifth fret. In the fifth position, the frets are not too far apart or too close together. Later, practice this exercise starting at the first fret then walk up to each fret/position and back down. These exercises prepare you for position playing.

        
This finger exercise should be practiced in many ways: all combinations on one string, one combination on all strings, as an arpeggio with each combination on a set of four strings, as an arpeggio with string skips, and so on. Practice using different subdivisions with a metronome and pay close attention to coordinating the left and right hands. If you want to get crazy, apply these combinations to the spider exercise. Within the spider, you will not always be able to leave each finger down. When you must lift a finger to play a lower-sounding note, lift as minimally as possible while remaining in the ready position.

        ![Finger combinations chart showing all permutations of 1-2-3-4](finger-combinations.jpg)', 1, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'string-crossing-exercise', 'String crossing exercise', 'These exercises focus on the right hand. It is not uncommon for a guitarist''s left hand to surpass the right hand''s ability to keep up. A focus on right-hand technique early on will help to counterbalance this tendency. Aspects of these picking exercises may later be applied to left-hand exercises like scales. This exercise helps with pick accuracy by focusing on awkward jumps to non-adjacent strings. It may be difficult to judge which string you are playing without looking at the right hand. This challenge often holds back students who feel as if they must constantly look at each hand before playing. While you progress you will learn to play even the most complicated passages without looking at either hand—this exercise will get you started. Don''t rush into this exercise, or any exercise for that matter. Begin slowly with downstrokes only and eventually progress to upstrokes only and alternate picking (down-up and up-down).

        ![String crossing exercise notation](string-crossing.jpg)', 2, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'pull-offs-and-hammer-ons', 'Pull-offs & hammer-ons', '## Pull-offs

        
A ***pull-off*** is used when moving from a higher note to a lower note. Hammer-ons and pull-offs allow you to play smoothly connected legato notes and are useful for fast passages. Use the left-hand finger to pluck the string. A pull-off is usually indicated by a tied note and a P (or sometimes PO).

        ![Pull-offs exercise one](pull-offs.jpg)

        
## Hammer-ons

        
A ***hammer-on*** is used when moving from a lower note to a higher note. It is called a hammer-on for a reason. Imagine hammering a nail into a wall. It is not enough to simply whack the hammer and hope for the best. With this method you would end up with many holes in the wall. Like a hammer, it is important to precisely aim the tip of the finger at the fret and drive it in (i.e. keep pressure down). A good hammer-on will also have a bit of a wind-up in the left-hand finger just like you might do with a hammer.

        ![Hammer-ons exercise](hammer-ons.jpg)

        
## Fretted pull-offs & hammer-ons

        
The previous examples utilized open string hammer-ons and pull-offs. These techniques are also possible between fretted notes. The following examples are similar to the finger combination warm-up with only two fingers.

        ![Pull-offs exercise two](pull-offs-2.jpg)
        ![Hammer-ons exercise two](hammer-ons-2.jpg)', 3, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'subdivision-studies', 'Subdivision studies', 'Subdivision practice is a useful way to work on technique, time, and reading. Apply these subdivisions to single notes, scales, chords, exercises, or really anything. Practice slowly and intentionally with a metronome. Try to "bury" the beat so that you almost don''t hear the click of the metronome. Use all possible picking patterns.

        ![Subdivision studies exercise](subdivision-studies.jpg)', 4, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'upstroke-exercise', 'Upstroke exercise', 'Upstrokes tend to be weaker than downstrokes for many players. Not only is the motion slightly awkward, but it requires a literal fight against gravity. Therefore, practicing with upstrokes only is a useful challenge. This example applies upstrokes to open strings in quarter notes, though the concept can (and should) be played in any rhythmic or melodic context.

        ![Upstroke exercise](upstroke-exercise.jpg)', 5, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'spider-exercises', 'Spider exercises', 'Spider exercises are named for the appearance of the fingers crawling across the fretboard. Most of these exercises sound a bit dissonant and spooky but are great tools for building technique. Many beginners have trouble keeping their left-hand fingers in a ready position. These exercises help get your fingers accustomed to the feel of a good hand position.

        
## Spider exercise one

        
One-finger-per-fret with the first finger at the fifth fret. Once you play a note, leave the finger down on the string until it is needed again—even when changing strings. Like always, start off slowly and intentionally.

        ![Spider exercise one](spider-1.jpg)

        
## Spider exercise two

        
One-finger-per-fret at the fifth fret. See and feel the fingers walking across the strings. Keep each finger down after a note is played.

        
### Descending

        ![Spider exercise two descending](spider-2-descending.jpg)

        
### Ascending

        ![Spider exercise two ascending](spider-2-ascending.jpg)', 6, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'rhythmic-hierarchy-exercise', 'Rhythmic hierarchy exercise', 'Play a measure of each subdivision from long to short and back down.

        ![The rhythmic hierarchy exercise](rhythmic-heirarchy.jpg)

        
## Triplets

        
Another common subdivision is the triplet. A triplet fits three beats in the space of two. It is indicated by the number 3 within a bracket over three notes. To feel a triplet, think of the next largest subdivision and break it into three beats. For instance, feel a quarter-note triplet by placing three beats in the space of a half note. Likewise, feel an eighth-note triplet by placing three beats in the space of a quarter note. While there are smaller/larger triplet subdivisions, these are the most common, so focus on them first.

        ![Triplets](triplets.jpg)

        
Practice triplets by themselves and within the rhythmic hierarchy exercise. Once you have mastered the following, try adding in half-note triplets (three beats in the space of a whole note) or sixteenth-note triplets (three beats in the space of an eighth note).

        ![The rhythmic hierarchy exercise with triplets](rhythmic-heirarchy-triplets.jpg)', 7, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'scales', 'Scales', 'Practice scales on their own or along with another technique. As you learn more theory, apply these same methods to new scales. Don''t worry about the theory for now; just focus on playing the scale. Try to recognize the notes by saying the note name out loud. Don''t just think it. Say it out loud! Scales are also a great way to practice technique in a slightly more musical context.

        
## C major scale - open position

        ![C major scale open position](c-major-open.jpg)

        
## Natural notes in the open position

        ![Natural notes in open position](natural-notes-open.jpg)

        
## Chromatic scale: open position

        
The chromatic scale contains all twelve notes of the octave. Start by playing it in the open position and eventually progress to other positions up the neck.

        ![Chromatic scale in open position](chromatic-scale-open.jpg)', 8, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'intro-to-standard-notation', 'Intro to standard notation', '![Strat and Jazzmaster close up](standard-notation-guitars.jpg)

        
## Rhythm review

        ![Rhythm review](rhythm-review.jpg)

        
## Standard notation

        
While chord diagrams and tablature may be the most common way to write music for guitar, it is also valuable to learn standard notation as well. A basic understanding of standard notation will help to broaden your understanding of music as a whole because it is the most common way to write music for any instrument. Many guitar players never learn standard notation, so learning even the basics will set you apart.

        ![Staff elements](staff-example.jpg)

        
### A. Staff

        
The staff is made up of five lines and four spaces. Notes and symbols are placed on the staff.

        
### B. Treble clef

        
The clef determines which lines and spaces correspond with each note. It is the left-most symbol on the staff. Guitar music typically uses the treble clef (also known as the G clef). The bottom curl of the treble clef spirals around the second line from the bottom- indicating the note G. Notated guitar music is technically transposed down one octave. Guitar music will typically be transposed for you, but you may need to play notes up one octave when reading music written for another instrument.

        
### C. Time signature

        
The time signature is a symbol placed on the staff to the right of the clef. It consists of two numbers stacked on top of one another. The top number indicates the number of beats per measure while the bottom number indicates what type of note gets one beat. The most common time signature, 4/4, is so common that it is sometimes referred to as "common time." Some other commonly used time signatures are 3/4, 2/4, and 6/8. See the below for some time signature examples.

        ![Time signature examples](time-signatures.jpg)

        
### D. Bar lines & bars/measures

        
Bar lines are used to divide the staff into sections called bars or measures. The length of each measure is determined by the time signature.

        
### Key signature

        ![Key signature examples](key-signature.jpg)
        
The key signature is placed between the clef and the time signature. It tells the key of a song by showing which notes are sharp or flat. More on keys in the theory section.

        
### Accidentals

        ![Accidental examples](accidentals.jpg)
        
An accidental alters a note so that it is outside of the key signature. Once an accidental is used, that note remains altered for the remainder of the measure. There are three types of accidentals: sharp, flat, and natural. A sharp looks like a number sign (or hashtag) and raises the note by a half-step. A flat looks like a lowercase b and lowers the note by a half-step. A natural symbol looks like a box with the left line extended up and right line extended down; it cancels out any sharps or flats from the key signature and/or accidentals used earlier in a measure.

        
### Metronome mark

        ![Metronome mark example](metronome-mark.jpg)
        
The metronome mark indicates the tempo. The number represents beats per minute (BPM). 60 BPM is equal to one second. Use a metronome to ensure that you are playing with good time. After all, time is the most important aspect of music.

        
### Dynamics

        
Dynamics indicate how loud or soft to play. Always make a mental note of dynamics in written music as they can make the music come to life.

        ![Dynamics examples](dynamics.jpg)

        
### Double and final bar lines

        ![Double and final bar line examples](double-final-barlines.jpg)

        
### Repeats

        
Repeat signs enclose a passage of music to be played more than once. A repeat sign is a double bar line with two dots on either side of the middle line of the staff. For our purposes, optional brackets at the top and bottom of the repeat sign (shown below) help make the repeats more visible. If there is no forward-facing repeat, then repeat back to the very beginning of the piece.

        ![Repeats example](repeats.jpg)

        
### Endings

        
Endings may be used within repeated sections. In the example above, play the first measure, the first ending, repeat back to the first measure, then play the second ending in place of the first ending.

        
### The musical roadmap

        
To avoid repeatedly writing and reading notated material, symbols are used to create a "musical roadmap." Repeats and endings are an element of the musical roadmap that you already know. Here are some additional symbols that you might see in sheet music:

        ![Musical roadmap items](roadmap-items.jpg)

        
### Following the musical roadmap

        
Now that you know the basic system of the musical roadmap, let''s apply it to a piece of music.

        <ol>
          <li className="red">Start at top left and play until the first repeat sign

          <li className="green">Repeat section. When you reach the first ending jump to the second ending. Continue playing until "DS Al Coda"

          <li className="blue">At "DS Al Coda" return to sign. Continue playing until "To Coda" Then jump to the coda and play to the end

        </ol>
        ![Following the musical roadmap](roadmap.jpg)', 9, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'notes-on-the-staff', 'Notes on the staff', 'Staff notation is read from left to right and top to bottom just like English. Each line or space represents a note in the musical alphabet A-G. Think of the musical alphabet as a circle that returns to A after G.

        
Pitch is indicated by placement of notes on the staff (sometimes modified with accidentals sharp or flat), and duration is shown with different note values and additional symbols such as dots and ties. Lower-sounding notes appear lower on the staff starting with E on the bottom line. Notice that the stem direction changes from up on the right side to down on the left side halfway through the staff. Work through the musical alphabet (E-F-G-A-B-C-D-E-F) in the order of LINE-SPACE.

        ![Notes on the staff](notes-on-staff.jpg)

        
## Line notes

        
Line notes begin at the bottom of the staff with the note E then skip up one letter for each line up the staff. A good mnemonic device to remember line notes is: Every Guitar Beginner Does Fine.

        ![Line notes](line-notes.jpg)

        
## Space notes

        
Begin on the bottom space with F and then skip one letter in the musical alphabet to the next space for A, C, and E. A good mnemonic device to remember these notes is the word face (F-A-C-E).

        ![Space notes](space-notes.jpg)

        
## Ledger lines

        
Ledger lines are short horizontal lines used to extend the range of the staff up or down. Simply continue up or down the musical alphabet to determine which pitch is being represented by a note on a ledger line. The typical range of natural notes on the guitar is shown below.

        ![Ledger line notes](ledger-lines.jpg)
        
Notice again that the stem direction changes from up on the right side to down on the left side halfway through the staff.

        
## Practice identifying notes

        
Identify the following notes:

        ![Practice identifying notes](practice-identifying-notes.jpg)
        ![Practice identifying notes 2](practice-identifying-notes-2.jpg)

        
## Practice writing notes

        
Try writing the following notes:

        ![Practice writing notes](practice-writing-notes-2.jpg)', 10, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'open-strings', 'Open strings', 'The first notes to learn on the staff are the open strings. Think of these open strings as "guide posts" that other notes will relate to.

        
## Exercises using open strings

        
Practice playing each open string while reading the corresponding note on the staff. This will help build the connection between what you see on the page and what you play on the guitar.', 11, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'first-string', 'First string', 'Play F on the first fret with the first finger and G on the third fret with the third finger.

        ![First string notes](first-string-notes.jpg)

        
## Simple melodies using first string

        
Use these simple melodies to practice reading standard notation on the first string in the open position.

        
*(*Note: the letters above the staff are chord changes that can be played along to these melodies).*

        ![First string exercise 1](first-string-exercise-1.jpg)
        ![First string exercise 2](first-string-exercise-2.jpg)
        ![First string exercise 3](first-string-exercise-3.jpg)
        ![First string exercise 4](first-string-exercise-4.jpg)', 12, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'second-string', 'Second string', 'Play C on the first fret with the first finger and D on the third fret with the third finger.

        ![Second string notes](second-string-notes.jpg)

        
## Second string melodies

        ![Second string exercise 1](second-string-exercise-1.jpg)
        ![Second string exercise 2](second-string-exercise-2.jpg)
        ![Second string exercise 3](second-string-exercise-3.jpg)

        
## First and second string melodies

        ![First and second string melodies exercise 1](first-and-second-string-exercise-1.jpg)

        
### Mary Had a Little Lamb

        ![Mary Had a Little Lamb](first-and-second-string-exercise-2.jpg)

        
### Jingle Bells

        ![Jingle Bells](first-and-second-string-exercise-3.jpg)', 13, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'third-string', 'Third string', 'Play A on the second fret with the second finger.

        ![Notes on the third string](third-string-notes.jpg)

        ![Third string exercise 1](third-string-exercise-1.jpg)
        ![Third string exercise 2](third-string-exercise-2.jpg)
        ![Third string exercise 3](third-string-exercise-3.jpg)

        
## Mary Had a Little Lamb

        ![Mary Had a Little Lamb](third-string-exercise-4.jpg)

        
## Old MacDonald

        ![Old MacDonald](third-string-exercise-5.jpg)

        
## Twinkle, Twinkle Little Star / Baa Baa Black Sheep / ABCs

        ![Twinkle Twinkle Little Star](third-string-exercise-6.jpg)', 14, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'fourth-string', 'Fourth string', 'Play E on the second fret with the second finger and F on the third fret with the third finger.

        ![Fourth string notes](fourth-string-notes.jpg)

        ![Fourth string exercise 1](fourth-string-exercise-1.jpg)
        ![Fourth string exercise 2](fourth-string-exercise-2.jpg)
        ![Fourth string exercise 3](fourth-string-exercise-3.jpg)

        
## Frere Jacques

        ![Frere Jacques notation](fourth-string-exercise-4.jpg)

        
## Flats and repeats

        ![Flats and repeats](flats-and-repeats.jpg)
        
The next example uses two new devices: the flat accidental and the repeat sign. The flat sign resembles a lowercase b and is placed before a note on the staff. To flat a note, drop the note by one half-step (one fret). In this case we will play B-flat at the third-string third-fret (one fret lower than the B tuning note at the fourth-string fourth-fret).

        
A repeat sign is a double bar line with two dots on either the left or the right. If the dots are on the right, it is a forward-facing repeat, and if they are on the left, it is a backward-facing repeat. Repeat signs sometimes have brackets which, for our purposes, make it more clear which section is to be repeated. To play a repeat, simply repeat the music between the two repeat signs.

        
## Deck the Halls

        ![Deck the Halls notation](fourth-string-exercise-5.jpg)

        
## Sharps & pickup measures

        
A sharp looks like a number sign or hashtag. Think of a sharp as the opposite of a flat. To play a sharp, raise the note one half-step (one fret). In this example, play F# at the fourth-string fourth-fret (one fret higher than F). A pickup measure is an incomplete measure that comes at the beginning of a song. It may be helpful to count backwards to find which beat to start on. "The Dreidel Song" begins on the and-of-four and "O Christmas Tree" begins on beat three.

        
## The Dreidel Song

        ![The Dreidel Song notation](dreidel.jpg)

        
## O Christmas Tree

        ![O Christmas Tree notation](christmas-tree.jpg)

        
## Take Me Out to the Ballgame

        ![Take Me Out to the Ballgame notation](ballgame.jpg)', 15, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'fifth-string', 'Fifth string', 'Play B on the second fret with the second finger and C on the third fret with the third finger.

        ![Fifth string notes](fifth-string-notes.jpg)
        ![Fifth string exercise 1](fifth-string-exercise-1.jpg)
        ![Fifth string exercise 2](fifth-string-exercise-2.jpg)
        ![Fifth string exercise 3](fifth-string-exercise-3.jpg)

        
## Alouette

        ![Alouette notation](alouette.jpg)

        
## America the Beautiful

        ![America the Beautiful notation](america-beautiful.jpg)

        
## The Star Spangled Banner

        ![Star Spangled Banner notation](star-spang.jpg)

        
## O Canada

        ![O Canada notation](o-canada.jpg)', 16, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'sixth-string', 'Sixth string', 'Play F on the first fret with the first finger and G on the third fret with the third finger.

        ![Sixth string notes](sixth-string.jpg)
        ![Sixth string exercise 1](sixth-string-exercise-1.jpg)
        ![Sixth string exercise 2](sixth-string-2.jpg)
        ![Sixth string exercise 3](sixth-string-exercise-3.jpg)

        
## Row Row Row Your Boat

        ![Row Row Row Your Boat notation](row-boat.jpg)

        
## Yankee Doodle

        ![Yankee Doodle notation](yankee-doodle.jpg)

        
## Hush Little Baby

        ![Hush Little Baby notation](hush-baby.jpg)', 17, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'tab-and-standard-notation', 'Tab and standard notation', '![Close up of jazz guitarist](jazz-man.jpg)

        
Occasionally it may be helpful to notate music in tab and standard notation at the same time. This is especially useful to show where to play a note that can be played in many places on the neck. The next few examples use two staves (tab and standard notation) which consist of the exact same written music. Pay attention to the bracket on the left to know which system to move your eyes to next.

        
## Rock and Roll Arpeggios

        ![Rock and roll arpeggios notation](rock-arpeggios.jpg)

        
## Pentatonic Blues

        ![Pentatonic blues notation](pentatonic-blues.jpg)

        
## Power Chords

        ![Power chords notation](power-chords.jpg)', 18, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'music-theory', 'Music theory', '![Music theory cover photo](music-theory-image.jpg)

        
If music is a language, then music theory is grammar and sentence structure. Theory aims to explain how and why music works as it does. Understanding theory will make you a better musician. That said, don''t forget to put emotion and feeling into your music. Many beginning guitarists gloss over or have a limited understanding of music theory which can hold them back as players. Learning a language strictly through immersion leaves you illiterate. Learning to read a new language is a start, but studying the inner workings of sentence structure is the only way to write a story or a poem. Music theory teaches you to analyze the music of other musicians so that you can then intelligently create music of your own. Simply understanding the intervals used to build a particular chord will allow you to manipulate that chord into many other chords. In this section, you will learn how to construct scales, key signatures, intervals, and chords.

        
Ear training is another sometimes overlooked skill. It is also important to train your ears to hear the theory you learn. Good ears can make the difference between a good musician and a great musician. The ability to hear the inner workings of a song and understand how it functions will teach you more than any course ever could. Like most topics in this course, this is a starting point. We will focus on hearing ascending and descending intervals within one octave.

        
The end of this section uses what you learned about functional harmony to analyze more than fifty songs using only four chords. Familiarity with these common chord progressions will prepare you to study harmonic ear training.', 19, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'guitar-geography', 'Guitar geography', 'Learning the note names all over the guitar neck is extremely important but often overlooked. This vital step will guide you toward gaining a full understanding of the instrument. An interval is the distance from one note to the next. The first two intervals to learn are the half-step and the whole-step.

        
**Half-step:** one fret<br />Open string to first fret<br />First fret to second fret etc.

        
**Whole-step:** two frets<br />First fret to third fret<br />Third fret to fifth fret<br />etc.

        
The interval between most notes in the musical alphabet is a whole-step. For instance, A to B and C to D are both whole-steps. The two special cases of half-steps are between the notes E to F and B to C.

        ![The musical alphabet with half steps and whole steps](musical-alphabet-with-text.jpg)

        
***A useful trick to remember the half-steps is to use the names of the first and second open strings: E and B. Half-steps occur from these two notes.*

        
The notes you have learned so far are called ***natural notes***. Use the open string names you already know (E-A-D-G-B-E) to learn the natural notes up and down each string. Begin with the open-string letter and continue around the musical-alphabet circle.

        
Be sure to remember the half-steps (one fret) from E to F and B to C.

        
The interval between all other notes is a whole-step (two frets).

        
Use the fret markers to help orient which fret you are on.

        
The twelfth fret of each string is the same note name as that open string.

        
Going around the circle and through the entire musical alphabet will bring you back to the original note. This interval is called an octave.

        ![Natural notes on guitar neck](neck-natural-notes.jpg)

        
The notes you have learned so far are called **"natural notes"**

        
### There are two ways to alter a natural note:

        

          - **Sharp:** Raise the note 1/2 step

          - **Flat:** Lower the note 1/2 step

        

        
### Practice tips

        

          - Practice "playing and saying" the natural notes up and down each string.

          - Once you feel comfortable with natural notes, add sharps and flats.

          - As a test, put your finger down randomly on the fretboard and ask yourself which note you are playing.

        

        ![All notes on guitar neck](neck-all-notes.jpg)', 20, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'the-chromatic-scale', 'The chromatic scale', 'While the musical alphabet contains seven letters, the musical language contains twelve notes. We find these twelve notes from the seven letters of the musical alphabet and their respective sharps and flats. An *enharmonic* is when a note can be called more than one name, such as F-sharp and G-flat. The chromatic scale contains all twelve notes of the musical language and can start from any note. Try playing it from each open string.

        
## Sixth string

        ![Chromatic scale on sixth string notation](chromatic-scale-6.jpg)

        
## Fifth string

        ![Chromatic scale on fifth string notation](chromatic-scale-5.jpg)

        
## Fourth string

        ![Chromatic scale on fourth string notation](chromatic-scale-4.jpg)

        
## Third string

        ![Chromatic scale on third string notation](chromatic-scale-3.jpg)

        
## Second string

        ![Chromatic scale on second string notation](chromatic-scale-2.jpg)

        
## First string

        ![Chromatic scale on first string notation](chromatic-scale-1.jpg)

        
## Open position

        
The chromatic scale can also be played in each position. Here it is in the open position:

        ![Chromatic scale in open position](chromatic-scale-open-position.jpg)', 21, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'building-major-scales', 'Building major scales', 'You might recognize the major scale from the song "Do-Re-Mi" from The Sound of Music. Most Western music is based on the major scale. We will first learn all twelve major scales on single strings starting with the E major scale. Play on the first or sixth string at these frets:

        ![Major scale ascending frets](major-ascending.jpg)

        
Going up in pitch is called ***ascending***. Also play the scale ***descending***, or going down.

        ![Major scale descending frets](major-descending.jpg)

        
An ***interval*** is the distance between two notes. The first two intervals to learn are the ***half-step*** and the ***whole-step***. On the guitar, a half step is one fret and a whole step is two frets. Analyzing the notes of the E major scale will reveal a pattern of half-steps and whole-steps.

        ![Major scale intervals](major-intervals.jpg)

        
All major scales always contain all seven letters of the musical alphabet (A-G). These letters go in order and start on the same letter name as the major scale name. For example, the C major scale starts with the note C.

        
What notes are in the C major scale you just played?

        

          - 1st fret - C

          - 3rd fret - D

          - 5th fret - E

          - 6th fret - F

          - 8th fret - G

          - 10th fret - A

          - 12th fret - B

          - 13th fret - C

        

        
A ***key signature*** indicates which notes are sharp or flat in a particular key. The key of C major has only natural notes—no sharps or flats.

        
Start from any note and use W-W-H-W-W-W-H and all seven letters of the musical alphabet to find each key signature.

        
## Single string major scales

        ![C major scale](c-major.jpg)

        
## Sharp keys

        ![Sharp keys](sharp-keys.jpg)

        
## Flat keys

        ![Flat keys](flat-keys.jpg)', 22, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'circle-of-4ths-and-5ths', 'Circle of 4ths & 5ths', 'Now that you have played single-string major scales for each key, it is time to memorize each key signature. The circle of fourths/fifths contains all twelve chromatic notes. Following the circle counter-clockwise will give the interval of a perfect fourth between notes, while clockwise will give a perfect fifth.

        
## Sharp Keys

        
Follow the circle clockwise in fifths. You will first come to the key of G. The key of G has one sharp and it is the note F#. F# is the seventh scale degree in the key of G. Each note along the circle of fifths adds one sharp each time. This added sharp is always the seventh scale degree of each new key (RED).

        
For example, in the key of D, keep the F# and add C# (the seventh scale degree in D). Next comes the key of A. Keep the F# and C# and add G# (the seventh scale degree in A). Continue in the same way all around the circle of fifths.

        
## Flat Keys

        
Follow the circle counterclockwise in fourths. This side works similarly to the sharp side, but rather than raising the seventh scale degree, we will lower the fourth scale degree (GREEN). Tip: the fourth scale degree also happens to be the next key in the circle of fourths.

        
For example: the key of F has one flat, B-flat, which is the fourth scale degree in F (or the next key on the circle). For the key of B-flat, keep B-flat, and add the fourth degree (or next key) of E-flat. Continue similarly around the circle of fourths.

        ![Circle of fourths and fifths](circle-of-fourths-fifths.jpg)

        
**G-flat and F-sharp are enharmonically the same.*

        
*Note: Since the key of C has no sharps and no flats, the keys of C sharp and C flat have seven sharps and seven flats respectively.*

        
## Key signatures on the staff

        
The key signature is placed between the clef and time signature at the beginning of a piece of music. Sharps or flats are placed on the lines and spaces of the staff to tell you which notes are raised or lowered in a given key. When a key signature indicates raising or lowering a pitch, that pitch remains altered throughout the entire piece.

        ![Key signatures](key-sigs.jpg)', 23, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'intervals', 'Intervals', 'An interval is the distance between two notes. In this course you will learn perfect, major, and minor intervals up to an octave. Intervals are named by the number of steps between letters in the musical alphabet and qualified by the number of half steps between two notes. You already know two intervals: the half step and the whole step. When counting half steps, do not count the first note.

        ![Intervals](intervals.jpg)

        
**The tritone is both an augmented fourth and a diminished fifth. In this context, **augmented** means "raised" and **diminished** means "lowered."*

        
## Interval inversions

        
To invert an interval, move the lower note up one octave. When inverting intervals, perfect intervals remain perfect, major intervals become minor, minor intervals become major, augmented intervals become diminished, and diminished intervals become augmented.

        ![Interval inversions](interval-inversions.jpg)

        
## The rule of nine

        
Notice that the original interval and inverted interval add up to nine. Why is this? There are eight notes in an octave. There is an octave between the bottom note of the original interval and the top note of the inverted interval; the note in the middle is counted twice as shown below.

        ![Rule of nine](rule-of-nine-1.jpg)
        ![Rule of nine 2](rule-of-nine-2.jpg)
        ![Jazzmaster closeup](jm-closeup.jpg)', 24, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'intro-to-ear-training', 'Intro to ear training', 'Ear training is one of the best ways to develop your musicianship. Simply listening to music is an excellent way to train your ears. Another way to begin training your ears is to practice interval recognition. Like with any skill, start slowly and patiently progress to more advanced ear training skills such as harmonic intervals, chords, chord progressions, and note recognition.

        
A common way to recognize intervals is to compare them to the first few notes of a familiar song. Aim to eventually recognize intervals without these songs. This is a starting point. Choose a song that you know for each interval in the list.

        
When learning to hear both ascending and descending intervals, start slow. Choose a few common intervals (M2, M3, P4, P5, Octave) to start, then add new intervals one at a time. Progress may come slowly at first, but stick with it and practice ear training daily. You will be surprised how quickly your ears grow. Listen for intervals in daily life: songs you hear, door bells, ring tones, etc.

        
## Ascending intervals

        

          - **Minor Second:** (C-Db) Ascending Chromatic Scale, Jaws, White Christmas

          - **Major Second:** (C-D) Ascending Major Scale, Happy Birthday, Silent Night, Frere Jacques

          - **Minor Third:** (C-Eb) Smoke on the Water, O Canada, Seven Nation Army, Minor Pentatonic Scale

          - **Major Third:** (C-E) When The Saints Go Marching In, Kumbaya

          - **Perfect Fourth:** (C-F) Here Comes the Bride, Auld Lang Syne, O Christmas Tree, Amazing Grace

          - **Tritone:** (C-F#/Gb) The Simpsons theme, Maria

          - **Perfect Fifth:** (C-G) Twinkle Twinkle Little Star, Star Wars (Main Theme), Baa Baa Blacksheep

          - **Minor Sixth:** (C-Ab) The Entertainer, In My Life, She''s A Woman, We Are Young

          - **Major Sixth:** (C-A) My Bonnie Lies Over the Ocean, NBC, For He''s a Jolly Good Fellow

          - **Minor Seventh:** (C-Bb) Theme from Star Trek

          - **Major Seventh:** (C-B) Somewhere Over the Rainbow (Notes 1-3), Take on Me, Don''t Know Why

          - **Octave:** (C-C) Somewhere Over the Rainbow, Singin'' in the Rain, Let it Snow, Blue Bossa

        

        
## Descending intervals

        

          - **Minor Second:** (Db-C) Descending Major Scale, Für Elise, Joy to the World, Fly Me to the Moon

          - **Major Second:** (D-C) Mary Had a Little Lamb, Yesterday, Three Blind Mice, Deck the Halls

          - **Minor Third:** (Eb-C) Hey Jude, Frosty the Snowman, The Star-Spangled Banner, This Old Man

          - **Major Third:** (E-C) Swing Low Sweet Chariot, Beethoven''s Fifth, Summertime, Giant Steps, Misty

          - **Perfect Fourth:** (F-C) I''ve Been Working on the Railroad, O Come All Ye Faithful, All of Me

          - **Tritone:** (C-F#/Gb) Enter Sandman

          - **Perfect Fifth:** (G-C) (Meet) The Flintstones, Minuet in G, Have You Met Miss Jones

          - **Minor Sixth:** (Eb-C) The Entertainer (notes 2-3)

          - **Major Sixth:** (A-C) Crazy, Sweet Caroline, Body and Soul, Take the A Train

          - **Minor Seventh:** (Bb-C) Watermelon Man, Hee Haw from the Grand Canyon Suite

          - **Major Seventh:** (B-C) I Love You, Nobody Knows the Trouble I''ve Seen, Take on Me

          - **Octave:** (C-C) There''s No Business like Show Business (notes 2-3), Bulls on Parade', 25, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'building-triads', 'Building triads', '## Building triads with intervals

        
The triad is the most common type of chord. A triad is a three-note chord built in thirds. There are four types of triads: major, minor, augmented, and diminished. Each has a particular pattern of major and minor thirds.

        
**Major triad:** major 3rd, minor 3rd

        
**Minor triad:** minor 3rd, major 3rd

        
**Augmented triad:** major 3rd, major 3rd

        
**Diminished triad:** minor 3rd, minor 3rd

        ![Major triad](major-triad.jpg)
        ![Minor triad](minor-triad.jpg)
        ![Augmented triad](augmented-triad.jpg)
        ![Diminished triad](diminished-triad.jpg)

        
## Building triads with scale degrees

        ![Building triads with scale degrees](triad-scale-degrees.jpg)
        
On the previous page we built triads by stacking thirds. Another way to build triads is by scale degree. This method is based on the degrees of the major scale. These are also referred to as "chord tones."

        
## Chord notation

        
There are several ways to refer to each chord type. Here are some common methods:

        ![Chord notation](chord-notation.jpg)', 26, true
FROM courses WHERE slug = 'technique-reading-theory';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'functional-harmony-and-progressions', 'Functional harmony & progressions', '## Functional harmony

        
Functional harmony describes the relationship of each chord to the key center. Stacking thirds from each degree of the major scale creates seven chords within a given key. The key will determine whether each interval is a major or minor third. Analyzing these patterns will tell you whether you have a major, minor, or diminished chord. Let''s look at the key of C major:

        ![Functional harmony](functional-harmony.jpg)

        
## Roman numerals & Nashville numbers

        
There are two common ways to notate chord function. The traditional (i.e. classical) method is to use Roman numerals: uppercase for major and lowercase for minor. Another common method is the Nashville Number System. This system uses Arabic numerals and chord symbols in place of Roman numerals but essentially works in the same way. These systems make it easier to learn songs or teach a chord progression to a fellow musician.

        ![Roman numerals and Nashville numbers](roman-numberals-nashville.jpg)
        ![Chord function](chord-function.jpg)

        
## Common chord progressions

        
Most popular music uses the same chord progressions, or patterns, over and over in different keys. Practicing 1, 4, 5, and 6m chords in common guitar keys will help you advance as a guitarist and learn new songs quickly. Use the chart on the previous page for help finding these chords in some common guitar keys.

        
### Common guitar keys: CAGED

        
After learning chord progressions in these common keys, we can transpose them to less common keys with barre chords or even with a capo.

        
These popular songs use 1, 4, 5, and 6m chords in different orders and combinations. This list is a starting point as these progressions are used in many styles of music. How many of these songs are you familiar with?

        
### 1 6m 4 5

        

          - "Stand By Me" - Ben E. King (A)

          - "I Will Always Love You" - Whitney Houston (A) & Dolly Parton (Ab)

          - "Hallelujah" - Leonard Cohen & Jeff Buckley (C) (verse: 1 6 1 6 4 5 1 5)

          - "Last Kiss" - Pearl Jam (G)

          - "Purple Rain" - Prince (Bb) (verse: 1 6 5 4)

          - "Total Eclipse Of The Heart" - Bonnie Tyler (chorus) (Ab)

          - "No Surprises" - Radiohead (F) (1 6 4 5 4)

          - "Happiness Is A Warm Gun" - The Beatles (chorus) (C)

          - "Unchained Melody" - Righteous Brothers (C)

          - "Earth Angel" - The Penguins (chorus) (Ab)

          - "In The Aeroplane Over The Sea" - Neutral Milk Hotel (G)

        

        
### 1 4 5

        

          - "Donna" - Ritchie Valens (F)

          - "Mr. Big Stuff" - Jean Knight (Eb)

          - "I Love Rock And Roll" - Joan Jett and the Black Hearts (chorus) (E)

          - "Here Comes The Sun" - The Beatles (verse) (A)

        

        
### 1 5 6m 4

        

          - "Let It Be" - Paul McCartney (C) (1 5 6 4, 1 5 4 1)

          - "I''m Yours" - Jason Mraz (B)

          - "Hey Soul Sister" - Train (E)

          - "Under The Bridge" - Red Hot Chili Peppers (E)

          - "When I Come Around" - Green Day (F#)

          - "Don''t Stop Believin''" - Journey (E) (1 5 6 4, 1 5 3 4)

          - "With Or Without You" - U2 (D)

          - "No Woman No Cry" - Bob Marley (C#) (chorus: 1 5 6 4, 1 4 1 5)

          - "Taylor" - Jack Johnson (C)

          - "Take on Me" - A-Ha (C)

          - "What''s My Age Again?" - Blink-182 (chorus) (Gb/F#)

          - "Someone Like You" - Adele (Chorus) (A)

          - "Glycerine" - Bush (F) (Verse)

          - "Man In The Mirror" - Michael Jackson (G) (verse: 1 5/7 6 4)

        

        
### 6m 4 1 5

        

          - "One Of Us" - Joan Osborne (verse/chorus) (A)

          - "Complicated" - Avril Lavigne (chorus) (F)

          - "Poker Face" - Lady Gaga (B)

          - "Africa" - Toto (Chorus) (A)

          - "Bullet With Butterfly Wings" - The Smashing Pumpkins (chorus) (Db)

          - "Holiday" - Green Day (G)

          - "It''s My Life" - Bon Jovi (chorus) (Eb)

        

        
### 6m 5 4 5

        

          - "All Along The Watchtower" - Bob Dylan (E) Jimi Hendrix (Eb)

          - "Rolling In The Deep" - Adele (chorus) (Eb)

          - "My Heart Will Go On" - Celine Dion (E)

          - "Sultans Of Swing" - Dire Straits (instrumental) (F)

          - "Somebody That I Used to Know" - Gotye (chorus) (F)

          - "Smooth Criminal" - Michael Jackson (chorus) (C)

        

        
### 1 4 1 5

        

          - "Brown-Eyed Girl" - Van Morrison (verse) (G)

          - "The Lion Sleeps Tonight" - The Tokens/Lion King (F)

          - "Why Don''t You Get A Job" - The Offspring (F)

          - "Another Saturday Night" - Sam Cooke (A)

        

        
### 1 4 5 4

        

          - "Wild Thing" - The Troggs (A)

          - "Louie Louie" - The Kingsmen (Ab)

          - "The Joker" - Steve Miller Band (F)

          - "Walking On Sunshine" - Katrina And The Waves (Bb)

          - "Hang On Sloopy" - The McCoys (G)

          - "Summer Nights" - Grease (D)

          - "La Bamba" - Ritchie Valens (C)

          - "Dancing With Myself" - Generation X/Billy Idol (E)', 27, true
FROM courses WHERE slug = 'technique-reading-theory';


-- Course 3: Blues, CAGED & Pentatonics

INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'introduction', 'Introduction', 'All American popular music is deeply rooted in the blues. From jazz to rock to country to rap, the blues is an essential influence on most styles of music. Because guitar has been so widely used in blues, no guitar method would be complete without diving into the blues. This style of music, like any other style, could be studied in-depth for many years. What is presented here is an introduction to some basic aspects of the blues.

        
## Recommended listening

        
Listening is the most important aspect of learning a new style of music. Use this list of suggested blues and blues-influenced guitarists as a starting point. Find some artists that you like and listen to them non-stop. Figure out who their influences were and listen to them nonstop. Find musicians influenced by them and listen to them nonstop. Plummet down the rabbit hole.

        

          - Albert Collins

          - Albert King

          - BB King

          - Blake Mills

          - Buddy Guy

          - Derek Trucks

          - Doyle Bramhall Jr

          - Earl Hooker

          - Elizabeth "Libba" Cotton

          - Eric Clapton

          - Eric Gales

          - Etta Baker

          - Freddie King

          - Grant Green

          - Howlin'' Wolf

          - Joanna Connor

          - John Lee Hooker

          - Joe Bonnamassa

          - Jimi Hendrix

          - Jimmy Herring

          - Jimmy Page

          - Lonnie Johnson

          - Luther Allison

          - Matt Schofield

          - Mississippi Fred McDowell

          - Muddy Waters

          - Robert Johnson

          - Robben Ford

          - Rory Block

          - Shannon Curfman

          - Stevie Ray Vaughan

          - Taj Mahal

          - T-Bone Walker

          - Warren Haynes

        

        
## Blues shuffle patterns in A

        
We covered the basic blues shuffle patterns and it may be helpful to review them now.

        ![Blues shuffle patterns in A](blues-shuffle-a.jpg)

        
## Blues shuffle patterns in E

        
Keep the 6th string open while moving notes on the 5th string.

        ![Blues shuffle patterns in E](blues-shuffle-e.jpg)

        
## Blues shuffle patterns in D

        
Keep the 4th string open while moving notes on the 3rd string.

        ![Blues shuffle patterns in D](blues-shuffle-d.jpg)

        
## Blues shuffle patterns in B

        
The key of B is more difficult to play than the other keys because the root is not based on an open string. Option one requires large stretches while option two requires muting the fourth string. Transpose by treating any other fret as the root.

        ![Blues shuffle patterns in B option 1](blues-shuffle-b-1.jpg)
        ![Blues shuffle patterns in B option 2](blues-shuffle-b-2.jpg)', 0, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, '12-bar-blues', '12 bar blues', 'The 12 bar blues is one of the most common song forms in music. Famous songs that use this form include "Johnny B. Goode" by Chuck Berry, "Folsom Prison Blues" by Johnny Cash, "Hound Dog" by Elvis Presley, "Rock and Roll" by Led Zeppelin, "Pride and Joy" by Stevie Ray Vaughan, "Wipe Out" by The Safaris, the Batman Theme, and many more.

        
We will learn the most basic versions of the 12 bar blues, which can later be altered in many ways. The basic 12 bar blues uses only three chords: the I, IV, and V chords of a key. Let''s begin with the key of A. You already learned how to find these chords in Part Two, but to review:

        
Begin with the A major scale. Assign a Roman numeral to each scale degree. Remember the I, IV, and V are major, ii, iii and vi are minor, and vii is diminished.

        ![A major functional harmony](a-functional-harmony.jpg)

        
This means that in the key of A: I is A, IV is D, and V is E. These are the three chords we need to play an A blues.

        
Let''s also look at the key of E. Begin with the E major scale. Assign a Roman numeral to each scale degree remembering that I, IV, and V are major, ii, iii and vi are minor and vii is diminished.

        ![E major functional harmony](e-functional-harmony.jpg)

        
This means that in the key of E, E is I, A is IV, and B is V. These are the three chords we need to play an E blues. Notice that the I, IV, and V chords in the keys of A and E are the walking patterns we have already learned. Now let''s apply them to the 12-bar blues form.

        
## The 12 bar blues form

        
Think of the 12-bar blues form as three four-bar phrases in which the harmonic rhythm is cut in half for each phrase. The first four-bar phrase has a harmonic rhythm of four bars per chord. The second four-bar phrase has a **harmonic rhythm** of two bars per chord. The third and final four-bar phrase has a harmonic rhythm of one bar per chord.

        ![12 bar blues form](12-bar-blues-form.jpg)', 1, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'blues-shuffle-etudes', 'Blues shuffle etudes', '## Blues shuffle etude one

        
Shuffle pattern one in the key of A. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 1](blues-shuffle-etude-1.jpg)

        
## Blues shuffle etude two

        
Shuffle pattern two in the key of A. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 2](blues-shuffle-etude-2.jpg)

        
## Blues shuffle etude three

        
Shuffle pattern three in the key of A. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 3](blues-shuffle-etude-3.jpg)

        
## Blues shuffle etude four

        
Shuffle pattern one in the key of E. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 4](blues-shuffle-etude-4.jpg)

        
## Blues shuffle etude five

        
Shuffle pattern two in the key of E. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 5](blues-shuffle-etude-5.jpg)

        
## Blues shuffle etude six

        
Shuffle pattern three in the key of E. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 6](blues-shuffle-etude-6.jpg)

        
## Blues shuffle etude seven

        
All three patterns combined in the key of A. Practice slowly with smooth transitions between chords.

        ![Blues shuffle etude 7](blues-shuffle-etude-7.jpg)

        
## Blues shuffle etude eight

        
Etude seven in the key of E. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 8](blues-shuffle-etude-8.jpg)

        
## Blues shuffle etude nine

        
All three patterns combined in the key of A. Practice slowly with smooth transitions between chords.

        ![Blues shuffle etude 9](blues-shuffle-etude-9.jpg)

        
## Blues shuffle etude ten

        
Etude nine in the key of E. Practice slowly and aim for smooth transitions between chords.

        ![Blues shuffle etude 10](blues-shuffle-etude-10.jpg)', 2, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'dominant-seventh-chords', 'Dominant seventh chords', 'Now that you''ve learned to play a 12 bar blues with shuffle patterns, let''s try it with seventh chords. To build a seventh chord start with a major triad (if you need a refresher on building triads revisit part two).

        
## First, let''s look at the key of A:

        ![A major scale degrees](a-maj-scale-degrees.jpg)

        
A major triad contains the root, third, and fifth scale degree; a dominant seventh chord adds the flat seven scale degree. To find the flatted seven, lower the seventh scale degree by a half step. In the key of A, the seventh scale degree is G#, so the flat seven is G. The notes in an A7 chord are as follows:

        ![A7 chord spelling](a-7-chord-spelling.jpg)

        
Now let''s play an A7 chord on the guitar. Begin with the familiar open A chord and add the flat seven (G). Which notes of the A chord could easily be traded for a G? This note is located in two convenient places: the open third string or the first string third fret.

        ![A7 chord diagrams](a7-chord-diagrams.jpg)

        
### Apply these 7th chord voicings to the 12 bar blues in A and E:

        ![Seventh chord voicings for blues](blues-seventh-chord-voicings.jpg)', 3, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'minor-blues-scales', 'Minor blues scales', 'The minor blues scale is nearly identical to the minor pentatonic scale with one additional note called the blue note. Add this note to the same pentatonic "box" you have already learned in two places: the second finger on the fifth-string sixth-fret and the third finger (one fret out of position) on the third-string eighth-fret. Practice ascending and descending, then try mixing up the notes to solo on an A blues.

        
## A minor blues scale

        ![A minor blues scale](a-minor-blues.jpg)
        ![A minor blues scale notation](a-minor-blues-notation.jpg)

        
## Triplets

        
The strings with blue notes are notated with a bracketed 3 above them. This rhythm is called a triplet. In this case it is an eighth-note triplet. Three eighth-note triplets fit into the same space as two eighth notes (one beat). You could also have sixteenth-note triplets, quarter-note triplets, half-note triplets, etc. Eighth-note triplets give music a gentle "swinging" feel and are commonly used in blues and jazz.

        
## E minor blues scale

        
This scale is played in both the twelfth and open positions. Practice ascending and descending, then try mixing up the notes to solo on an E blues.

        ![E minor blues scale](e-minor-blues.jpg)
        ![E minor blues scale notation](e-minor-blues-notation.jpg)', 4, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'blues-licks', 'Blues licks', 'Learning licks is helpful when first grasping a new style of music. Aim to memorize and apply a lick then alter it to make it your own. Plan to eventually learn these licks in all twelve keys and positions. Here they are presented in the key of A (5th position) and E (12th position and open).

        
## Blues lick 1

        
A simple but useful pentatonic lick.

        ![Blues lick 1](blues-lick-1.jpg)

        
## Blues lick 2

        
This familiar lick is in the style of Eric Clapton.

        ![Blues lick 2](blues-lick-2.jpg)

        
## Blues lick 3

        
Another common blues lick. This is useful for rhythm playing and lead playing.

        ![Blues lick 3](blues-lick-3.jpg)

        
## Blues lick 4

        
This rock and blues lick sounds great when played fast. Play with picking and pulloffs.

        ![Blues lick 4](blues-lick-4.jpg)

        
## Blues lick 5

        
This lick is in the style of Chuck Berry. Use one finger of the left hand to barre the strings and slide into the note.

        ![Blues lick 5](blues-lick-5.jpg)

        
## Blues lick 6

        
Descending blues lick. Try sliding from the first note to the second note with the third finger.

        ![Blues lick 6](blues-lick-6.jpg)

        
## Blues lick 7

        
Same as lick six but utilizing a bend. The bend should match the first note in the previous lick.

        ![Blues lick 7](blues-lick-7.jpg)

        
## Blues lick 8

        
Descending blues scale lick. Try sliding from the first note to the second note with the third finger.

        ![Blues lick 8](blues-lick-8.jpg)

        
## Blues lick 9

        
This lick utilizes the tension of going from the minor third to the major third.

        ![Blues lick 9](blues-lick-9.jpg)

        
## Blues lick 10

        
Same as lick eight with a bend. The bend should match the first note in the previous lick.

        ![Blues lick 10](blues-lick-10.jpg)

        
## Blues lick 11

        
This bending lick is in the style of Stevie Ray Vaughan and Freddie King. Hold the bent notes over to match the pitch of the next note.

        ![Blues lick 11](blues-lick-11.jpg)

        
## Blues lick 12

        
A nice blues lick. Try bending from the second to third note as you did in lick ten.

        ![Blues lick 12](blues-lick-12.jpg)

        
## Blues lick 13

        
This is a **turnaround** lick. Play it over measures nine and ten of the twelve bar blues form.

        ![Blues lick 13](blues-lick-13.jpg)

        
## Blues lick 14

        
Another great turnaround lick in the style of Stevie Ray Vaughan.

        ![Blues lick 14](blues-lick-14.jpg)', 5, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'blues-etudes', 'Blues etudes', '## Blues etude 1

        
This etude makes use of walking blues patterns, seventh chords, and some of the blues licks you have learned. Start off playing slowly and as cleanly as possible and gradually increase the tempo. Aim for a smooth transition between measures and play with good time.

        ![Blues etude 1](blues-etude-1.jpg)

        
## Blues etude 2

        
Etude one in the key of E.

        ![Blues etude 2](blues-etude-2.jpg)

        
## Blues etude 3

        
This etude makes use of a first and second ending. Play the measure under the first bracket the first time, repeat back to the forward-facing repeat sign, then jump to the second bracket when you get there. Start off playing slowly and as cleanly as possible and gradually increase the tempo. Aim for a smooth transition between measures and play with good time.

        ![Blues etude 3](blues-etude-3.jpg)

        
## Blues etude 4

        
Etude three in the key of E.

        ![Blues etude 4](blues-etude-4.jpg)', 6, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'blues-songs', 'Blues songs', 'The etudes in this course are a great starting point for your adventure into blues. That said, blues is a huge genre of music and there are so many subtleties involved. Here''s a list of some more blues songs you might want to learn. While you dive into the music this list will grow but these are excellent to start with.

        

          - "Boogie Chillun" - John Lee Hooker

          - "Boom Boom" - John Lee Hooker

          - "Born Under A Bad Sign" - Albert King

          - "Cross Road Blues" - Robert Johnson

          - "Folsom Prison Blues" - Johnny Cash

          - "I Can''t Quit You Babe" - Led Zeppelin

          - "Mustang Sally" - Wilson Pickett

          - "Red House" - Jimi Hendrix

          - "Scuttle Buttin''" - Stevie Ray Vaughan

          - "Stormy Monday" - T-Bone Walker

          - "Smokestack Lightnin''" - Howlin'' Wolf

          - "Sweet Sixteen" - B.B. King

          - "T-Bone Shuffle" - T-Bone Walker

          - "Texas Flood" - Stevie Ray Vaughan

          - "The Thrill Is Gone" - B.B. King

          - "Three O''Clock Blues" - B.B. King', 7, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'the-caged-system', 'The CAGED system', 'The CAGED system is a useful way to learn more advanced chords even if your understanding of music theory is not quite there yet. If you already know theory, then CAGED is a great way to view the instrument from an alternative perspective. Use CAGED to find chords, arpeggios, and scales in all keys and positions on the guitar neck. Along with a basic knowledge of the notes on the neck, CAGED will guide your playing up the neck and to new levels.

        
CAGED is an acronym for some of the most common chord shapes on guitar: C, A, G, E, and D. Each of these shapes can be played as a barre chord by moving the shape up and fretting the previously open strings. Playing these barre chords may require alternate fingerings, and some have extra notes which can be added to the basic shape.

        
## C shape

        
To play the C shape as a barre chord, first re-finger the chord with your fourth, third, and second fingers.

        
Next, move all fingers up one fret and barre the third and first-strings first-fret with your first finger. The root note is notated in red throughout this lesson. Determine the root by the position where a chord shape is played on the neck.

        
The full version of the C shape uses all four fingers and a barre and it can be kind of difficult to play. Try playing smaller parts of the chord to find some more useful voicings like these:

        ![C shape CAGED](c-shape-caged.jpg)
        
### Useful voicings

        ![C shape voicings](c-shape-voicings.jpg)

        
## A shape

        
You will recognize the A shape from Part One. This shape can be fingered with a third finger barre or alternatively with fingers two, three, and four.

        ![A shape CAGED](a-shape-caged.jpg)
        
### Useful voicings

        ![A shape voicings](a-shape-voicings.jpg)

        
## G shape

        
The G shape is particularly tricky to play as a barre chord. Playing parts of the full shape is considerably more useful than the full shape.

        ![G shape CAGED](g-shape-caged.jpg)
        
### Useful voicings

        ![G shape voicings](g-shape-voicings.jpg)

        
## E shape

        
You will also recognize the E shape from Part One. This shape has many useful voicings.

        ![E shape CAGED](e-shape-caged.jpg)
        
### Useful voicings

        ![E shape voicings](e-shape-voicings.jpg)

        
## D shape

        
Many beginners will struggle to play the full version of the D shape. Don''t let this discourage you. There are some useful voicings that you can derive from this shape.

        ![D shape CAGED](d-shape-caged.jpg)
        
### Useful voicings

        ![D shape voicings](d-shape-voicings.jpg)', 8, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'caged-in-12-keys', 'CAGED in 12 keys', 'Now that you know all five shapes and some useful voicings from each shape, we can apply them to any key. The sequence of these shapes always goes in the order of C, A, G, E, D. For example, in C the sequence is C, A, G, E, and D. Start the pattern over for any of the other five keys. For example, in G the sequence is G, E, D, C, A.

        
## CAGED in C

        
### C-A-G-E-D

        ![CAGED in C](caged-in-c.jpg)

        
## CAGED in A

        
### A-G-E-D-C

        ![CAGED in A](caged-in-a.jpg)

        
## CAGED in G

        
### G-E-D-C-A

        ![CAGED in G](caged-in-g.jpg)

        
## CAGED in E

        
### E-D-C-A-G

        ![CAGED in E](caged-in-e.jpg)

        
## CAGED in D

        
### D-C-A-G-E

        ![CAGED in D](caged-in-d.jpg)

        
## CAGED in B

        
### Same sequence as A: A-G-E-D-C

        ![CAGED in B](caged-in-b.jpg)

        
## CAGED in F

        
### Same sequence as E: E-D-C-A-G

        ![CAGED in F](caged-in-f.jpg)

        
## CAGED in F#/Gb

        
### Same sequence as E: E-D-C-A-G

        ![CAGED in F#/Gb](caged-in-fsharp.jpg)

        
## CAGED in G#/Ab

        
### Same sequence as G: G-E-D-C-A

        ![CAGED in G#/Ab](caged-in-gsharp.jpg)

        
## CAGED in A#/Bb

        
### Same sequence as A: A-G-E-D-C

        ![CAGED in A#/Bb](caged-in-asharp.jpg)

        
## CAGED in C#/Db

        
### Same sequence as C: C-A-G-E-D

        ![CAGED in C#/Db](caged-in-csharp.jpg)

        
## CAGED in D#/Eb

        
### Same sequence as D: D-C-A-G-E

        ![CAGED in D#/Eb](caged-in-dsharp.jpg)', 9, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'caged-chord-tones', 'CAGED chord tones', 'Now to analyze. Knowing the location of chord tones within each CAGED shape is helpful for improvising, understanding the guitar neck, and grasping music theory knowledge in general. Since a major chord is constructed with the root, third, and fifth of a key, each chord shape contains these notes. A chord tone is sometimes skipped in one or more octaves to make the chord playable on guitar. The skipped notes are marked in grey for each chord shape. Memorize the location of each chord tone.

        
## C shape

        
Begin with the C major scale: C D E F G A B. The root is C, the 3rd is E, and the 5th is G. Find these notes in the C shape. The location of each chord tone translates to a C shape played in any other key or location on the neck.

        ![C shape chord tones](c-shape-chord-tones.jpg)

        
## A shape

        
Begin with the A major scale: A B C# D E F# G#. The root is A, the 3rd is C#, and the 5th is E. Find these notes in the A shape. The location of each chord tone translates to an A shape played in any other key or location on the neck.

        ![A shape chord tones](a-shape-chord-tones.jpg)

        
## G shape

        
Begin with the G major scale: G A B C D E F#. The root is G, the 3rd is B, and the 5th is D. Find these notes in the G shape. The location of each chord tone translates to a G shape played in any other key or location on the neck.

        ![G shape chord tones](g-shape-chord-tones.jpg)

        
## E shape

        
Begin with the E major scale: E F# G# A B C# D#. The root is E, the 3rd is G#, and the 5th is B. Find these notes in the E shape. The location of each chord tone translates to an E shape played in any other key or location on the neck.

        ![E shape chord tones](e-shape-chord-tones.jpg)

        
## D shape

        
Begin with the D major scale: D E F# G A B C#. The root is D, the 3rd is F#, and the 5th is A. Find these notes in the D shape. The location of each chord tone translates to a D shape played in any other key or location on the neck.

        ![D shape chord tones](d-shape-chord-tones.jpg)

        
## Minor CAGED

        
Now you can apply these shapes to any chord type. Many of the full minor shapes are impractical to play, but the partial shapes and arpeggios from these shapes are very useful.

        
To make any chord shape minor, simply flat the 3rd (down one half step). Move these shapes anywhere on the fretboard just like the major shapes. To find any other chord type, change or add the necessary chord tones.

        
## C minor

        
### R:C b3:Eb 5:G

        ![C minor shape chord tones](c-minor-shape-chord-tones.jpg)

        
## A minor

        
### R:A b3:C 5:E

        ![A minor shape chord tones](a-minor-shape-chord-tones.jpg)

        
## G minor

        
### R:G b3:Bb 5:D

        ![G minor shape chord tones](g-minor-shape-chord-tones.jpg)

        
## E minor

        
### R:E b3:G 5:B

        ![E minor shape chord tones](e-minor-shape-chord-tones.jpg)

        
## D minor

        
### R:D b3:F 5:A

        ![D minor shape chord tones](d-minor-shape-chord-tones.jpg)', 10, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'caged-common-progressions', 'CAGED common progressions', 'Now apply the CAGED shapes to an I-vi-IV-V progression in the key of C. Remember, these four chords can be reorganized to give you the chords of many (if not most) songs. Once you feel comfortable with the notated progressions, change the order and/or the key. Refer to the common chord-progression song list from Course 2. Remember, in the key of C: C is I, Am is vi, F is IV, and G is V. Practice these shapes as chords and as arpeggios.

        
## Open C

        ![CAGED progression open C](caged-progression-open-c.jpg)

        
## Key of C, A position

        ![CAGED progression A position](caged-progression-a-position.jpg)

        
## Key of C, G position

        ![CAGED progression G position](caged-progression-g-position.jpg)

        
## Key of C, E position

        ![CAGED progression E position](caged-progression-e-position.jpg)

        
## Key of C, D position

        ![CAGED progression D position](caged-progression-d-position.jpg)

        
## Key of C, C position

        ![CAGED progression C position](caged-progression-c-position.jpg)', 11, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'minor-pentatonic-positions', 'Minor pentatonic positions', 'The minor pentatonic scale is one of the most-used scales in music and lays nicely on the guitar neck. You already know one position (or "box") of the pentatonic scale. This fingering of the pentatonic scale is typically the first scale most guitarists learn. To play the pentatonic scale up and down the neck, we must first analyze the notes played. Once you feel comfortable with this key, try transposing the pentatonic scale positions to all twelve keys. We will begin with A-minor pentatonic.

        
Play the familiar pentatonic box at the fifth fret. Next, analyze the notes played in this fingering: A, C, D, E, and G. This sequence of notes repeats in each octave. These five notes are the source of this scale''s name with penta meaning five and tonic meaning tones or notes. The pentatonic scale is a five-note scale.

        ![A minor pentatonic spelling](a-minor-pent-spelling-1.jpg)

        
Next, analyze each scale degree using the A-major scale. The minor pentatonic scale is built with the root, b3, 4, 5, and b7 scale degrees. Memorizing these scale degrees will be helpful when improvising and soloing with the minor pentatonic scale.

        ![A minor pentatonic scale degrees](a-minor-pent-spelling-2.jpg)

        
## A minor pentatonic box one

        
The pentatonic scale has five positions on the neck starting from each of the five notes of the scale. Learning these five positions will allow you to play the pentatonic scale up and down the neck without getting stuck in a box. Box one of the pentatonic scale starts with the root on the sixth string. The root is also located on the third and first strings. Being aware of the location of the root in each position will make it easier to transpose.

        ![A minor pentatonic box 1](a-minor-pentatonic-box-1.jpg)
        ![A minor pentatonic box 1 notation](a-minor-pentatonic-box-1-notation.jpg)

        
## A minor pentatonic box two

        
Box two of the pentatonic scale starts with the flat third scale degree on the sixth string. The root is on the fourth and second strings. A-minor pentatonic box two starts at the eighth fret.

        ![A minor pentatonic box 2](a-minor-pentatonic-box-2.jpg)
        ![A minor pentatonic box 2 notation](a-minor-pentatonic-box-2-notation.jpg)

        
## A minor pentatonic box three

        
Box three of the pentatonic scale starts with the fourth scale degree on the sixth string. The root is on the fifth and second strings. A-minor pentatonic box three starts at the tenth fret.

        ![A minor pentatonic box 3](a-minor-pentatonic-box-3.jpg)
        ![A minor pentatonic box 3 notation](a-minor-pentatonic-box-3-notation.jpg)

        
## A minor pentatonic box four

        
Box four of the pentatonic scale starts with the fifth scale degree on the sixth string. The root is on the fifth and third strings. A-minor pentatonic box four starts at the twelfth fret.

        ![A minor pentatonic box 4](a-minor-pentatonic-box-4.jpg)
        ![A minor pentatonic box 4 notation](a-minor-pentatonic-box-4-notation.jpg)

        
## A minor pentatonic box five

        
Box five of the pentatonic scale starts with the flat seven scale degree on the sixth string. The root is on the sixth, third, and first strings. A-minor pentatonic box five starts at the fifteenth or third fret.

        ![A minor pentatonic box 5](a-minor-pentatonic-box-5.jpg)
        ![A minor pentatonic box 5 notation](a-minor-pentatonic-box-5-notation.jpg)', 12, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'pentatonic-puzzle-pieces', 'Pentatonic puzzle pieces', 'Connecting pentatonic positions allows you to play up and down the neck. The top notes of each pentatonic position are the same as the bottom notes of the next pentatonic position. Use these "puzzle-piece" shapes to connect pentatonic positions together visually. The marked frets are for the key of A minor, but this concept can be used in any key.

        
## Box 1 to Box 2

        ![Pentatonic puzzle pieces box 1 to 2](pent-puzzle-1-2.jpg)

        
## Box 2 to Box 3

        ![Pentatonic puzzle pieces box 2 to 3](pent-puzzle-2-3.jpg)

        
## Box 3 to Box 4

        ![Pentatonic puzzle pieces box 3 to 4](pent-puzzle-3-4.jpg)

        
## Box 4 to Box 5

        ![Pentatonic puzzle pieces box 4 to 5](pent-puzzle-4-5.jpg)

        
## Box 5 to Box 1

        ![Pentatonic puzzle pieces box 5 to 1](pent-puzzle-5-1.jpg)', 13, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'pentatonic-shifting', 'Pentatonic shifting', 'Another way to practice connecting pentatonic positions is to shift positions on each string.

        
## Box one to two

        ![Pentatonic shifting box 1 to 2](pent-shift-1-2.jpg)

        
## Box two to three

        ![Pentatonic shifting box 2 to 3](pent-shift-2-3.jpg)

        
## Box three to four

        ![Pentatonic shifting box 3 to 4](pent-shift-3-4.jpg)

        
## Box four to five

        ![Pentatonic shifting box 4 to 5](pent-shift-4-5.jpg)

        
## Box five to one

        ![Pentatonic shifting box 5 to 1](pent-shift-5-1.jpg)

        
## Shifting on every string

        
This final shifting exercise is a bit more difficult than the previous ones but looks really impressive since it covers such a large range of the instrument - from a low G on the 6th string to a high C on the 1st string. This covers all five pentatonic boxes - starting with box five, then box one, two, three, four, five, and finally one again.

        ![Pentatonic shifting all strings](pent-shift-all-strings.jpg)', 14, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'minor-blues-scale-positions', 'Minor blues scale positions', 'Next, analyze the blues scale fingering that you learned in Lesson Eight. Similar to the pentatonic scale, this analysis will allow you to play the blues scale up and down the neck. Remember, the blues scale is the same as the pentatonic scale with one added note: the #4/b5 chromatic note between the fourth and fifth scale degrees. This note is called the **blue note**.

        
## A minor blues scale box one

        ![A minor blues scale box 1](a-minor-blues-scale-positions-1.jpg)
        ![A minor blues scale box 1 notation](a-minor-blues-scale-positions-1-notation.jpg)

        
## A minor blues scale box two

        ![A minor blues scale box 2](a-minor-blues-scale-positions-2.jpg)
        ![A minor blues scale box 2 notation](a-minor-blues-scale-positions-2-notation.jpg)

        
## A minor blues scale box three

        ![A minor blues scale box 3](a-minor-blues-scale-positions-3.jpg)
        ![A minor blues scale box 3 notation](a-minor-blues-scale-positions-3-notation.jpg)

        
## A minor blues scale box four

        ![A minor blues scale box 4](a-minor-blues-scale-positions-4.jpg)
        ![A minor blues scale box 4 notation](a-minor-blues-scale-positions-4-notation.jpg)

        
## A minor blues scale box five

        ![A minor blues scale box 5](a-minor-blues-scale-positions-5.jpg)
        ![A minor blues scale box 5 notation](a-minor-blues-scale-positions-5-notation.jpg)', 15, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'major-pentatonic-positions', 'Major pentatonic positions', 'So far we have focused on the minor pentatonic and minor blues scales. These same positions and shapes can also be used to play major pentatonic and major blues scales. In a major key, use the relative minor pentatonic scale to find the major pentatonic scale. (Shortcut: relative major and minor are a minor third, or three frets, apart). Analyzing the notes of the pentatonic scale from the major root (C, D, E, G, A) gives you the root, second, third, fifth, and sixth scale degrees. The names of each position are the same as the minor pentatonic positions with box one starting with the root of the minor pentatonic on the sixth string.

        
## Box two (C major / A minor pentatonic)

        ![C major pentatonic box 2](c-major-pentatonic-box-2.jpg)

        
## Box three

        ![C major pentatonic box 3](c-major-pentatonic-box-3.jpg)

        
## Box four

        ![C major pentatonic box 4](c-major-pentatonic-box-4.jpg)

        
## Box five

        ![C major pentatonic box 5](c-major-pentatonic-box-5.jpg)

        
## Box one

        ![C major pentatonic box 1](c-major-pentatonic-box-1.jpg)', 16, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'major-blues-scale-positions', 'Major blues scale positions', 'The major blues scale follows the same pattern as the minor blues scale, but starts from the major root. Like the major pentatonic, use the relative minor blues scale positions to find the major blues scale. Add the blue note (the #2/b3) between the second and third scale degrees.

        
## Box two (C major blues / A minor blues)

        ![C major blues scale box 2](c-major-blues-box-2.jpg)

        
## Box three

        ![C major blues scale box 3](c-major-blues-box-3.jpg)

        
## Box four

        ![C major blues scale box 4](c-major-blues-box-4.jpg)

        
## Box five

        ![C major blues scale box 5](c-major-blues-box-5.jpg)

        
## Box one

        ![C major blues scale box 1](c-major-blues-box-1.jpg)', 17, true
FROM courses WHERE slug = 'blues-caged-pentatonics';


INSERT INTO lessons (course_id, slug, title, content, sort_order, published)
SELECT id, 'pentatonics-and-caged-shapes', 'Pentatonics & CAGED shapes', 'Connecting pentatonic positions with CAGED shapes is useful for soloing, playing fills within chords, and accompanying your solos with chords. Associating pentatonic and CAGED shapes will also help your overall knowledge of the neck.

        
## Minor pentatonic & CAGED

        
Each minor pentatonic position aligns with a CAGED chord shape. Learning these relationships helps you see the fretboard as an interconnected system rather than isolated positions.

        
### A minor pentatonic with E shape

        ![A minor pentatonic with E shape](am-pent-e-shape.jpg)

        
### A minor pentatonic with D shape

        ![A minor pentatonic with D shape](am-pent-d-shape.jpg)

        
### A minor pentatonic with C shape

        ![A minor pentatonic with C shape](am-pent-c-shape.jpg)

        
### A minor pentatonic with A shape

        ![A minor pentatonic with A shape](am-pent-a-shape.jpg)

        
### A minor pentatonic with G shape

        ![A minor pentatonic with G shape](am-pent-g-shape.jpg)

        
## Major pentatonic & CAGED

        
The major pentatonic positions align with CAGED shapes in the same way as the minor pentatonic. Use the relative minor relationship to find these shapes.

        
### C major pentatonic with C shape

        ![C major pentatonic with C shape](c-maj-pent-c-shape.jpg)

        
### C major pentatonic with A shape

        ![C major pentatonic with A shape](c-maj-pent-a-shape.jpg)

        
### C major pentatonic with G shape

        ![C major pentatonic with G shape](c-maj-pent-g-shape.jpg)

        
### C major pentatonic with E shape

        ![C major pentatonic with E shape](c-maj-pent-e-shape.jpg)

        
### C major pentatonic with D shape

        ![C major pentatonic with D shape](c-maj-pent-d-shape.jpg)', 18, true
FROM courses WHERE slug = 'blues-caged-pentatonics';

