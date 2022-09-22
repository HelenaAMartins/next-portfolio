import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const ExperienceWrapper = styled.div`
background-color: ${({theme}) => theme.colors.bgLight};
display: flex;
flex-direction: column-reverse;
grid-gap: 30px;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 30px;
padding: 25px 30px;
border-radius: 5px;
transition: all .5s;
border: 1px solid ${({theme}) => theme.colors.bgLight};
color: ${({theme}) => theme.colors.white};

:hover {
  border: 1px solid ${({theme}) => theme.colors.tertiary};
}

@media ${device.tabletL}{
  grid-template-columns: 165px 85px auto;
  display: grid;
  grid-gap: 60px;
  }
/* @media ${device.tabletL}{
  grid-template-columns: 300px 150px auto;
  
  } */
`

export const Date = styled.h4`
color: ${({theme}) => theme.colors.offWhite};
font-weight: bold;
text-align: center;
font-size: 2rem;

@media ${device.tabletL}{
  font-size: 2rem;
  }
/* @media ${device.tabletL}{
  font-size: 3rem;
  } */
`

export const Figure = styled.figure`
  border-radius: ${({ round }) => (round ? "50%" : "0")};
  height: ${({height}) => `${height}px` || 'auto'};
  overflow: hidden;
  width: ${({width}) => `${width}px` || 'auto'};
`;

export const RolePlaceWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: center;

@media ${device.tabletL}{
  text-align: start;
  }

` 
export const Role = styled.h4`

font-size: 2rem;
font-weight: bold;

@media ${device.tabletL}{
  font-size: 2.5rem;
  }
/* @media ${device.tabletL}{
  font-size: 3rem;
  } */

` 

export const Place = styled.p`
color: ${({theme}) => theme.colors.highlight};
` 
