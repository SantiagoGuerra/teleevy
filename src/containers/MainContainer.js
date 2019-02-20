import {connect} from 'react-redux'
import Main from '../components/Main'
import {changeInputValue, fetchShows} from '../actions/'

const mapState = state => ({
  ui: state.ui,
  shows: state.showsContainer.shows
})

const mapDispatch = dispatch => ({
  handleOnChangeInputValue: val => dispatch(changeInputValue(val)),
  handleFetchShows: json => dispatch(fetchShows(json))
})

const MainContainer = connect(mapState, mapDispatch)(Main)

export default MainContainer