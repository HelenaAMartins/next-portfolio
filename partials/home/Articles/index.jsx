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
          <Carousel
            autoplay={false}
            autoplaySpeed={5000}
            centerPadding="20px"
            dots={false}
            slidesToScroll={3}
            slidesToShow={3}
            responsive={[
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 2,
                  arrows: false,
                },
              },
              {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  arrows: false,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
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
