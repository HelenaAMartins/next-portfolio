import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ExperienceWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column-reverse;
  grid-gap: 30px;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding: 25px 30px;
  transition: all 0.5s;
  width: 100%;

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  @media ${device.tabletL} {
    display: grid;
    grid-gap: 60px;
    grid-template-columns: 165px 85px auto;
  }
`;

export const Date = styled.h4`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  @media ${device.tabletL} {
    font-size: 2rem;
  }
`;

export const Figure = styled.figure`
  border-radius: ${({ round }) => (round ? "50%" : "0")};
  height: ${({ height }) => `${height}px` || "auto"};
  overflow: hidden;
  width: ${({ width }) => `${width}px` || "auto"};
`;

export const RolePlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${device.tabletL} {
    text-align: start;
  }
`;
export const Role = styled.h4`
  font-size: 2rem;
  font-weight: bold;

  @media ${device.tabletL} {
    font-size: 2.5rem;
  }
`;

export const Place = styled.p`
  color: ${({ theme }) => theme.colors.highlight};
`;
