import styled from "styled-components";


export const ExperienceWrapper = styled.div`
background-color: ${({theme}) => theme.colors.bgLight};
display: grid;
grid-gap: 60px;
align-items: center;
justify-content: flex-start;
grid-template-columns: 300px 150px auto;
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
`

export const Date = styled.h4`
color: ${({theme}) => theme.colors.offWhite};
font-weight: bold;
text-align: center;
font-size: 3rem;
`

export const Figure = styled.figure`
  border-radius: ${({ round }) => (round ? "50%" : "0")};
  height: ${({height}) => `${height}px` || 'auto'};
  overflow: hidden;
  width: ${({width}) => `${width}px` || 'auto'};

  background-color: red;
`;

export const RolePlaceWrapper = styled.div`
display: flex;
flex-direction: column;

` 
export const Role = styled.h4`

font-size: 3rem;
font-weight: bold;

` 

export const Place = styled.p`
color: ${({theme}) => theme.colors.highlight};
` 
