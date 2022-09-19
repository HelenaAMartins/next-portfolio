import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  opacity: ${({ isOpened }) => (isOpened ? "1" : "0")};
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  transition: all 0.5s;
`;

export const ModalBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.75;
`;

export const Modal = styled.div`
  position: absolute;
  top: ${({ isOpened }) => (isOpened ? "50%" : "60%")};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 700px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.bg};
  z-index: 7;
  transition: all 0.5s;
  border: 1px solid ${({ theme }) => theme.colors.bgLight};
  border-radius: 0 0 8px 8px;
`;

export const ModalBar = styled.div`
  width: 100%;
  display: flex;
  grid-gap: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color, theme }) => theme.colors[color]};
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
export const Message = styled.p`
  color: ${({ theme }) => theme.colors.success};
  position: relative;
  padding: 40px 0;

  span {
    color: ${({ theme }) => theme.colors.warning};

  }

  &::after {
    content: "choose in which language you'd like it to be";
    color: ${({ theme }) => theme.colors.offWhite};
    padding-left: 5px;
  }
`;
export const ButtonWrapper = styled.div`
grid-gap: 20px;
display: flex;
`;
