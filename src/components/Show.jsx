import React from 'react'
import styled from 'styled-components'
import {Image, Box, Flex, Card} from 'rebass'
import Heading from './Heading'
import Flag from './Flag'
import Stars from './Stars'
import Paragraph from './Paragraph'
import Tags from './Tags'

const Show = ({
  urlImage,
  title,
  date,
  link,
  code,
  val,
  tags
}) => {

  return (
    <Card
      width={[1]}
      p={1}
      bg='#f6f6ff'
      borderRadius={8}
      boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'

    >
    {/* image box and content container */}
      <Flex
        flexWrap='wrap'
        flexDirection='column'
      >

      {/* image */}
      <Box
        width={[1]}
        alignSelf='center'
      >
        <Image 
        src={urlImage}/>
      </Box>

      {/* content container */}
      <Box
        width={[1]}
        p={[2]}
      >

      {/* title */}
        <Flex
          flexWrap='wrap'
          width={[1]}
        >
          <Heading 
            mr={3}
            date={date}
            link={link}
          >
            {title}
          </Heading>
        </Flex>
          
          {/* flag */}
        <Flex>
        <Box 
            pt={[2]}
            width={[1]}
            mb={2}
            >
              <Flag code={code} />
          </Box>
        </Flex>

        {/* rating */}

        <Flex>
          <Box 
            mb={2}
          >
            <Stars val={val}/>
          </Box>
        </Flex>
 

        {/* tags */}
        <Flex>
        <Box
          >
            <Tags tags={tags} />
          </Box>
        </Flex>
      </Box>
      </Flex>
    </Card>
  )
}

export default Show