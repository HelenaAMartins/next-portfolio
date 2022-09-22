import Button from "../Button";
import Menu from "../Menu";
import Container from "../Container";

import * as Styled from "./styled";
import { store } from "../../store";
import { Logo } from "../../icons";

const MainNav = () => {
  const { openModal } = store();
  return (
    <Styled.Header>
      <Container>
        <Styled.HeaderWrapper>
          <Logo />
          <Menu />
          <Button small uppercase onClick={() => openModal()}>
            Download CV
          </Button>
        </Styled.HeaderWrapper>
      </Container>
    </Styled.Header>
  );
};

export default MainNav;
