import React, {useState} from  'react'
import ShowsContainer from './ShowsContainer';
import Modal from 'react-responsive-modal';
import {Card, Heading} from 'rebass'
import Complete from './Complete'


const ExpandShow = ({isOpen, modal, closeModal}) => {

  const [open, set] = useState(true)

  return (
    <Modal
      onClose={() => closeModal(false)}
      open={isOpen.modal.isOpen}
    >
      <Card
        width={[ 200, 300, 500]}
        mt={[32]}
      >
        <Complete modal={modal}/>

      </Card>
    </Modal>
  )
}

import Side from './SideBar'
const Main = ({
  ui,
  shows,
  modal,

  handleOnChangeInputValue,
  handleFetchShows,
  handleAddModalShow,

  closeModal
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
              handleAddModalShow={handleAddModalShow}
              closeModal={closeModal}
              sidebarIsOpen={isOpen}
              set={setIsOpen}
            />  
      <ExpandShow 
        isOpen={ui}
        modal={modal}
        closeModal={closeModal}
      />
            
      </Side>
      </React.Fragment>
    )

}
export default Main