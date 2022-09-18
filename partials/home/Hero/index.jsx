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
          I'm a Brazilian front-end developer junior. I am taking courses at
          Alura, Faculdade iv2 and other institutions in order to develop my
          skills. My main skills are HTML5, CSS3 and Javascript.
        </Styled.Description>
        </Styled.HeroInfoWrapper>
      </Container>
    </Styled.HeroWrapper>
  );
};

export default Hero;
