import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ light }) =>
    light ? ({ theme }) => theme.colors.bgLight : "transparent"};
  padding: 100px 0;
  width: 100%;
`;
