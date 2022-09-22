import Container from "../Container";
import * as Styled from "./styled";

const Section = ({ children, light, id }) => (
  <Styled.Section light={light} id={id}>
    <Container>{children}</Container>
  </Styled.Section>
);

export default Section;
