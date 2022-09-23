import * as Styled from "./styled";
import { store } from "../../store";
import Button from "../Button";

const Modal = () => {
  const { modal, openModal } = store();
  return (
    <Styled.ModalWrapper isOpened={modal}>
      <Styled.ModalBg onClick={() => openModal()} />
      <Styled.Modal isOpened={modal}>
        <Styled.ModalBar>
          <Styled.Circle color="danger" />
          <Styled.Circle color="warning" />
          <Styled.Circle color="success" />
        </Styled.ModalBar>
        <Styled.Body>
          <Styled.Message>root@127.0.0.1 <span>~</span></Styled.Message>
          <Styled.ButtonWrapper>
            <a href="helena-martins-cv.pdf" download><Button small>Português</Button></a>
            <a href="helena-martins-resume.pdf" download><Button small>English</Button></a>
          </Styled.ButtonWrapper>
        </Styled.Body>
      </Styled.Modal>
    </Styled.ModalWrapper>
  );
};

export default Modal;
