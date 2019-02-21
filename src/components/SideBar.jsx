import React, {useState} from "react";
import Sidebar from "react-sidebar";
import styled from 'styled-components'
import {Flex, Box} from 'rebass'
import { Slider } from 'react-burgers'



import Logo from './Logo'


const StyledLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #636363;
  padding: 8px;
  padding-left: 24px;
  width: 100%;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
`

const SideBar = ({set, isOpen}) => {

  return (
    <Flex
      width={[.9, 250 ]}
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
        width={16}
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
      <Flex
        as='nav'
        width={[1]}
      >
        <Flex as='ul'
          justifyContent='center'
          style={{listStyle:'none'}}
          flexDirection='column'
          width={[1]}
        >
          <Flex
            as='li'
            mt={[24]}
            alignItems='center'
          >
           <StyledLink>
           <Box
              mr={[24]}
            >
            <i className="material-icons">trending_up</i>
            </Box>
            Trend
            </StyledLink>
          </Flex>

                   
          <Flex
            as='li'
            alignItems='center'
          >
          <StyledLink>
          <Box
              mr={[24]}
              width={[24]}
            >
            <i className="material-icons">star_rate</i>
            </Box>
            <Box>
              Best Rated
            </Box>  
          </StyledLink>
          </Flex>

          <Flex
            as='li'
            alignItems='center'
          >
          <StyledLink>
          <Box
              mr={[24]}
              width={[24]}
            >
            <i className="material-icons">theaters</i>
            </Box>
            <Box>
              New Shows
            </Box>
          </StyledLink>
          </Flex>


        </Flex>
      </Flex>
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