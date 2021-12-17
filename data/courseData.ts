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
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
          {
            title: "",
            component: "",
            headings: [""],
            text: ["", "", ""],
            images: ["", "", ""],
          },
        ],
        url: "/courses/",
      },
      {
        part: 3,
        title: "Blues, CAGED & Pentatonics",
        img: "../../public/images/logo.jpg",
        imgPath: "/images/beg-to-adv/course-3",
        description:
          "This intro course is designed to teach you the basics of guitar if you've never taken a lesson or even played before. You will learn foundational concepts with enough content to sustain long term growth as a player.",
        skills: ["", "", "", "", "", "", "", "", ""],
        pages: [
          {
            title: " ",
            component: " ",
            headings: [""],
            text: [" ", " ", " "],
            images: [" ", " ", " "],
          },
        ],
        url: "/courses/",
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
