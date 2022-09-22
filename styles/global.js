import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    -webkit-font-smoothing: antialiased;
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: geometricPrecision;
  }
  html {
    font-size: 10px;
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }
  body, input, button{
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: ${({ theme }) => theme.colors.bg};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 700;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
   color: inherit;
  }
  li {
    list-style: none;
  }
`;
