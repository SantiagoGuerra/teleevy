import React from 'react'
import Rating from 'react-rating'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'

import starFull from '../assets/star-full.png'
import starEmpty from '../assets/star-empty.png'

const StarContainer = styled(Flex)`
  width: 100px;
`

const Star = styled.img`
  width: 20px;
`

const Stars = ({val}) => {

  return (
    <React.Fragment>
      <Flex
        alignItems='center'
      >
      <StarContainer
    >
      <Rating 
    initialRating={val}
    emptySymbol={<Star src={starEmpty} className="icon" />}
    fullSymbol={<Star src={starFull} className="icon" />}
    readonly
  />
    </StarContainer>
    <Box as='span' mx={[8]} style={{color:'#b0b0b0'}}>
      {val}
    </Box>
      </Flex>
    </React.Fragment>  
  )
}


export default Stars