import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import Input from './Input'
import SearchButton from './SearchButton'

const Search = () => {
  return(
    <Flex>
      <Input />
      <SearchButton>Search</SearchButton>
    </Flex>
  )
}

export default Search