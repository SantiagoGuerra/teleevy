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

  & p {
    color: #636363;
  }
`

const Heading = ({children, date, link, mr}) => {

  return (
    <StyledHeading
      as='h3'
      fontSize={[16, 20]}
      mr={mr}
    >

    {link ? <a href={link}>{children} <br/><span>({date})</span></a> : <p> {children} <br/><span>({date})</span></p>}
    </StyledHeading>
  )
}

export default Heading