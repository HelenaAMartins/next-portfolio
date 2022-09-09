import Container from "../Container";
import * as Styled from "./styled";

const Section = ({ children, bgColor }) => (
  <Styled.Section bgColor={bgColor}>
    <Container>{children}</Container>
  </Styled.Section>
);

export default Section;
