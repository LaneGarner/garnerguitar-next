import { About, EmailList, Hero, Layout } from "../components";

const Home = (): JSX.Element => {
  return (
    <Layout home>
      <Hero />
      <EmailList />
      <About />
    </Layout>
  );
};

export default Home;
