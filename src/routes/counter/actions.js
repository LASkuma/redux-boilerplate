import { CHANGE_COUNTER_STEP, TICK_COUNTER } from '../../constants'

export function tick() {
  return { type: TICK_COUNTER }
}
export function startCounter() {
  return (dispatch, getState) => {
    console.log(getState())
    setInterval(()=> {
      dispatch(tick())
    }, 1000)
  }
}

export function changeCounterStep(step) {
  return { type: CHANGE_COUNTER_STEP, step }
}
