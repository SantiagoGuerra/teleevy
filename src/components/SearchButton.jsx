import React from 'react'
import styled from 'styled-components'
import {Button} from 'rebass'

const StyledButton = styled(Button).attrs((...props) => ({
  props
}))`
  font-weight: 400;
  font-size: 20px;
  padding: 12px;
  background: #FF8721;

  &:hover {
    cursor: pointer;
  }
`

const SearchButton = ({children, ...props}) => {

  return <StyledButton props>{children}</StyledButton>
}

export default SearchButton