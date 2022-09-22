import * as Styled from "./styled";

const Title = ({ title, subtitle, as, textAlign, align }) => (
  <Styled.Wrapper textAlign={textAlign} align={align}>
    <Styled.Title as={as}>
      {title}
    </Styled.Title>
    <Styled.Subtitle>{subtitle}</Styled.Subtitle>
  </Styled.Wrapper>
);

export default Title;
