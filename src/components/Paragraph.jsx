import React from 'react'
import styled from 'styled-components'
import {Text} from 'rebass'

const StyledParagraph = styled(Text)`
  color: #636363;
`

const Paragraph = ({children}) => {

  return (
    <StyledParagraph
      fontSize={[12, 16]}
    >
      {children}
    </StyledParagraph>
  )
}

export default Paragraph