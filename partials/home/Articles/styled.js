import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Articles = styled.section`
  padding: 100px 0;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.colors.bgLight};
    bottom: 0;
    content: "";
    height: 50%;
    position: absolute;
    width: 100%;
  }

  > div {
    position: relative;
  }

  @media ${device.desktop} {
    height: 60%;
  }
`;

export const Wrapper = styled.div`
  .slick-track {
    display: flex !important;
    grid-gap: 20px;
  }

  .slick-slide {
    display: flex;
    height: inherit !important;

    & > div {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
`;

export const ViewAllButton = styled.a``;
