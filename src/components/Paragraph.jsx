import React from 'react'
import styled from 'styled-components'
import {Text} from 'rebass'

const StyledParagraph = styled(Text)`
  color: #636363;
`

const Paragraph = ({children}) => {

  let quitCloseP = children.replace(/<[/]p>/ig, '')
  let quiteP = quitCloseP.replace(/<p>/ig, '')
  let quiteCloseB = quiteP.replace(/<[/]b>/ig, '')
  let quiteB = quiteCloseB.replace(/<b>/ig, '')
  let text = quiteB
  return (
    <StyledParagraph
      fontSize={[12, 16]}
    >
      {text}
    </StyledParagraph>
  )
}

export default Paragraph