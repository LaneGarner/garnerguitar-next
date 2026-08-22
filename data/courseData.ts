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
export interface CoursesInterface {
  title: string;
  description: string;
  tagline: string;
  highlights: string[];
  img: string;
  shortName: string;
  isComingSoon?: boolean;
  courses: CourseInterface[];
}

export const courses: CoursesInterface[] = [
  //beginner to advanced course
  {
    title: "Beginner to Advanced",
    description:
      "This series is based on the curriculum I use with private students. It begins with the practical basics of playing guitar, then develops technique, reading, music theory, ear training, fretboard knowledge, blues, the CAGED system, and pentatonic scales.\n\nThe courses are designed to be studied in order, but each lesson can also be used on its own. If a topic is new, take your time with it. If you already have some experience, use the series to find gaps in your understanding and strengthen the fundamentals behind your playing.\n\nThese skills apply across many styles of music. The goal is to help you understand the instrument, hear music more clearly, and approach new material with a reliable process.",
    tagline: "Build your playing from the fundamentals up",
    highlights: ["Beginner Friendly", "Chords", "Theory", "Reading", "Technique", "Blues", "CAGED", "Scales", "Ear Training", "Fretboard Navigation"],
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "beginner-to-advanced",
    courses: [
      {
        part: 1,
        title: "Guitar Basics",
        img: "/images/Garner-Guitar-Book-Cover.jpg",
        imgPath: "/images/beg-to-adv/course-1",
        description: "Start here if you are new to guitar or want to review the fundamentals. Learn how the instrument works, how to practice, how to read common forms of notation, and how to play chords, rhythms, power chords, a blues shuffle, and your first pentatonic scale.",
        description2: "Free access to all 21 lessons. No previous experience required.",
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
          "Develop cleaner technique while learning how music is organized on the page, on the fretboard, and by ear. The course covers technical exercises, standard notation, scales, intervals, triads, key signatures, common progressions, and introductory ear training.",
        description2: "These skills help you learn music more efficiently and understand the ideas behind what you play.",
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
          "Learn the structure and sound of the blues, then use the CAGED system to connect chords, chord tones, and pentatonic scales across the fretboard. The course includes shuffle patterns, dominant seventh chords, scale positions, licks, and short studies.",
        description2: "Build a practical fretboard vocabulary that applies to blues, rock, country, jazz, and other styles.",
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
      "Jazz guitar courses are in development. Planned topics include chord voicings, comping, harmony, repertoire, fretboard knowledge, ear training, and improvisation.",
    tagline: "Develop your harmony, comping, and improvisation",
    highlights: ["Voicings", "Comping", "Improv"],
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "jazz",
    isComingSoon: true,
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
      "Courses for young beginners are in development. These lessons will introduce students ages 6 to 12 to basic technique, rhythm, notation, chords, and familiar songs through short, manageable exercises.",
    tagline: "A clear introduction to guitar for ages 6 to 12",
    highlights: ["Fun Songs", "Basics", "Reading"],
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    shortName: "young-beginner",
    isComingSoon: true,
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
