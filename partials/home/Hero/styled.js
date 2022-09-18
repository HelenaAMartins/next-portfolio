import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-image: url("/images/bg_dev.jpg");
  background-color: black;
  background-size: cover;
`;
export const HeroInfoWrapper = styled.div`
  padding: 180px 0 180px 110px;
  max-width: 790px;
  color: ${({ theme }) => theme.colors.offWhite};
`;
export const HeroSpan = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.orange};
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 9rem;
  font-weight: 600;
`;

export const Role = styled.h2`
  font-size: 5rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;
