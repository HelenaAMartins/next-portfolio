import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Article from "../../partials/blog/Article";
import GetInTouch from "../../partials/home/GetInTouch";

const BlogSingle = ({ article, categories }) => {
  console.log(categories);
  return (
    <Layout>
      <Seo />
      <Article data={article} categories={categories} />
      <GetInTouch />
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const dataArticle = await fetch(
    `https://gzk9bkt2.directus.app/items/blog?&fields=*.*&filter[status][_eq]=published&filter[slug][_eq]=${slug}`
  ).then((resp) => resp.json());

  const dataCategories = await fetch(
    `https://gzk9bkt2.directus.app/items/categories?&fields=*.*&filter[status][_eq]=published`
  ).then((resp) => resp.json());

  return {
    props: {
      article: dataArticle?.data[0],
      categories: dataCategories?.data,
    },
  };
}

export default BlogSingle;
