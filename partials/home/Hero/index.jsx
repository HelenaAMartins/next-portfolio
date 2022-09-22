import Container from "../../../components/Container";
import * as Styled from "./styled";

const Hero = () => {
  return (
    <Styled.HeroWrapper>
      <Container>
        <Styled.HeroInfoWrapper>
          <Styled.HeroSpan>Hi, I'm</Styled.HeroSpan>
          <Styled.HeroTitle>Lena Tins</Styled.HeroTitle>
          <Styled.Role>Junior Front-end Developer</Styled.Role>
        <Styled.Description>
          I'm Helena Martins, front-end developer based in São Paulo, Brazil, focused on React and Vue.
        </Styled.Description>
        </Styled.HeroInfoWrapper>
      </Container>
    </Styled.HeroWrapper>
  );
};

export default Hero;
