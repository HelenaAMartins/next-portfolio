import styled from "styled-components";
import Button from "../Button";

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
`;
export const TextArea = styled.textarea`
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
`;
export const Submit = styled(Button)``;

export const SubmitMessageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SubmitMessage = styled.div`
  background-color: ${({ hasError, theme }) =>
    hasError ? theme.colors.danger : theme.colors.success};
  border-radius: 5px;
  color: ${({ hasError, theme }) =>
    hasError ? theme.colors.offWhite : theme.colors.black};
  margin-top: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 10px 20px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  transition: all 0.5s;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(15px)"};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;
