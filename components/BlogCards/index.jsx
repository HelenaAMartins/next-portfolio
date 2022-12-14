import * as Styled from "./styled";
import Image from "../Image";
import Button from "../Button";
import Link from "../Link";
import { maskDate, readingTime } from "../../utils";

const BlogCard = ({ data }) => {
  const { image, title, category, slug, excerpt, date_created, body } = data;

  return (
    <Styled.BlogWrapper>
      <Styled.Figure>
        <Link href={`/blog/${data?.slug}`}>
          <Image
            src={`https://gzk9bkt2.directus.app/assets/${image.filename_disk}`}
            layout="responsive"
            width="240"
            height="150"
          />
        </Link>
      </Styled.Figure>
      <Styled.SmallInfoWrapper>
        <Styled.Category>
          <Link href={`/category/${category?.slug}`}>{category?.title}</Link>
        </Styled.Category>
        <Styled.ReadTime>{readingTime(body)}</Styled.ReadTime>
      </Styled.SmallInfoWrapper>
      <Styled.InfoWrapper>
        <Link href={`/blog/${slug}`}>
          <Styled.Title>{`${title}`}</Styled.Title>
        </Link>
        <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      </Styled.InfoWrapper>
      <Styled.ButtonsWrapper>
        <Styled.Date>{maskDate(date_created)}</Styled.Date>
        <Link href={`/blog/${slug}`}>
          <Button small dark>
            Read more
          </Button>
        </Link>
      </Styled.ButtonsWrapper>
    </Styled.BlogWrapper>
  );
};

export default BlogCard;
