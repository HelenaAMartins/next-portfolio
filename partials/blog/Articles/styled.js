import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Articles = styled.section`
  padding: 100px 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
