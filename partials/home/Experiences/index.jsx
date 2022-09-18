import Button from "../../../components/Button";
import ExperienceCard from "../../../components/ExperienceCard";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import companies from './data.json';
import * as Styled from "./styled";

const Experiences = ({ align }) => (
  <Section>
    <Title
      title="My Experiences"
      subtitle="I'm always open to discussing about development or partnerships."
    />
    <Styled.Wrapper>
    {companies.map(( item, id ) => (
      <ExperienceCard data={item} key={`company-${id}`}/>
    ))}
    </Styled.Wrapper>
    <Styled.ButtonWrapper align={align}>
    <Button variant="dark">Download Resume</Button>
    <Styled.ButtonSubtitle>To see all experiences</Styled.ButtonSubtitle>
    </Styled.ButtonWrapper>
  </Section>
);

export default Experiences;
