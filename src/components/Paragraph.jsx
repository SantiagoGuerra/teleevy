import React from 'react'
import styled from 'styled-components'
import {Text} from 'rebass'

const StyledParagraph = styled(Text)`
  color: #636363;
`

const Paragraph = ({children}) => {

  let text = children.replace(/<[/]p>/, '')
  let replace = text.replace(/<p>/, '')

  return (
    <StyledParagraph
      fontSize={[12, 16]}
    >
      {replace}
    </StyledParagraph>
  )
}

export default Paragraph