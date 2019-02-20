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

const Heading = ({children, date, link, mr}) => {

  return (
    <StyledHeading
      as='h3'
      fontSize={[16, 20]}
      mr={mr}
    >
    <a href={link}>{children} <span>({date})</span></a>
    </StyledHeading>
  )
}

export default Heading