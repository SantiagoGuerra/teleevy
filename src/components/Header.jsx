import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import SearchButton from './SearchButton'

import Logo from './Logo'
import Input from './Input'


import { Slider } from 'react-burgers'


const HeaderContainer = styled(Flex)`
  border-bottom: .5px solid #ccc;
`

const Header = ({
  ui,
  handleOnChangeInputValue,
  handleFetchShows,
  set,
  sidebarIsOpen
}) => {
  return (
    <HeaderContainer
      as='header'
      alignItems='center'
      p={[8]}
      width={[1]}
      justifyContent='space-between'
    >   
        <Box
          
        >

        <Slider 
          onClick = {() => set()}
          color='#FF8721' 
          width={32}
          style={{margin: '16px'}}
        />
        </Box>
        <Flex as='form'
        width={[.7, .7,.3]}
        mr={[0, 0, 42]}
          onSubmit={e => {
            e.preventDefault()
            handleFetchShows(ui.inputValue)
          
          }}
        >
        <Input 
          borderRadius={[4]}
          handleOnChangeInputValue={handleOnChangeInputValue}
        />
        </Flex>
    </HeaderContainer>
  )
}

export default Header