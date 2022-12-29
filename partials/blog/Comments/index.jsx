import { DiscussionEmbed } from "disqus-react";
import * as Styled from "./styled";

const Comments = ({ data }) => {
  return (
    <Styled.CommentsWrapper>
      <Styled.Title>Comments</Styled.Title>
      <DiscussionEmbed
        shortname="mhelena"
        config={{
          url: `https://www.mhelena.com.br/blog/${data.slug}`,
          identifier: data.id,
          title: data.title,
        }}
      />
    </Styled.CommentsWrapper>
  );
};

export default Comments;
