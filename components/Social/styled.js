import styled from "styled-components";
import { colors } from "../../styles/variables";

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
  height: 50px;
  width: 50px;
  background-color: ${colors.grey};
  border-radius: 50%;
`;

export const SocialLink = styled.a``;
