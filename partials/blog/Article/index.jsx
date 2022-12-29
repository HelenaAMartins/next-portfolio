import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTheme } from "styled-components";
import Breadcrumbs from "../../../components/Breadcrumbs";

import Container from "../../../components/Container";
import Link from "../../../components/Link";
import { Camera } from "../../../icons";
import AuthorDateInfo from "../AuthorDateInfo";
import Comments from "../Comments";
import HeroImage from "../HeroImage";
import Share from "../Share";

import * as Styled from "./styled";

const Article = ({ data, categories }) => {
  const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/blog", breadcrumb: "Blog" },
    { path: "", breadcrumb: `${data?.title}` },
  ];
  const { colors } = useTheme();
  return (
    <Styled.Article id="article">
      <HeroImage image={data?.image} />
      <Breadcrumbs items={routes} />
      <Container>
        <Styled.GridInfo>
          <Styled.WrapperTitle>
            <Styled.Title>{data?.title}</Styled.Title>
            <AuthorDateInfo data={data} />
          </Styled.WrapperTitle>
          <Share slug={data?.slug} title={data?.title} quote={data?.excerpt} />
        </Styled.GridInfo>
        <Styled.GridTextCategories>
          <Styled.Wysiwyg>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {data?.body}
            </ReactMarkdown>
            {data?.credits && (
              <Styled.Credits>
                <Camera color={colors.offWhite} />
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {data?.credits}
                </ReactMarkdown>
              </Styled.Credits>
            )}
            <Comments data={data} />
          </Styled.Wysiwyg>
          <Styled.SideBar>
            <Styled.CatWrapper>
              <Styled.CatHeader>Categories</Styled.CatHeader>
              {categories?.map((category) => (
                <Link
                  href={`/category/${category?.slug}`}
                  key={`category-${category?.id}`}
                >
                  <Styled.CatItem>{category?.title}</Styled.CatItem>
                </Link>
              ))}
            </Styled.CatWrapper>
          </Styled.SideBar>
        </Styled.GridTextCategories>
      </Container>
    </Styled.Article>
  );
};

export default Article;
