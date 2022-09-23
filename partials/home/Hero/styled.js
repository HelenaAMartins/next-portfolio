import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const HeroWrapper = styled.div`
  background-color: black;
  background-image: url("/images/bg_hero.jpg");
  background-size: cover;
  position: relative;

  &::before {
    background: ${({theme}) => theme.colors.black} ;
    background: ${({theme}) => theme.colors.bgGradient} ;
    content: "";
    height: 100%;
    opacity: 0.8;
    position: absolute;
    width: 100%;
  }
`;

export const HeroInfoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.offWhite};
  max-width: 790px;
  padding: 50px 0 50px 15px;
  position: relative;

  @media ${device.tabletL} {
    padding: 180px 0 180px 110px;
  }
`;

export const HeroSpan = styled.span`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 2rem;

  @media ${device.tabletL} {
    font-size: 3rem;
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 5rem;
  font-weight: 600;

  @media ${device.tabletL} {
    font-size: 9rem;
  }
`;

export const Role = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  @media ${device.tabletL} {
    font-size: 5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media ${device.tabletL} {
    font-size: 2rem;
  }
`;
