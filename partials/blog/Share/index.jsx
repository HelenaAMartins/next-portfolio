import * as Styled from "./styled";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Facebook, Linkedin, Twitter } from "../../../icons";
import { useTheme } from "styled-components";

const Share = ({ slug, quote, title }) => {
  const { colors } = useTheme();
  const url = `https://www.mhelena.com.br/blog/${slug}`;
  return (
    <Styled.Wrapper>
      <Styled.Title>Share</Styled.Title>
      <TwitterShareButton url={url} title={title}>
        <Twitter color={colors.cyan} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={quote}>
        <Facebook color={colors.cyan} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} summary={quote}>
        <Linkedin color={colors.cyan} />
      </LinkedinShareButton>
    </Styled.Wrapper>
  );
};

export default Share;
