import React from 'react'
import styled from 'styled-components'
import {Box} from 'rebass'

const StyledInput = styled(Box).attrs(() => ({
  as:'input',
  placeholder:'Search Shows'
}))`
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
  padding: 8px;
  border-radius: 4px 0px 0px 4px;
  border: none;
  width: 100%;
  border: .5px solid #ccc;

  ::placeholder {
    color: ${props => props.theme.colors.light};
  }

  &:focus {
    box-shadow: 0px 2px 4px rgba(0,0,0,.2);
    outline: none;
  }

  @media screen and (min-width: 40em) {
    font-size: 20px;
    padding: 12px;
  }
`

const Input = () => {

  return (
    <StyledInput />
  )
}

export default Input