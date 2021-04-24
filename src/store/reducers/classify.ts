import { SET_CLASSIFY } from '../constants'

const INITIAL_STATE = []

export default function classify(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CLASSIFY:
      const { classifys } = action.payload
      return [ ...state, ...classifys ]
    default:
      return state
  }
}
