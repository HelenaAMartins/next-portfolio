import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import Seo from "../../components/Seo";
import Title from "../../components/Title";
import Articles from "../../partials/blog/Articles";
import GetInTouch from "../../partials/home/GetInTouch";

const BlogPage = ({ blog, meta }) => {
  const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/blog", breadcrumb: "Blog" },
  ];
  return (
    <Layout>
      <Seo />
      <Breadcrumbs items={routes} />
      <Title
        title="Blog"
        subtitle="/* A piece of me and my learning process as frontend developer. */"
      />

      <Articles blog={blog} />
      <Pagination items={meta?.filter_count} />
      <GetInTouch />
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const dataBlog = await fetch(
    `https://gzk9bkt2.directus.app/items/blog?limit=6&page=${page}&fields=*.*&filter[status][_eq]=published&sort=-date_created&meta=*`
  ).then((resp) => resp.json());

  return {
    props: {
      blog: dataBlog.data,
      meta: dataBlog.meta,
    },
  };
}

export default BlogPage;
