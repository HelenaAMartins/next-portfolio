import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "center"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  color: ${({ white }) => white ? ({theme}) => theme.colors.white : ({theme}) => theme.colors.secondary};
  `;

export const Title = styled.h1`
  color: inherit;
  font-weight: 300;
  font-size: 8rem;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "const";
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.primary};
    transform:rotate(270deg) ;
    position: absolute;
    left: 0;
    top: 50%;
  }
  `;

export const Subtitle = styled.p`
  color: inherit;
  font-size: 2.2rem;
  font-weight: 300;
  max-width: 450px;
  margin: 40px 0 60px 0;
  color: ${({theme}) => theme.colors.tertiary}
`;
