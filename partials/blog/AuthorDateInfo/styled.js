import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Figure = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.tertiary};
  padding-left: 1rem;
`;

export const Author = styled.h4``;

export const DateTime = styled.span`
  font-size: 1.2rem;
  padding-right: 0.8rem;
`;
