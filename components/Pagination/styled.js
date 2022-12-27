import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Wrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  justify-content: center;
`;

export const PageList = styled(ReactPaginate)`
  display: flex;
  grid-gap: 1rem;

  li {
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.buttonDark.default};
    color: ${({ theme }) => theme.colors.buttonDark.color};
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 0.8rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonDark.hover};
    }
    &.selected {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
