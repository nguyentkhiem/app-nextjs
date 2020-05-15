import reducer from './reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  counter: reducer
})

export default rootReducer
