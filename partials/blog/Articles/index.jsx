import Container from "../../../components/Container";

import BlogCard from "../../../components/BlogCards";
import * as Styled from "./styled";

const Articles = ({ blog }) => {
  return (
    <Styled.Articles id="articles">
      <Container>
        <Styled.Wrapper>
          {blog.map((item, id) => (
            <BlogCard data={item} key={`article-${id}`} />
          ))}
        </Styled.Wrapper>
      </Container>
    </Styled.Articles>
  );
};

export default Articles;
