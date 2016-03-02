import { combineReducers } from 'redux'

// Add dummy reducer
function dummy(state = {}, action) {
  switch(action.type) {
    default:
      return state
  }
}
// Add async reducers
export default function createReducer(asyncReducers) {
  return combineReducers({
    dummy,
    ...asyncReducers
  })
}
