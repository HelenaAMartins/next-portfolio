import styled from "styled-components"

export const Wrapper = styled.div`
margin-top: 30px;
`

export const ButtonWrapper = styled.div`
align-items: ${({align}) => align || 'center'};
display: flex;
justify-content: center;
flex-direction: column;
`

export const ButtonSubtitle = styled.span`
font-size: 1.6rem;
font-weight: 200;
margin-top: 20px;
color: ${({theme}) => theme.colors.offWhite};
`
