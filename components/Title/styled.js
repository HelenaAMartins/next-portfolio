import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ textColor }) => textColor || "#000"};
  text-align: ${({ align }) => align || "center"};
`;

export const Title = styled.h1`
  color: inherit;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: inherit;
`;
