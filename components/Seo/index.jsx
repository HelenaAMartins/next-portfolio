import Head from "next/head";

const Seo = ({ data }) => (
  <Head>
    <title>
      {data?.title ? `${data?.title} | ` : ""}Helena Martins Portfolio
    </title>
    <meta
      name="description"
      content={
        data?.excerpt
          ? data?.excerpt
          : "Helena Martins is a front-end developer, based in São Paulo, Brazil. She works with HTML, CSS, Javascript and React and Typescript."
      }
    />
    <meta name="author" content="Helena Martins" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={data?.title ? data?.title : "Helena Martins Portfolio"}
    />
    <meta property="og:site_name" content="Helena Martins Portfolio" />
    <meta
      property="og:description"
      content={
        data?.excerpt
          ? data?.excerpt
          : "Helena Martins is a front-end developer, based in São Paulo, Brazil. She works with HTML, CSS, Javascript and React and Typescript."
      }
    />
    <meta
      property="og:image"
      content={
        data?.image?.filename_disk
          ? `https://gzk9bkt2.directus.app/assets/${data?.image?.filename_disk}`
          : "/share.png"
      }
    />
    <meta
      name="google-site-verification"
      content="DleOk1d92lbAQOs4kh6TCe78TXIHuUc7f0ZxYMJySm4"
    />
  </Head>
);

export default Seo;
