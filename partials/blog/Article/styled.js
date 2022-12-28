import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Article = styled.section`
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const GridInfo = styled.div`
  display: grid;
  align-items: flex-end;

  @media ${device.tabletL} {
    grid-gap: 3rem;
    grid-template-columns: 70% auto;
  }
`;

export const WrapperTitle = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.cyan};
  font-weight: 70rem;
  margin-bottom: 3rem;
  font-size: 4.5rem;
  line-height: 6.1rem;
`;

export const GridTextCategories = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media ${device.tabletL} {
    padding: 3rem 0;
    grid-template-columns: 65% auto;
  }
`;

export const Wysiwyg = styled.div`
  color: ${({ theme }) => theme.colors.offWhite};

  img {
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
  }

  legend {
    font-size: 1.2rem;
  }

  p {
    line-height: 2.8rem;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3 {
    margin: 3rem 0;
  }

  h1 {
    font-weight: 700;
    font-size: 55px;
    line-height: 61px;
  }

  h2 {
    font-weight: 700;
    font-size: 45px;
    line-height: 61px;
  }

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }

  h4 {
    font-size: 24px;
    line-height: 33px;
  }

  iframe {
    width: 100%;
  }

  ul {
    margin: 2rem 0;
  }

  li {
    list-style: circle;
    padding-bottom: 1rem;
  }

  a {
    text-decoration: underline;
  }

  code {
    background-color: black;
    color: ${({ theme }) => theme.colors.highlight};
  }

  pre code {
    white-space: pre-wrap;
  }

  pre {
    background-color: black;
    padding: 35px 15px 15px;
    border-radius: 0.3em;
    margin-bottom: 2rem;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 2rem;
      position: absolute;
      top: 0;
      background-color: ${({ theme }) => theme.colors.offWhite};
      left: 0;
    }
  }
`;

export const SideBar = styled.aside`
  @media ${device.tabletL} {
    margin-left: 16px;
  }
`;

export const CatWrapper = styled.div`
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.bgLight};
`;

export const CatHeader = styled.h5`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 2rem;
  position: relative;
  margin-bottom: 40px;

  &::before {
    position: absolute;
    height: 3px;
    width: 50px;
    content: "";
    bottom: -10px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.cyan};
  }
`;

export const CatItem = styled.h3`
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.cyan};
  border-radius: 16px;
  display: flex;
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.cyan};
`;

export const Credits = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  width: 100%;

  svg {
  }

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 100;
  }
`;
