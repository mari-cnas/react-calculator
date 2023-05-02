import { Container } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  background-color: black;
  border-radius: 1em;
  margin-top: 1em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: end;
    padding-right: 0.5em;
    font-size: 3.5em;
    margin: 0;
  }
`

export const Btn = styled.button`
  width: 3.5em;
  height: 3.5em;
  font-size: 1.5em;
  border: none;
  border-radius: 2em;
  margin: 0.3em;
  background-color: #505050;
  color: white;

  :hover {
    cursor: pointer;
  }

  :nth-child(4n) {
    background-color: #ff9500;
    color: white;
  }

  :nth-child(-n + 3) {
    background-color: #d4d4d2;
    color: black;
  }

  :nth-last-child(-n + 2) {
    background-color: black;
    color: black;
  }

  :last-child {
    background-color: #ff9500;
    color: white;
  }
`
