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
  summary,
  tags
}) => {

  return (
    <Card
      width={[ 1, .6, 1/2 ]}
      p={1}
      my={2}
      bg='#f6f6ff'
      borderRadius={8}
      boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
    >
      <Flex
        flexWrap='wrap'
      >
      <Box
        width={[.3, .3, .2]}
      >
        <Image 
        src={urlImage}/>
      </Box>
      <Box
        width={[.7]}
      >
        <Flex
          flexWrap='wrap'
          p={2}
        >
          <Box 
            width={[1]}
            mb={2}
            >
            <Flex
              alignItems='center'
            >
              <Heading 
                mr={3}
                date={date}
                link={link}
              >{title}</Heading><Flag code={code} />
            </Flex>
          </Box>
          <Box 
            mb={2}
          >
            <Stars val={val}/>
          </Box>
          <Box
            mb={2}
          >
            <Paragraph>
              {summary}
            </Paragraph>
          </Box>
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