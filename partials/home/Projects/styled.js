import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Projects = styled.section`
  padding: 100px 0;
  position: relative;
  &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.bgLight};
    position: absolute;
    width: 100%;
    height: 55%;

    bottom: 0;
  }

  > div {
    position: relative;
  }

  @media ${device.tabletL} {
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
