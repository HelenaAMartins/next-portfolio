import Button from "../../../components/Button";
import ExperienceCard from "../../../components/ExperienceCard";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import * as Styled from "./styled";
import { store } from "../../../store";

const Experiences = ({ align, exps }) => {
  const { openModal } = store();
  return (
    <Section id="experience">
      <Title
        title="Experience"
        subtitle="/* Download my resume for complete experiences list. */"
      />
      <Styled.Wrapper>
        {exps.map((item, id) => (
          <ExperienceCard data={item} key={`company-${id}`} />
        ))}
      </Styled.Wrapper>
      <Styled.ButtonWrapper align={align}>
        <Button variant="dark" onClick={() => openModal()}>
          Download Resume
        </Button>
        <Styled.ButtonSubtitle>To see all experiences</Styled.ButtonSubtitle>
      </Styled.ButtonWrapper>
    </Section>
  );
};

export default Experiences;
