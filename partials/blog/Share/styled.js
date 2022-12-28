import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 80px;
  justify-content: flex-start;
  grid-gap: 1rem;

  @media ${device.tabletL} {
    padding-left: 40px;
    justify-content: flex-end;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  padding-right: 1rem;
`;
