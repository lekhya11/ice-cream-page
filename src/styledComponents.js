import styled from 'styled-components'

export const Heading = styled.h1`
  color: lightblue;
  font-size: 30px;
  font-family: 'Roboto';
  font-style: italic;
`
export const CustomButton = styled.button`
  padding: 10px;
  font-size: 15px;
  color: ${props => (props.outLine ? '#0070c1' : '#ffffff')};
  border-radius: 6px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outLine ? '#ffffff' : '#0070c1')};
  margin: 20px;
`
