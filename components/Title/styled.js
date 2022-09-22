import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
  align-items: ${({ align }) => align || "center"};
  color: ${({ white, theme }) =>
    white ? theme.colors.white : theme.colors.secondary};
  display: flex;
  flex-direction: column;
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const Title = styled.h1`
  color: inherit;
  font-size: 4rem;
  font-weight: 300;
  padding-left: 15px;
  position: relative;

  @media ${device.tabletL} {
    font-size: 8rem;
    padding-left: 30px;
  }

  &::before {
    color: ${({ theme }) => theme.colors.primary};
    content: "const";
    font-size: 1rem;
    left: -7px;
    position: absolute;
    top: 38%;
    transform: rotate(270deg);

    @media ${device.tabletL} {
      font-size: 1.5rem;
      left: 0;
      top: 50%;
    }
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  color: inherit;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 20px 0 45px 0;
  max-width: 450px;

  @media ${device.tabletL} {
    font-size: 2.2rem;
    margin: 40px 0 60px 0;
  }
`;
