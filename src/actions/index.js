export const changeInputValue = val => ({
  type: 'CHANGE_INPUT_VALUE',
  val
})


export const receiveShows = json => ({
  type: 'RECEIVE_SHOWS',
  shows: json
})

export const fetchShows = val => {

  return function(dispatch) {

    return fetch(`http://api.tvmaze.com/search/shows?q=${val}`)
      .then(
        response => response.json()
      )
      .then(
        json => dispatch(receiveShows(json))
      )
  }
}