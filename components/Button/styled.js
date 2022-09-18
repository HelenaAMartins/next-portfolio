import styled from "styled-components";


export const ButtonDark = styled.button`
  background-color: ${({theme}) => theme.colors.button.default};
  border-radius: 45px;
  color: ${({theme}) => theme.colors.button.color};
  font-size: ${({ small }) => small ? '1.5rem' : "2rem"};
  font-weight: 300;
  font-family: ${({theme}) => theme.fontFamily};
  padding: ${({ small }) => small ? '10px 20px' : "10px 25px"};
  min-width: 120px;
  text-transform: ${({uppercase}) => uppercase ? 'uppercase' : ''};
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background-color: ${({theme}) => theme.colors.button.hover};
  }
`;

export const ButtonLight = styled.button`
  background-color:${({theme}) => theme.colors.buttonDark.default};
  border-radius: 45px;
  color: ${({theme}) => theme.colors.buttonDark.color};
  font-size: ${({ small }) => small ? '1.5rem' : "2rem"};
  font-weight: ${({ weight }) => weight};
  font-family: ${({theme}) => theme.fontFamily};
  padding: ${({ small }) => small ? '10px 20px' : "10px 25px"};
  cursor: pointer;
  transition: all .5s;

&:hover{
  background-color: ${({theme}) => theme.colors.buttonDark.hover};
}
`;

export const ButtonOutlined = styled.button`
  background-color:transparent;
  border: 3px solid ${({theme}) => theme.colors.darkBlue};
  border-radius: 45px;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({ small }) => small ? '1.5rem' : "2rem"};
  font-weight: ${({ weight }) => weight};
  font-family: ${({theme}) => theme.fontFamily};
  padding: ${({ small }) => small ? '10px 20px' : "10px 25px"};
  cursor: pointer;
`;
