import Button from "../../../components/Button";
import ExperienceCard from "../../../components/ExperienceCard";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import companies from "./data.json";
import * as Styled from "./styled";
import { store } from "../../../store";

const Experiences = ({ align }) => {
  const { openModal } = store();
  return (
    <Section>
      <Title
        title="Experience"
        subtitle="/* Download my resume for complete experiences list. */"
      />
      <Styled.Wrapper>
        {companies.map((item, id) => (
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
