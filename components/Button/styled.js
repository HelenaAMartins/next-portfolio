import styled, { css } from "styled-components";

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

  text-align: center;
  border-radius: 45px;
  font-size: ${({ small }) => (small ? "1.5rem" : "2rem")};
  font-weight: 300;
  font-family: ${({ theme }) => theme.fontFamily};
  padding: ${({ small }) => (small ? "10px 20px" : "10px 25px")};
  min-width: 120px;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "")};
  cursor: pointer;
  transition: all 0.5s;
`;
