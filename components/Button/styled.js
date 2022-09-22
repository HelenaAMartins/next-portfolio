import styled, { css } from "styled-components";
import { device } from "../../styles/breakpoints";

const buttonLight = css`
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.button.color};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;

const buttonDark = css`
  background-color: ${({ theme }) => theme.colors.buttonDark.default};
  color: ${({ theme }) => theme.colors.buttonDark.color};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonDark.hover};
  }
`;

export const Button = styled.button`
  ${({ dark }) => (dark ? buttonDark : buttonLight)}
  border-radius: 45px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ small }) => (small ? "1.5rem" : "2rem")};
  font-weight: 300;
  min-width: 120px;
  padding: ${({ small }) => (small ? "10px 20px" : "10px 25px")};
  text-align: center;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
  transition: all 0.5s;
`;
