import styled from "styled-components";

export const ProjectWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Figure = styled.figure`
  height: ${({ height }) => `${height}px` || "auto"};
  width: ${({ width }) => `${width}px` || "auto"};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  `;

export const Title = styled.h3`
color: ${({ theme }) => theme.colors.primary};
font-size: 3rem;
font-weight: 600;
padding: 20px 0;

`;

export const Description = styled.p`
color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.5rem;
  font-weight: 300;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
  max-width: 250px;
  margin-top: 30px;
`;
