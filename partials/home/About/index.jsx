import Image from "../../../components/Image";
import Section from "../../../components/Section";
import Social from "../../../components/Social";
import * as Styled from "./styled";
import image from "../../../images/img-about.png";

const About = () => (
  <Section>
    <Styled.Grid>
      <Styled.Figure>

      <Image src={image} width="100" height="100" layout="responsive" />
      </Styled.Figure>
      <Styled.TextDiv>
        <Styled.Text>
          I’m a Brazilian front-end developer junior. <br/><br/>
          I’m working as Front-end at Magna Sistemas and taking courses at Alura, Udemy, Faculdade iv2
          and other institutions in order to improve my skills.<br/><br/> My main skills
          are HTML5, CSS3, Javascript and React. I’m also familiar with Vue.js.<br/><br/>
          <strong>Languages:</strong><br/><br/> Brazilian Portuguese (Native)<br/> English (Advanced/C1)
        </Styled.Text>
        <Styled.SocialWrapper>
          <Social />
        </Styled.SocialWrapper>
      </Styled.TextDiv>
    </Styled.Grid>
  </Section>
);

export default About;
