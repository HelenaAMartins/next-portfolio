import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const BlogWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  background-color: #53576a;
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;

  & > a span {
    border-radius: 16px;
    height: 100%;
    overflow: hidden;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.cyan};
  font-size: 2rem;
  line-height: 2.7rem;
  font-weight: 600;
  padding: 20px 0;
`;

export const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.4rem;
  font-weight: 300;
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
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const SmallInfoWrapper = styled.div`
  margin-top: 20px;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  width: 100%;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 100;
`;

export const ReadTime = styled.span`
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 100;
  text-align: end;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 100;
  text-align: start;
  font-size: 1.4rem;
`;
