import React, {useState} from  'react'
import ShowsContainer from './ShowsContainer';
import Side from './SideBar'
const Main = ({
  ui,
  shows,

  handleOnChangeInputValue,
  handleFetchShows
}) => { 

    const [isOpen, set] = useState(true)

    const setIsOpen = () => set(!isOpen)

    return (
      <React.Fragment>
      <Side
        isOpen={isOpen}
        set={setIsOpen}
      >
      <ShowsContainer
              ui={ui} 
              shows={shows} 
              handleOnChangeInputValue={handleOnChangeInputValue}
              handleFetchShows={handleFetchShows}
              sidebarIsOpen={isOpen}
              set={setIsOpen}
            />  
      </Side>
      </React.Fragment>
    )

}
export default Main