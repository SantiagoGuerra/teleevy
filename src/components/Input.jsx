import React from 'react'
import styled from 'styled-components'
import {Box} from 'rebass'

const StyledInput = styled(Box).attrs((value) => ({
  as:'input',
  placeholder:'Search Shows',
  type:'search',
  value: value
}))`
  font-size: 16px;
  color: ${props => props.theme.colors.dark};
  padding: 6px;
  border-radius: 4px;
  border:none;
  background: #eee;
  border-bottom: 3px solid orange;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.light};
  }

  &:focus {
    box-shadow: 0px 2px 4px rgba(0,0,0,.2);
    outline: none;
  }

  @media screen and (min-width: 40em) {
    font-size: 20px;
    padding: 8px;
  }
`

const Input = ({
  value,
  handleOnChangeInputValue,
  handleFetchShows
}) => {

  return (
    <StyledInput value={value} onChange = {
      e => {
        let _val = e.target.value
        handleOnChangeInputValue(_val)
        handleFetchShows(_val)
      }
    }/>
  )
}

export default Input