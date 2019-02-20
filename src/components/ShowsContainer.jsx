import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'rebass'

import Header from './Header'
import Show from './Show'
import uuid from 'uuid'


const Continue = styled.div`
  background: rgba(255, 135, 33, 0.3);
  padding: 20px;
  margin-top: 32px;
  color: rgba(255, 135, 33);
  border: 4px solid rgba(255, 135, 33, 0.3);
  width: 230px;
  display: flex;
  justify-content: center;
  text-align:center;
`



const ShowsContainer = ({
  shows,
  ui,
  handleOnChangeInputValue,
  handleFetchShows
}) => {

  return (
    <React.Fragment>
      <Header
        ui={ui}
        handleOnChangeInputValue={handleOnChangeInputValue}
        handleFetchShows={handleFetchShows}
      />
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        width={[1]}
        p={16}
      >

        {
          (shows.length <= 0)
            ? <Continue>There are not concidences, search another show</Continue>
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
                     urlImage={(show.show.image) ? show.show.image.original : ''}
                     title={show.show.name}
                     date={show.show.premiered}
                     link={show.show.officialSite}
                     code={(show.show.network) ? show.show.network.country.code : ''}
                     val={(show.show.rating.average) ? show.show.rating.average : 8}
                     summary={(show.show.summary) ? show.show.summary : ''}
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