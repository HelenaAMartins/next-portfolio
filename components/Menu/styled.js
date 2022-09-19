import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 500px;

`;

export const MenuItem = styled.li`
text-transform: uppercase;
`;

export const MenuLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  transition: all .5s;

  &:visited,
  &:hover{
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }

  &:active {
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  }
`;
