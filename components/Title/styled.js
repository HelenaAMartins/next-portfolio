import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  color: ${({ white, theme }) =>
    white ? theme.colors.white : theme.colors.secondary};
`;

export const Title = styled.h1`
  color: inherit;
  font-weight: 300;
  font-size: 4rem;
  position: relative;
  padding-left: 15px;

  @media ${device.tabletL}{
    font-size: 8rem;
  padding-left: 30px;

  }

  &::before {
    content: "const";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(270deg);
    position: absolute;
    left: -7px;
    top: 38%;

    @media ${device.tabletL}{
    font-size: 1.5rem;
    left: 0;
    top: 50%;
  }

  }
`;

export const Subtitle = styled.p`
  color: inherit;
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 450px;
  margin: 20px 0 45px 0;
  color: ${({ theme }) => theme.colors.tertiary};

  @media ${device.tabletL}{
    font-size: 2.2rem;
    margin: 40px 0 60px 0;
  }
`;
