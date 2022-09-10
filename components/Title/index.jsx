import * as Styled from "./styled";

const Title = ({ title, subtitle, textColor, as, align }) => (
  <Styled.Wrapper align={align} textColor={textColor}>
    <Styled.Title as={as} >
      {title}
    </Styled.Title>
    <Styled.Subtitle>{subtitle}</Styled.Subtitle>
  </Styled.Wrapper>
);

export default Title;
