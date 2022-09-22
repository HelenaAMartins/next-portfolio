import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Carousel = styled.div`
  .slick-dots {
    bottom: -65px;

    li button::before {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.2rem;
    }
  }
`;

export const ArrowWrapper = styled.button`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.cyan};
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  opacity: 0.85;
  z-index: 5;
  top: 35%;

  

  &.slick-prev{
    left: -5%;

    
  }

  &.slick-next{
    right: -5%;

    
  }

  &::before {
    display: none;
  }

  &:hover,
  &:focus {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.cyan};
  }

 
`;
