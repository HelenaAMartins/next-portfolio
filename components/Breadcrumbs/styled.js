import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 1rem 0;
  display: none;

  @media ${device.tabletL} {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  grid-gap: 2rem;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.tertiary};

  a {
    position: relative;
    padding-right: 10px;

    &:after {
      content: "›";
      position: absolute;
      top: 5px;
      right: -10px;
      width: 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  a,
  span {
    display: inline-block;
    font-size: 14px;
    line-height: 19px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
export const Name = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
