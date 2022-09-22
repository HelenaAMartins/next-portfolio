import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ProjectWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Figure = styled.figure`
  height: 235px;
  position: relative;
  width: 100% ;

  &>span {
    height: 100%;
  }

  @media ${device.tabletL} {
    height: 350px;


  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  
  @media ${device.tabletL} {
    padding: 0 20px;

  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 20px 0;
  font-size: 2rem;
  
  @media ${device.tabletL} {
    font-size: 3rem;

  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  padding: 0 10%;

  @media ${device.tabletL} {
    font-size: 1.5rem;


  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
  max-width: 250px;
  margin-top: 30px;
`;
