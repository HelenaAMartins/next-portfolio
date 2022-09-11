import styled from "styled-components";
import { colors } from "../../styles/variables";

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  background-color: ${colors.white};
  border: 1px solid ${colors.purple};
  border-radius: 10px;
 
  `;

export const SocialLink = styled.a`
height: 35px;
width: 35px;
display: flex;
align-items: center;
justify-content: center;
`;
