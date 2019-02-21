import React, {useState} from "react";
import Sidebar from "react-sidebar";
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import { Slider } from 'react-burgers'



import Logo from './Logo'


const SideBar = ({set, isOpen}) => {

  return (
    <Flex
      width={[.9, 360, 300]}
      flexDirection='column'
    >
    <Flex
      width={[1]}
      alignItems='center'
      style={{borderBottom:'1px solid #CCC'}}

    >
      <Box
        m={[6, 8]}
      >
      <Slider
        color='#FF8721' 
        width={32}
        onClick={() => {
          set()
        }}
      />
      </Box>
      <Box
        width={[.4]}
        m={[6,8]}
        mr={32}
      >
        <Logo />
      </Box>
    </Flex>
    <Box>
      hok
    </Box>

    </Flex>
  )
}

const Side = ({children, set, isOpen}) => {

 
  return (
    <Sidebar
      sidebar={<SideBar 
      set={set}        
      />}
      open={isOpen}
      onSetOpen={() => set()}
      styles={{ sidebar: { background: "white"} }}
    >
    <Box
    >
    {children}
    </Box>
    </Sidebar>
  )
}
    

export default Side