import React from  'react'
import ShowsContainer from './ShowsContainer';

const Main = ({
  ui,
  shows,

  handleOnChangeInputValue,
  handleFetchShows
}) => { 

    return (
      <React.Fragment>

      <ShowsContainer
              ui={ui} 
              shows={shows} 
              handleOnChangeInputValue={handleOnChangeInputValue}
              handleFetchShows={handleFetchShows}
            />  
      </React.Fragment>
    )

}
export default Main