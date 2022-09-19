import styled from "styled-components";

export const ProjectWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Figure = styled.figure`
  height: 350px;
  position: relative;
  width: 100% ;

  &>span {
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  justify-content: flex-start;
  height: 100%;
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
  text-align: center;
  padding: 0 10%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
  max-width: 250px;
  margin-top: 30px;
`;
