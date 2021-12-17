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
            text: [
              "Are you ready to learn to guitar or take your playing to the next level? This book is the culmination of years of compiling resources I've used to teach beginner to intermediate students ages 5-65 over the past 10+ years. It is intended to serve as a method book and also a resource through your journey learning guitar. I hope it will also be useful to guitar instructors to use with students. You can either move chronologically page to page (as the method builds upon itself ) or you can choose your own adventure should any particular topics pique your interest.",
              "This book is divided into three parts. Part one starts with guitar basics such as tuning, guitar anatomy, basic chords, and an overview of notation methods for guitar. Take your time and be patient with this section as the building blocks are essential. Part two dives into technique, reading, and music theory. You will learn some great warm ups, how to read standard notation, and how music is constructed. Part three dives into blues, the CAGED system, and pentatonic scales. Blues is one of the most common styles of guitar playing, and so many other styles such as jazz, rock, country, etc. are based on it. The CAGED system is a guitar specific method and a great way to learn the neck more fully. Pentatonic scales are one of the first scales most beginners learn, but we will also dive into more advanced fingerings and ways to connect them to chords. At the end you will find some resources such as blank notation pages and practice logs to copy, the 'bass-ics' of bass guitar, and more.",
              "Much of this content consists of methods I've either created or come across to explain different concepts related to learning guitar. Many of these methods are frankly things I wish I had been taught while learning. Be aware that the concepts in this book are not the only way to approach these subjects, nor should they be the only ones you learn. Try seeking out different points of view to come to a more comprehensive understanding of any subject. I like the metaphor of Cubist art to describe this mindset. Popularized by artists such as Pablo Picasso and Georges Braque in the early 1900s, Cubism presents views of an object from multiple angles at the same time resulting in abstract images. The more perspectives you expose yourself to, the better you will understand. Take my methods with a grain of salt, find some alternative points of view, and use your own wisdom to make sense of it for yourself. This is exactly how I came to many of the conclusions in this book.",
              "This book may seem long and daunting, but it is intended to be comprehensive. Many guitar methods are so basic that they are confusing. The materials in this book may take years to digest and master, but in that time you will go from novice to accomplished intermediate player. For more resources beyond this book, visit my website at GarnerGuitar.com for all my latest content. Take your time with this book and use it in addition to the many other great materials available to you. Good luck and keep practicing.",
              "Selecting a guitar depends on a variety of factors from budget to preferred musical style. First things first, plan a visit to your local guitar store to play as many guitars as possible. Get a sense for how each instrument feels and sounds. You may find yourself drawn to a certain look or aesthetic— this is important stuff! The more you enjoy your instrument, the more likely you are to play, practice, and progress. This store visit will give you a feel for each instrument, which is not possible when shopping online. Even if you plan to eventually buy online (where you can typically find better deals), visiting a store in-person will give you an idea of what you like. Keep in mind that big box guitar stores are businesses, and employees are often paid on commission. Beware of these employees attempting to sell an uneducated beginner a less-than-ideal instrument. Smaller local guitar stores may be more honest and less sales-driven, but they also might not. While a beginner doesn’t need a professional level instrument, it is also wise to avoid the cheapest option. A cheap guitar will be more difficult to play which can be discouraging while learning. Aim to buy the best guitar that your budget allows. If you know what you’re looking for, you can find great deals on used instruments through websites like Reverb.com, eBay, and local Craigslist advertisements. For new instruments, use websites like Sweetwater, Musicians Friend, or even Amazon. Don’t be surprised if your guitar collection eventually grows. Different types of guitars allow you to play with a range of different tones, sounds, and textures because certain guitars lend themselves to particular styles of music.",
              "There is a common misconception that beginners should start on acoustic guitar and then move on to electric guitar once they have learned the basics. I, for one, strongly disagree and recommend that students start with an electric or classical guitar. The acoustic guitar is by nature more difficult to play. The strings have more tension and are harder to press down, not to mention that the larger body can be cumbersome to reach around with the right arm. This can discourage practice while developing left-hand strength and building calluses. If you already have a guitar and/ or can’t afford to buy a higher quality instrument, take your instrument to a highly regarded guitar tech for a set-up. A good set-up will make any instrument easier to play and can even make it sound better.",
              "Arguably the most recognizable type of guitar, the electric guitar typically has six metal (usually steel or nickel) strings. It is easy to play, which makes it a great choice for a beginner. Keep in mind that an electric guitar also requires the investment of an amplifier. The most popular and iconic electric guitar models are the Fender Telecaster, Fender Stratocaster, and the Gibson Les Paul.",
              "For a budget-level yet high-quality electric guitar, my top suggestion is the Squier Classic Vibe line which runs about $400 new. This line includes stratocaster, telecaster, and even some bass models. While Squier is considered Fender’s “cheap” brand, and most of their instruments are best to avoid, this particular line includes such high-quality instruments that I know numerous professional musicians who play these. This is a great option that you won’t outgrow while you progress as a musician. For the young beginner looking for a smaller instrument, the Squier Mini is a decent choice. Another possibility is to seek out a used Mexican-made Fender. These are quality instruments and can, in time, be upgraded with higher-quality electronics and hardware. If you think humbucker guitars might be more your thing, search for a used Epiphone Les Paul or SG.",
              "Electric guitars require the additional investment of an amp and cable. You may find package deals with a guitar, amp, and cable but these instruments are usually of lower quality, and while convenient, they are not optimal. It is best to seek out an inexpensive used tube amp. For a good entry-level tube amp, I recommend a Fender Blues Junior or a Peavey Classic 30.",
              "The acoustic guitar has six steel strings. It is great for strumming as well as fingerpicking styles. The acoustic is designed to be loud and does not require an amplifier. Acoustic guitar is used in many styles including country, rock, blues, and even jazz.",
              "So you love the acoustic guitar and don’t particularly care that I suggest not to start with it? No problem. Check out entry-level acoustic guitars made by Yamaha, Seagull, or Takamine. Younger beginners should also look into the slightly more expensive but extremely high quality Baby Taylor or Little Martin. Be sure to include a good set-up in your budget. If the steel strings are too difficult to press down, try a lighter string gauge or even nylon strings with ball ends.",
              "Classical guitars have six nylon strings. In the classical style, the strings are plucked with the right-hand fingers. The classical guitar can also be used to play other styles with or without a pick. The soft-sounding nylon strings create an excellent tone for classical music as well as folky styles.",
              "A classical guitar may not have the rockstar appeal of an electric, but the nylon strings are easier on a beginner’s un-callused fingers. Another benefit of choosing a classical guitar is that you won’t need an amp. This is a great option for a tentative beginner who might not want to invest much money while testing the waters. Brands with great entry-level classical guitars include Yamaha, Cordoba, Takamine, and Alvarez. Classical guitars have wider string spacing than most guitars, which can be helpful to keep players from accidentally muting strings while fingering tricky chords but may not be best for those with smaller hands. The two most common classical guitar sizes for younger beginners are 3⁄4-size and 1⁄2-size.",
              "The final member of the guitar family we will look at is the bass guitar. Basses typically have four or five strings and cover the low end of the band. The body and strings of the bass are larger than they are on the other types of guitars. Every band needs a bassist, and a good bassist will never be out of work...so maybe you should also learn bass! For an intro to the fundamentals of bass guitar check out the resources section of this book.",
              "For a full and regularly updated list of recommended guitar gear for beginners visit GarnerGuitar.com/guitar-gear-for-beginners",
            ],
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
