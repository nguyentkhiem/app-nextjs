import {DS_POST} from '../actions/action'
import { produce } from 'immer'

const initialState = {
  dsPost: []
}
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DS_POST:
        return {...state}
      default:
        return {...state}
    }
  })
}

export default reducer
