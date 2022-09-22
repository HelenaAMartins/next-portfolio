import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100%;
  left: 0;
  opacity: ${({ isOpened }) => (isOpened ? "1" : "0")};
  position: fixed;
  top: 0;
  transition: all 0.5s;
  visibility: ${({ isOpened }) => (isOpened ? "visible" : "hidden")};
  width: 100%;
  z-index: 6;
`;

export const ModalBg = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 0 0 8px 8px;
  border: 1px solid ${({ theme }) => theme.colors.bgLight};
  height: 300px;
  left: 50%;
  max-width: 700px;
  position: absolute;
  top: ${({ isOpened }) => (isOpened ? "50%" : "60%")};
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  width: 90%;
  z-index: 7;
`;

export const ModalBar = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  grid-gap: 5px;
  padding: 10px;
  width: 100%;
`;

export const Circle = styled.span`
  background-color: ${({ color, theme }) => theme.colors[color]};
  border-radius: 50%;
  height: 10px;
  width: 10px;
`;
export const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;
export const Message = styled.p`
  color: ${({ theme }) => theme.colors.success};
  padding: 40px 0;
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.warning};
  }

  &::after {
    color: ${({ theme }) => theme.colors.offWhite};
    content: "choose in which language you'd like it to be";
    padding-left: 5px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  grid-gap: 20px;
`;
