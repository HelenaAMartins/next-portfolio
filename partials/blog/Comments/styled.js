import styled from "styled-components";

export const CommentsWrapper = styled.div`
  padding: 50px 0;
`;

export const Title = styled.h4`
  font-size: 4.5rem;
  padding: 20px 0;
  position: relative;
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 300;

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.offWhite};
    position: absolute;
  }
`;
