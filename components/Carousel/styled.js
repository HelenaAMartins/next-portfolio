import styled from "styled-components";

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
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cyan};
  border-radius: 50%;
  display: flex;
  height: 30px;
  justify-content: center;
  opacity: 0.85;
  overflow: hidden;
  top: 35%;
  width: 30px;
  z-index: 5;

  &.slick-prev {
    left: -5%;
  }

  &.slick-next {
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
