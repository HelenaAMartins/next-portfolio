import styled from "styled-components";
import Button from "../Button";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const Input = styled.input`
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`;
export const TextArea = styled.textarea`
  border-radius: 5px;
  padding: 15px 20px;
  width: 100%;
  margin-bottom: 20px;
`;
export const Submit = styled(Button)``;

export const SubmitMessageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SubmitMessage = styled.div`
  background-color: ${({ hasError, theme }) =>
    hasError ? theme.colors.danger : theme.colors.success};
  color: ${({ hasError, theme }) =>
    hasError ? theme.colors.offWhite : theme.colors.black};
  padding: 10px 20px;
  position: absolute;
  width: 100%;
  top: 0;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: all .5s;
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(15px)")}
`;
