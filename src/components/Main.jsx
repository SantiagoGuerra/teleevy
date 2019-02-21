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

const Main = ({
  ui,
  shows,
  modal,

  handleOnChangeInputValue,
  handleFetchShows,
  handleAddModalShow,

  closeModal
}) => { 

    return (
      <React.Fragment>

      <ShowsContainer
              ui={ui} 
              shows={shows}
              handleOnChangeInputValue={handleOnChangeInputValue}
              handleFetchShows={handleFetchShows}
              handleAddModalShow={handleAddModalShow}
              closeModal={closeModal}
            />
      <ExpandShow 
        isOpen={ui}
        modal={modal}
        closeModal={closeModal}
      />
      </React.Fragment>
    )

}
export default Main