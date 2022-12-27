import Layout from "../components/Layout";
import Experiences from "../partials/home/Experiences";
import GetInTouch from "../partials/home/GetInTouch";
import Hero from "../partials/home/Hero";
import Projects from "../partials/home/Projects";
import Seo from "../components/Seo";
import Articles from "../partials/home/Articles";

const HomePage = ({ exps, projects, blog }) => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Projects projects={projects} />
      <Experiences exps={exps} />
      <Articles blog={blog} />
      <GetInTouch />
    </Layout>
  );
};

export async function getServerSideProps() {
  const dataExp = await fetch(
    "https://gzk9bkt2.directus.app/items/Experiences?fields=*.*"
  ).then((resp) => resp.json());
  const dataProjects = await fetch(
    "https://gzk9bkt2.directus.app/items/projects?fields=*.*"
  ).then((resp) => resp.json());
  const dataBlog = await fetch(
    "https://gzk9bkt2.directus.app/items/blog?fields=*.*"
  ).then((resp) => resp.json());

  return {
    props: {
      exps: dataExp.data,
      projects: dataProjects.data,
      blog: dataBlog.data,
    },
  };
}

export default HomePage;
