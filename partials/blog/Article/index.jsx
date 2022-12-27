import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTheme } from "styled-components";

import Container from "../../../components/Container";
import Link from "../../../components/Link";
import { Camera } from "../../../icons";
import AuthorDateInfo from "../AuthorDateInfo";
import HeroImage from "../HeroImage";
import Share from "../Share";

import * as Styled from "./styled";

const Article = ({ data, categories }) => {
  const { colors } = useTheme();
  return (
    <Styled.Article id="article">
      <HeroImage image={data?.image} />
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
            <Styled.Credits>
              <Camera color={colors.offWhite} />
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {data?.credits}
              </ReactMarkdown>
            </Styled.Credits>
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
