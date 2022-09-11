import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --font-default: 'Poppins', sans-serif;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
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
    font-family: var(--font-default);
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
`