import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const StyledLogo = styled.img`
  width: 100%;
  height: auto;
`

const Logo = () => {

  return <StyledLogo src={logo}/>
}

export default Logo