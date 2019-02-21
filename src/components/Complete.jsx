import React from 'react'
import styled from 'styled-components'
import {Image, Box, Flex, Card, Text} from 'rebass'
import Heading from './Heading'
import Flag from './Flag'
import Stars from './Stars'
import Paragraph from './Paragraph'
import Tags from './Tags'

const Complete = ({modal}) => {



  return (
    <Card
      width={[1]}
      p={2}
      bg='#f6f6ff'
      borderRadius={8}
    >
    {/* image box and content container */}
      <Flex
        flexWrap='wrap'
        flexDirection='column'
      >

      {/* image */}
      <Flex
        width={[1]}
        flexWrap='wrap'
      >
      <Box
        width={[1, 1, .5]}
      >
        <Image 
          src={(modal.show.image) ? modal.show.image.medium : ''}
          style={{objectFit:'cover', width:'100%'}}
          pr={[4]}
        />
      </Box>


      <Box
        width={[1, 1, .5]}
      >
        
      {/* title */}
      <Flex
          flexWrap='wrap'
          width={[1]}
        >
          <Heading 
            mr={3}
            date={modal.show.premiered}
            link={modal.show.officialSite}
          >
            {(modal.show.name) ? modal.show.name : ''}
          </Heading>
        </Flex>

        {/* rating */}

        <Flex>
          <Box 
            mb={2}
            mt={4}
          >
            <Stars val={(modal.show.rating.average) ? modal.show.rating.average : 8}/>
          </Box>
        </Flex>

      {/* language */}

        <Flex>
          <Box mb={[2]}>
            <Text
              fontSize={[12, 16]}
              color='#636363'
            >
              <span style={{fontWeight:'500', color:'#000'}}>Language:</span> {modal.show.language}
            </Text>
          </Box>
        </Flex>
 

      {/* network */}

        <Flex>
          <Box
            mb={[2]}
          >
            <Text
              fontSize={[12,16]}
              color='#636363'
            >
              <span style={{fontWeight: '500', color:'#000'}}>Network: </span>{(modal.show.network) ? modal.show.network.name : ''}
            </Text>
          </Box>
        </Flex>

                {/* flag */}
                <Flex>
        <Box 
            width={[1]}
            >
              <Flag code={(modal.show.network) ? (modal.show.network.country.code).toLowerCase() : ''} />
          </Box>
        </Flex>
      </Box>
      </Flex>
 

      {/* content container */}
      <Box
        width={[1]}
        p={[2]}
      >


        {/* summary */}
        <Flex>
          <Box
            mt={[2]}
            mb={[4]}
          >
            <Paragraph>
              {(modal.show.summary) ? modal.show.summary : ''}
            </Paragraph>
          </Box>
        </Flex>

        {/* tags */}
        <Flex>
        <Box
          >
            <Tags tags={(modal.show.genres) ? modal.show.genres : []} />
          </Box>
        </Flex>
      </Box>
      </Flex>
    </Card>
  )
}

export default Complete