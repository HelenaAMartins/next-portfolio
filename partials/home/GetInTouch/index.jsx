import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Section from "../../../components/Section";
import TextArea from "../../../components/TextArea";
import Title from "../../../components/Title";
import * as Styled from "./styled";

const GetInTouch = () => (
  <Section light>
    <Title title="Get in touch!" subtitle="I'm always open to discussing about development or partnerships." white/>
    <Styled.FormWrapper>
      <Styled.Form>
        <Input placeholder="Name" type="text" />
        <Input placeholder="Email" type="email" />
        <TextArea rows="10" placeholder="What you want to say..." />
        <Button small>Submit</Button>
      </Styled.Form>
    </Styled.FormWrapper>
  </Section>
);

export default GetInTouch;
