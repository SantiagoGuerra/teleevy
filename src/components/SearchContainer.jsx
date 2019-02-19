import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import Logo from './Logo'
import Search from './Search'

const SearchContainer = () => {

  return (
    <Flex
      flexDirection='column'
      width={[.9, .7,  .5]}
    >
      <Box
        width={[.5]}
        alignSelf='center'
      >
      <Logo/>
      </Box>
      <Search />
    </Flex>
  )
}

export default SearchContainer