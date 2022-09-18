import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: ${({light}) => light ? ({theme}) => theme.colors.bgLight : 'transparent'};
  padding:100px 0;
`;
