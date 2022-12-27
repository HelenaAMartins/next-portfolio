import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import Seo from "../../components/Seo";
import Title from "../../components/Title";
import Articles from "../../partials/blog/Articles";
import GetInTouch from "../../partials/home/GetInTouch";

const CategoryPage = ({ blog, meta }) => {
  return (
    <Layout>
      <Seo />
      <Title
        title="Blog"
        subtitle={
          blog[0]?.category?.title
            ? `/* Check the articles related to $\{${blog[0]?.category?.title}\} */`
            : "Oops! Category not found"
        }
      />
      <Articles blog={blog} />
      <Pagination items={meta?.filter_count} />
      <GetInTouch />
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1, slug } }) {
  const dataBlog = await fetch(
    `https://gzk9bkt2.directus.app/items/blog?limit=6&page=${page}&fields=*.*&filter[status][_eq]=published&filter[category][slug][_eq]=${slug}&sort=-date_created&meta=*`
  ).then((resp) => resp.json());

  return {
    props: {
      blog: dataBlog.data,
      meta: dataBlog.meta,
    },
  };
}

export default CategoryPage;
