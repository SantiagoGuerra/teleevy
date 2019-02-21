import {connect} from 'react-redux'
import Main from '../components/Main'
import {changeInputValue, fetchShows,addModalShow, modalIsOpen} from '../actions/'

const mapState = state => ({
  ui: state.ui,
  shows: state.showsContainer.shows,
  modal: state.showsContainer.modalShow
})

const mapDispatch = dispatch => ({
  handleOnChangeInputValue: val => dispatch(changeInputValue(val)),
  handleFetchShows: json => dispatch(fetchShows(json)),
  handleAddModalShow: obj => dispatch(addModalShow(obj)),
  closeModal: val => dispatch(modalIsOpen(val))
})

const MainContainer = connect(mapState, mapDispatch)(Main)

export default MainContainer