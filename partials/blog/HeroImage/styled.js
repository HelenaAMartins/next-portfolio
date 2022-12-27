import styled from "styled-components";

export const Hero = styled.div`
  height: 450px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;

  & > span {
    height: 100% !important;
    img {
      object-fit: cover;
    }
  }
`;
