import Image from "next/image";
import { Layout } from "../components";

const Book = (): JSX.Element => {
  return (
    <Layout>
      <h1>Garner Guitar Book</h1>
      <h2>Beginning to Intermediate Guitar Lessons for All Ages</h2>
      <Image src="/images/Garner-Guitar-Book-Cover.jpg" width={174} height={225}/>
      <p>Are you ready to learn to guitar or take your playing to the next level? This book is the culmination of years of compiling resources I've used to teach beginner to intermediate students ages 5-65 over the past 10+ years. It is intended to serve as a method book and also a resource through your journey learning guitar. I hope it will also be useful to guitar instructors to use with students. You can either move chronulogically page to page (as the method builds upon itself) or you can choose your own adventure should any particular topics pique your interest.</p>
      <p>This book is divided into three parts. Part one starts with guitar basics such as tuning, guitar anatomy, basic chords, and an overview of notation methods for guitar. Take your time and be patient with this section as the building blocks are essential. Part two dives into technique, reading, and music theory. You will learn some great warm ups, how to read standard notation, and how music is constructed. Part three dives into blues, the CAGED system, and pentatonic scales. Blues is one of the most common styles of guitar playing, and so many other styles such as jazz, rock, country, etc. are based on it. The CAGED system is a guitar specific method and a great way to learn the neck more fully. Pentatonic scales are one of the first scales most beginners learn, but we will also dive into more advanced fingerings and ways to connect them to chords. At the end you will find some resources such as blank notation pages and practice logs to copy, the "bass-ics" of bass guitar, and more.</p>
      <p>Much of this content consists of methods I've either created or come across to explain different concepts related to learning guitar. Many of these methods are frankly things I wish I had been taught while learning. Be aware that the concepts in this book are not the only way to approach these subjects, nor should they be the only ones you learn. Try seeking out different points of view to come to a more comprehensive understanding of any subject. I like the metaphor of Cubist art to describe this mindset. Popularized by artists such as Pablo Picasso and Georges Braque in the early 1900s, Cubism presents views of an object from multiple angles at the same time resulting in abstract images. The more perspectives you expose yourself to, the better you will understand. Take my methods with a grain of salt, find some alternative points of view, and use your own wisdom to make sense of it for yourself. This is exactly how I came to many of the conclusions in this book.</p>
      <p>This book may seem long and daunting, but it is intended to be comprehensive. Many guitar methods are so basic that they are confusing. The materials in this book may take years to digest and master, but in that time you will go from novice to accomplished intermediate player. For more resources beyond this book, visit my website at GarnerGuitar.com for all my latest content. Take your time with this book and use it in addition to the many other great materials available to you. Good luck and keep practicing.</p>
    </Layout>
  );
};

export default Book;
