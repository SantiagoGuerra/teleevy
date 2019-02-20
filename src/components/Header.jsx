import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import SearchButton from './SearchButton'

import Logo from './Logo'
import Input from './Input'

const HeaderContainer = styled(Flex)`
  border-bottom: .5px solid #ccc;
`

const Header = ({
  ui,
  handleOnChangeInputValue,
  handleFetchShows
}) => {
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
        <Flex as='form'
          onSubmit={e => {
            e.preventDefault()
            handleFetchShows(ui.inputValue)
          
          }}
        >
        <Input 
          borderRadius={[4]}
          handleOnChangeInputValue={handleOnChangeInputValue}
          handleFetchShows={handleFetchShows}
        />
        <SearchButton>Search</SearchButton>

        </Flex>
      </Box>
    </HeaderContainer>
  )
}

export default Header