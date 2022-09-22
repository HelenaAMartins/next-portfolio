import Form from "../../../components/Form";
import Section from "../../../components/Section";
import Title from "../../../components/Title";
import * as Styled from "./styled";

const GetInTouch = () => {
  return (
    <Section light id="contact">
      <Title
        title="Get in touch!"
        subtitle="/* I'm always open to discussing about development or partnerships. */"
      />
      <Styled.FormWrapper>
        <Form />
      </Styled.FormWrapper>
    </Section>
  );
};

export default GetInTouch;
