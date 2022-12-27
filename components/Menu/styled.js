import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MenuList = styled.ul`
  display: none;

  @media ${device.tabletL} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    width: 380px;
  }

  @media ${device.desktop} {
    width: 450px;
  }
`;

export const MenuItem = styled.li`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const MenuLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  transition: all 0.5s;
  cursor: pointer;

  &:visited,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }

  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
