import {DS_POST} from '../actions/action'
import { produce } from 'immer'

const initialState = {
  dsPost: []
}
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DS_POST:
        draft.dsPost = action.payload
        return {...action.payload}
      default:
        draft.dsPost = action.payload
        return {...action.payload}
    }
  })
}

export default reducer
