import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Articles = styled.section`
  padding-bottom: 50px;

  @media ${device.tabletL} {
    padding: 100px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;

  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
