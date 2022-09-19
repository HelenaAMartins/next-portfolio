import Container from "../../../components/Container";
import * as Styled from "./styled";

const Hero = () => {
  return (
    <Styled.HeroWrapper>
      <Container>
        <Styled.HeroInfoWrapper>
          <Styled.HeroSpan>Hi, I'm</Styled.HeroSpan>
          <Styled.HeroTitle>Helena Martins</Styled.HeroTitle>
          <Styled.Role>Junior Front-end Developer</Styled.Role>
        <Styled.Description>
          Welcome to my portfolio. I'm a front-end developer, focused on React and Vue.
        </Styled.Description>
        </Styled.HeroInfoWrapper>
      </Container>
    </Styled.HeroWrapper>
  );
};

export default Hero;
