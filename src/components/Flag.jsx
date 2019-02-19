import React from 'react'
import styled from 'styled-components'
import ReactCountryFlag from 'react-country-flag'

const StyledFlag = styled(ReactCountryFlag).attrs((code, svg) => ({
  code: code,
  svg: svg
}))`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`

const Flag = ({code}) => {

  return (
    <StyledFlag code={code} svg/>
  )
}

export default Flag
