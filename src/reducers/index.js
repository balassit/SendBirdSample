import { combineReducers } from 'redux'
import auth from './auth'
import CounterReducer from "./counterReducer";

export default combineReducers({
  auth,
  CounterReducer
})