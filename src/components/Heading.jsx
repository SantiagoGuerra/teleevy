import React from 'react'
import styled from 'styled-components'
import {Heading as Title} from 'rebass'

const StyledHeading = styled(Title)`  
  & a {
    color: #FF8721;
    text-decoration:none;
  }

  & a:hover{
    text-decoration: underline;
  }

  & a span {
    font-weight: 400;
  }
`

const Heading = ({children, date}) => {

  return (
    <StyledHeading
      as='h3'
      fontSize={[16, 20]}
    >
    <a href='#'>{children} <span>({date})</span></a>
    </StyledHeading>
  )
}

export default Heading