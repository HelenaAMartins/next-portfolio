import styled from "styled-components";

export const Hero = styled.div`
  height: 450px;
  width: 100%;
  overflow: hidden;
  position: relative;

  & > span {
    height: 100% !important;
    img {
      object-fit: cover;
    }
  }
`;
