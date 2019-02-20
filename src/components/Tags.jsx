import React from 'react'
import styled from 'styled-components'
import {Box, Flex, Text} from 'rebass'

import uuid from 'uuid'

const StyledTag = styled(Box)`
  border: .5px solid #5352ed;
  border-radius: 4px;
`

const Tags = ({tags}) => {

  return (
    <Flex>
      {
        tags.length <= 0
          ? ''
          : tags.map(tag => (
            <StyledTag
              mx={[.9]} 
              key={uuid.v4()}
              >
              <Text
                fontSize={[11,12]}
                p={[1]}
              color='#5352ed'              
              >
                {tag}
              </Text>
            </StyledTag>
          ))
      }
    </Flex>
  )
}

export default Tags