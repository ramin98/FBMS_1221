import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { thunk } from 'redux-thunk'
const applicationStore = createStore(reducer, applyMiddleware(thunk))

export default applicationStore