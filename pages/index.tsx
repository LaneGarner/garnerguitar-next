import { About, CourseIntro, EmailList, Hero, Layout } from "../components";

const Home = (): JSX.Element => {
  return (
    <Layout home>
      <Hero />
      <CourseIntro />
      <About />
      <EmailList />
    </Layout>
  );
};

export default Home;
