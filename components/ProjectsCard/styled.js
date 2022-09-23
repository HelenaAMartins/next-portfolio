import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ProjectWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;

  & > span {
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;

  @media ${device.tabletL} {
    padding: 0 20px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 600;
  padding: 20px 0;

  @media ${device.tabletL} {
    font-size: 2.5rem;
  }
  @media ${device.desktop} {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0 10%;
  text-align: center;

  @media ${device.tabletL} {
    font-size: 1.5rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  margin-top: 30px;
  max-width: 250px;
  width: 100%;
`;
