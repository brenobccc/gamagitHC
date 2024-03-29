import styled from 'styled-components';

export const HomeContainer = styled.div`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  
`


export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0  .5rem;
  border-radius: .25rem 0 0 .25rem; 

  &:focus, &:active{
    outline: none;
    box-shadow: none;
  }
`


export const Button = styled.button`
  height: 1.5rem;
  border:   1px solid #000;
  background: #000;
  color: white;
  border-radius: 0 0.25rem 0.25rem 0; 

  &:focus, &:active{
    outline: none;
    box-shadow: none;
  }
`



export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;  
`
