import Button from "../Button";
import Menu from "../Menu";
import Container from "../Container";

import * as Styled from "./styled";

const MainNav = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>

        <Menu />
        <Button variant="dark" small uppercase>Download Resume</Button>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Header>
  );
};

export default MainNav;
