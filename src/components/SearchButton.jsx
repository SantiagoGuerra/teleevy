import React from 'react'
import styled from 'styled-components'
import {Button} from 'rebass'

const StyledButton = styled(Button).attrs((...props) => ({
  props
}))`
  font-weight: 400;
  font-size: 16px;
  padding: 8px;
  background: #FF8721;
  border-radius: 0px 4px 4px 0px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 40em) {
    font-size: 20px;
    padding: 12px;
  }
`

const SearchButton = ({children, ...props}) => {

  return <StyledButton props>{children}</StyledButton>
}

export default SearchButton