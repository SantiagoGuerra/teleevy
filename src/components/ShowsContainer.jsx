import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import Header from './Header'
import Show from './Show'
import uuid from 'uuid'


const ShowsContainer = ({shows}) => {
  return (
    <React.Fragment>
      <Header />
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        width={[1]}
      >

        {
          (shows.length <= 0)
            ? 'There are not concidences'
            : shows.map( show => {
              return (
                <Box
                  key={uuid.v4()}
                  width={[1]}
                >
                  <Flex
                    justifyContent='center'
                  >
                  <Show 
                     urlImage={show.show.image.original | ''}
                     title={show.show.name}
                     date={show.show.premiered}
                     link={show.show.officialSite}
                     code={'us'}
                     val={show.show.rating.average}
                     summary={show.show.summary}
                     tags={show.show.genres}
                     key={show.show.id}
                  />
                  </Flex>
                </Box>
              )
            })
        }

      </Flex>
    </React.Fragment>
  )
}

export default ShowsContainer