//pages
export interface PagesInterface {
  title: string;
  component: string;
  headings: string[];
  text: string[];
  images: string[];
}

//each course
export interface CourseInterface {
  part: number;
  title: string;
  img: string;
  imgPath: string;
  description: string;
  description2?: string;
  skills: string[];
  pages: PagesInterface[];
  url: string;
}

//all courses
interface CoursesInterface {
  title: string;
  description: string;
  img: string;
  shortName: string;
  courses: CourseInterface[];
}

export const courses: CoursesInterface[] = [
  //beginner to advanced course
  {
    title: "Beginner to Advanced",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "beginner-to-advanced",
    courses: [
      {
        part: 1,
        title: "Free Guitar Basics Course",
        img: "/images/Garner-Guitar-Book-Cover.jpg",
        imgPath: "/images/beg-to-adv/course-1",
        description: "This intro course is designed to teach the basics of guitar if you've never taken a lesson or even played before.",
        description2: "You will learn foundational concepts with enough content to sustain long term growth as a player.",
        skills: [
          "Guitar anatomy",
          "Guitar accessories",
          "Tuning",
          "Finger names",
          "Hand position",
          "Beginning music theory",
          "Practice tips",
          "Starting chords",
          "Tablature",
          "Power chords",
          "Chord transitions",
          "Easy to learn song list",
          "Rhythmic notation",
          "The blues shuffle",
          "Pentatonics",
          "Open chords",
          "Intro to barre chords",
        ],
        pages: [
          {
            title: "Introduction",
            component: "introduction",
            headings: ["Finding & buying the right gear", "Four most common guitar types", "Electric guitar", "Acoustic guitar", "Classical guitar", "Bass guitar"],
            text: [""],
            images: ["acoustic-guitar.jpg", "ag-hand.jpg", "bass-guitar.jpg", "classical-guitar.jpg", "electric-guitar.jpg", "guitars-closeup.jpg"],
          },
          {
            title: "Guitar anatomy",
            component: "GuitarAnatomy",
            headings: [""],
            text: [" "],
            images: ["guitar-anatomy-2.jpg", "guitar-anatomy.jpg"],
          },
          {
            title: "Guitar accessories",
            component: "GuitarAccessories",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Practicing",
            component: "Practicing",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Practice log",
            component: "PracticeLog",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Repertoire",
            component: "Repertoire",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Listening",
            component: "Listening",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Beginning music theory",
            component: "BeginningMusicTheory",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Tuning",
            component: "Tuning",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Finger names",
            component: "FingerNames",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Hand position",
            component: "HandPosition",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Notation",
            component: "Notation",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Chords to get you started",
            component: "ChordsToGetYouStarted",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Tablature",
            component: "Tablature",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Power chords",
            component: "PowerChords",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Chord transitions",
            component: "ChordTransitions",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Easy songs to learn",
            component: "EasySongsToLearn",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Rhythmic notation",
            component: "RhythmicNotation",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "The blues shuffle",
            component: "TheBluesShuffle",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Intro to pentatonics",
            component: "IntroToPentatonics",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Open chords",
            component: "OpenChords",
            headings: [""],
            text: [" "],
            images: [" "],
          },
          {
            title: "Intro to barre chords",
            component: "IntroToBarreChords",
            headings: [""],
            text: [" "],
            images: [" "],
          },
        ],
        url: "/courses/beginner-to-advanced/guitar-basics",
      },
      {
        part: 2,
        title: "Technique, Reading & Theory",
        img: "../../public/images/logo.jpg",
        imgPath: "/images/beg-to-adv/course-2",
        description:
          "Building upon the foundational concepts taught in the guitar basics course, you will learn three advancing concepts. This course will improve beginner guitar skills with technical exercises. Learn the basics of reading standard notation on guitar and better understanding the fretboard. and describe the basic building blocks of music to begin to understand music theory.",
        skills: [
          "Technique exercises & warm-ups",
          "Scales",
          "Reading standard notation",
          "Common song examples",
          "Tab & standard notation together",
          "Guitar geography",
          "The chromatic scale",
          "Building major scales",
          "Circle of 4ths/5ths",
          "Key signatures",
          "Intervals",
          "Intro to ear training",
          "Interval inversions",
          "Building triads",
          "Roman numerals",
          "Nashville number system",
          "Common chord progressions",
        ],
        pages: [
          { title: "Introduction", component: "Introduction", headings: [""], text: [""], images: [""] },
          { title: "Finger combination exercise", component: "FingerCombination", headings: [""], text: [""], images: [""] },
          { title: "String crossing exercise", component: "StringCrossing", headings: [""], text: [""], images: [""] },
          { title: "Pull-offs & hammer-ons", component: "PullOffsHammerOns", headings: [""], text: [""], images: [""] },
          { title: "Subdivision studies", component: "SubdivisionStudies", headings: [""], text: [""], images: [""] },
          { title: "Upstroke exercise", component: "UpstrokeExercise", headings: [""], text: [""], images: [""] },
          { title: "Spider exercises", component: "SpiderExercises", headings: [""], text: [""], images: [""] },
          { title: "Rhythmic hierarchy exercise", component: "RhythmicHierarchy", headings: [""], text: [""], images: [""] },
          { title: "Scales", component: "Scales", headings: [""], text: [""], images: [""] },
          { title: "Intro to standard notation", component: "StandardNotationIntro", headings: [""], text: [""], images: [""] },
          { title: "Notes on the staff", component: "NotesOnStaff", headings: [""], text: [""], images: [""] },
          { title: "Open strings", component: "OpenStrings", headings: [""], text: [""], images: [""] },
          { title: "First string", component: "FirstString", headings: [""], text: [""], images: [""] },
          { title: "Second string", component: "SecondString", headings: [""], text: [""], images: [""] },
          { title: "Third string", component: "ThirdString", headings: [""], text: [""], images: [""] },
          { title: "Fourth string", component: "FourthString", headings: [""], text: [""], images: [""] },
          { title: "Fifth string", component: "FifthString", headings: [""], text: [""], images: [""] },
          { title: "Sixth string", component: "SixthString", headings: [""], text: [""], images: [""] },
          { title: "Tab and standard notation", component: "TabAndStandardNotation", headings: [""], text: [""], images: [""] },
          { title: "Music theory", component: "MusicTheory", headings: [""], text: [""], images: [""] },
          { title: "Guitar geography", component: "GuitarGeography", headings: [""], text: [""], images: [""] },
          { title: "The chromatic scale", component: "ChromaticScale", headings: [""], text: [""], images: [""] },
          { title: "Building major scales", component: "BuildingMajorScales", headings: [""], text: [""], images: [""] },
          { title: "Circle of 4ths & 5ths", component: "CircleOf4ths5ths", headings: [""], text: [""], images: [""] },
          { title: "Intervals", component: "Intervals", headings: [""], text: [""], images: [""] },
          { title: "Intro to ear training", component: "EarTrainingIntro", headings: [""], text: [""], images: [""] },
          { title: "Building triads", component: "BuildingTriads", headings: [""], text: [""], images: [""] },
          { title: "Functional harmony & progressions", component: "FunctionalHarmony", headings: [""], text: [""], images: [""] },
        ],
        url: "/courses/beginner-to-advanced/technique-reading-theory",
      },
      {
        part: 3,
        title: "Blues, CAGED & Pentatonics",
        img: "../../public/images/logo.jpg",
        imgPath: "/images/beg-to-adv/course-3",
        description:
          "This course introduces the blues, one of the most influential styles in American music. You will learn the CAGED system for navigating the fretboard and dive deep into pentatonic and blues scales.",
        skills: [
          "12 bar blues form",
          "Blues shuffle patterns",
          "Dominant seventh chords",
          "Minor blues scales",
          "Blues licks & etudes",
          "The CAGED system",
          "CAGED in all 12 keys",
          "CAGED chord tones",
          "Pentatonic scale positions",
          "Minor & major pentatonics",
        ],
        pages: [
          { title: "Introduction", component: "Introduction", headings: [""], text: [""], images: [""] },
          { title: "12 bar blues", component: "TwelveBarBlues", headings: [""], text: [""], images: [""] },
          { title: "Blues shuffle etudes", component: "BluesShuffleEtudes", headings: [""], text: [""], images: [""] },
          { title: "Dominant seventh chords", component: "DominantSeventhChords", headings: [""], text: [""], images: [""] },
          { title: "Minor blues scales", component: "MinorBluesScales", headings: [""], text: [""], images: [""] },
          { title: "Blues licks", component: "BluesLicks", headings: [""], text: [""], images: [""] },
          { title: "Blues etudes", component: "BluesEtudes", headings: [""], text: [""], images: [""] },
          { title: "Blues songs", component: "BluesSongs", headings: [""], text: [""], images: [""] },
          { title: "The CAGED system", component: "Caged", headings: [""], text: [""], images: [""] },
          { title: "CAGED in 12 keys", component: "CagedTwelveKeys", headings: [""], text: [""], images: [""] },
          { title: "CAGED chord tones", component: "CagedChordTones", headings: [""], text: [""], images: [""] },
          { title: "CAGED common progressions", component: "CagedCommonProgressions", headings: [""], text: [""], images: [""] },
          { title: "Minor pentatonic positions", component: "MinorPentatonicPositions", headings: [""], text: [""], images: [""] },
          { title: "Pentatonic puzzle pieces", component: "PentatonicPuzzlePieces", headings: [""], text: [""], images: [""] },
          { title: "Pentatonic shifting", component: "PentatonicShifting", headings: [""], text: [""], images: [""] },
          { title: "Minor blues scale positions", component: "MinorBluesScalePositions", headings: [""], text: [""], images: [""] },
          { title: "Major pentatonic positions", component: "MajorPentatonicPositions", headings: [""], text: [""], images: [""] },
          { title: "Major blues scale positions", component: "MajorBluesScalePositions", headings: [""], text: [""], images: [""] },
          { title: "Pentatonics & CAGED shapes", component: "PentatonicsCaged", headings: [""], text: [""], images: [""] },
        ],
        url: "/courses/beginner-to-advanced/blues-caged-pentatonics",
      },
    ],
  },

  //jazz guitar courses
  {
    title: "Jazz",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "jazz",
    courses: [
      {
        part: 1,
        title: "title",
        img: "/images/logo.jpg",
        imgPath: "/images/jazz/course-1",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/jazz",
      },
      {
        part: 2,
        title: "title",
        img: "/images/logo.jpg",
        imgPath: "/images/jazz/course-2",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/jazz",
      },
      {
        part: 3,
        title: "title",
        img: "/images/logo",
        imgPath: "/images/jazz/course-3",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/jazz",
      },
    ],
  },

  //young beginner courses
  {
    title: "Young Beginner",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "young-beginner",
    courses: [
      {
        part: 1,
        title: "title",
        img: "/images/logo.jpg",
        imgPath: "/images/young-beginner/course-1",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/young-beginner",
      },
      {
        part: 2,
        title: "title",
        img: "/images/logo.jpg",
        imgPath: "/images/young-beginner/course-1",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/young-beginner",
      },
      {
        part: 3,
        title: "title",
        img: "/images/logo",
        imgPath: "/images/young-beginner/course-1",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/young-beginner",
      },
    ],
  },
];
