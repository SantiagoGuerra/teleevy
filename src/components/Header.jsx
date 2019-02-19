import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import Logo from './Logo'
import Input from './Input'

const HeaderContainer = styled(Flex)`
  border-bottom: .5px solid #ccc;
`

const Header = () => {

  return (
    <HeaderContainer
      as='header'
      alignItems='center'
      p={[16, 24]}
      width={[1]}
    >
      <Box
        width={[120]}
        mx={[16,24]}
      >
        <Logo />
      </Box>
      <Box
        width={[.6, .6, .4]}
      >
        <Input borderRadius={[4]}/>
      </Box>
    </HeaderContainer>
  )
}

export default Header