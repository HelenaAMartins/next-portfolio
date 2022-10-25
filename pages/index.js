import Layout from "../components/Layout";
import Experiences from "../partials/home/Experiences";
import GetInTouch from "../partials/home/GetInTouch";
import Hero from "../partials/home/Hero";
import Projects from "../partials/home/Projects";
import Seo from "../components/Seo";

const HomePage = ({ exps, projects, social }) => {
  return(
  <Layout>
    <Seo />
    <Hero />
    <Projects projects={projects}/>
    <Experiences exps={exps}/>
    <GetInTouch />
  </Layout>
)};

export async function getServerSideProps() {
  const dataExp = await fetch("https://gzk9bkt2.directus.app/items/Experiences?fields=*.*").then((resp) => resp.json());
  const dataProjects = await fetch("https://gzk9bkt2.directus.app/items/projects?fields=*.*").then((resp) => resp.json());
  const dataSocial = await fetch("https://gzk9bkt2.directus.app/items/social?fields=*.*").then((resp) => resp.json());
  
  return {
    props: {
      exps: dataExp.data,
      projects: dataProjects.data,
      social: dataSocial.data
    },
    
  };
}

export default HomePage;
