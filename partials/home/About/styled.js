import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 250px 1fr;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 550px 1fr;
  }
`;

export const Figure = styled.figure`
  margin-bottom: 50px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.3rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0;
  }
`;

export const SocialWrapper = styled.div`
  margin-top: 25px;
  padding-top: 50px;
  position: relative;
  width: 130px;

  &:before {
    background-color: ${colors.yellow};
    content: "";
    height: 4px;
    margin: 20px 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
