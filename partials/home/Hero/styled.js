import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const HeroWrapper = styled.div`
  background-image: url("/images/bg_dev.jpg");
  background-color: black;
  background-size: cover;
`;
export const HeroInfoWrapper = styled.div`
  padding: 50px 0 50px 15px;
  max-width: 790px;
  color: ${({ theme }) => theme.colors.offWhite};
  
  @media ${device.tabletL}{
    padding: 180px 0 180px 110px;
  }
`;
export const HeroSpan = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 2rem;
  
  @media ${device.tabletL}{
    font-size: 3rem;
    
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 5rem;
  font-weight: 600;

  @media ${device.tabletL}{
    font-size: 9rem;
    
  }
`;

export const Role = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  @media ${device.tabletL}{
    font-size: 5rem;
    
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media ${device.tabletL}{
    font-size: 2rem;
    
  }
`;
