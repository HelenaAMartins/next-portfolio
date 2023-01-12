import Carousel from "../../../components/Carousel";
import Container from "../../../components/Container";
import Title from "../../../components/Title";

import BlogCard from "../../../components/BlogCards";
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import * as Styled from "./styled";

const Articles = ({ blog }) => {
  return (
    <Styled.Articles id="articles">
      <Container>
        <Title title="Blog" subtitle="/* These are the latest articles. */" />
        <Styled.Wrapper>
          <Carousel>
            {blog.map((item, id) => (
              <BlogCard data={item} key={`article-${id}`} />
            ))}
          </Carousel>
        </Styled.Wrapper>
        <Styled.ButtonWrapper>
          <Button>
            <Link href="/blog">View all</Link>
          </Button>
        </Styled.ButtonWrapper>
      </Container>
    </Styled.Articles>
  );
};

export default Articles;
