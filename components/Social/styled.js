import styled from "styled-components";

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: 10px;
`;

export const SocialLink = styled.a`
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: center;
  width: 35px;
`;
