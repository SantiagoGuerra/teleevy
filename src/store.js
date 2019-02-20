import app from './reducers'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'




const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
)

export default store
