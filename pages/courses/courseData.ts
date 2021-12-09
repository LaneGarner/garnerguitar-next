interface CoursePartInterface {
  part: number;
  title: string;
  img: string;
  description: string;
  description2?: string;
  skills: string[];
  url: string;
}

interface CourseCardInterface {
  title: string;
  description: string;
  img: string;
  url: string;
  parts: CoursePartInterface[];
}

export const courses: CourseCardInterface[] = [
  {
    title: "Beginner to Advanced Guitar Course",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    url: "beginner",
    parts: [
      {
        part: 1,
        title: "Guitar Basics",
        img: "/images/Garner-Guitar-Book-Cover.jpg",
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
        url: "/courses/beginner",
      },
      {
        part: 2,
        title: "Technique, Reading & Theory",
        img: "../../public/images/logo.jpg",
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
        url: "/courses/",
      },
      {
        part: 3,
        title: "Blues, CAGED & Pentatonics",
        img: "../../public/images/logo.jpg",
        description:
          "This intro course is designed to teach you the basics of guitar if you've never taken a lesson or even played before. You will learn foundational concepts with enough content to sustain long term growth as a player.",
        skills: ["", "", "", "", "", "", "", "", ""],
        url: "/courses/",
      },
    ],
  },
  {
    title: "Jazz Guitar Course",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    url: "jazz",
    parts: [
      {
        part: 1,
        title: "title",
        img: "/images/logo.jpg",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/jazz",
      },
      {
        part: 2,
        title: "title",
        img: "/images/logo.jpg",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/jazz",
      },
      {
        part: 3,
        title: "title",
        img: "/images/logo",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/jazz",
      },
    ],
  },
  {
    title: "Young Beginner Guitar Course",
    description:
      "Inventore quo veritatis quasi, neque eum quia voluptas modi velit minus magni quis doloribus aspernatur incidunt! Ratione officia necessitatibus dolores vero possimus iste et nulla dicta fuid molestias debitis totam odit, ab cupiditate, nulla distinctio sapiente provident temporibus facere dolorem tenetur et sunt doloribus eum ipsum nemo consequuntur. Similique laboriosam mollitia exercitationem rem expedita, maiores, accusamus rerum esse omnis eum qui nisi sint modi! Harum maxime distinctio provident repellendus!",
    img: "/images/Garner-Guitar-Book-Cover.jpg",
    url: "young-beginner",
    parts: [
      {
        part: 1,
        title: "title",
        img: "/images/logo.jpg",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/young-beginner",
      },
      {
        part: 2,
        title: "title",
        img: "/images/logo.jpg",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/young-beginner",
      },
      {
        part: 3,
        title: "title",
        img: "/images/logo",
        description: "description",
        description2: "description 2",
        skills: ["", "", "", "", "", "", "", "", "", ""],
        url: "/courses/young-beginner",
      },
    ],
  },
];
