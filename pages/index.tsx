import { About, Cards, EmailList, Hero, Layout, VideoLessons } from "../components";

const Home = (): JSX.Element => {
  return (
    <Layout home>
      <Hero />
      <Cards />
      <EmailList />
      <VideoLessons />
      <About />
    </Layout>
  );
};

export default Home;
