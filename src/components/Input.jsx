import React from 'react'
import styled from 'styled-components'
import {Box} from 'rebass'

const StyledInput = styled(Box).attrs(() => ({
  as:'input',
  placeholder:'Search your movie'
}))`
  height: 20px;
  font-size: 20px;
  color: ${props => props.theme.colors.dark};
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  border: none;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.light};
  }

  &:focus {
    box-shadow: 0px 2px 4px rgba(0,0,0,.2);
    outline: none;
  }
`

const Input = () => {

  return (
    <StyledInput />
  )
}

export default Input