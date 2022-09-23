import Layout from "../components/Layout";
import Experiences from "../partials/home/Experiences";
import GetInTouch from "../partials/home/GetInTouch";
import Hero from "../partials/home/Hero";
import Projects from "../partials/home/Projects";
import Seo from "../components/Seo";

const HomePage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Projects />
    <Experiences />
    <GetInTouch />
  </Layout>
);

export default HomePage;
