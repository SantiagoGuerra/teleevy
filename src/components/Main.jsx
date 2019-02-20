import React from  'react'
import {Flex} from 'rebass'
import SearchContainer from './SearchContainer'
import ShowsContainer from './ShowsContainer';

const Main = () => { 

    return (
      <React.Fragment>

        {
          false
            ? <Flex
            width={[1]}
            justifyContent='center'
            alignItems='center'
            style={{height: '100vh'}}
          >
            <SearchContainer />
          </Flex>
          : <ShowsContainer shows={[]} />  
        }
      </React.Fragment>
    )

}
export default Main