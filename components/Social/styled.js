import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  border: 1px solid ${({theme}) => theme.colors.warning};
  border-radius: 10px;
 
  `;

export const SocialLink = styled.a`
height: 35px;
width: 35px;
display: flex;
align-items: center;
justify-content: center;
`;
