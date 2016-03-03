import { CHANGE_COUNTER_STEP, TICK_COUNTER } from '../../constants'

export default function counterReducer(state = { step: 1, count: 0 }, action) {
  switch(action.type) {
    case CHANGE_COUNTER_STEP:
      return Object.assign({}, state, action.step)

    case TICK_COUNTER:
      return Object.assign({}, state, { count: state.count + state.step })

    default:
      return state
  }
}
