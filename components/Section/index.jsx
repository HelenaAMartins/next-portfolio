import Container from "../Container";
import * as Styled from "./styled";

const Section = ({ children, light }) => (
  <Styled.Section light={light}>
    <Container>{children}</Container>
  </Styled.Section>
);

export default Section;
