import { Counter } from '../constants';

export default function counter(state = 0, action) {
  switch (action.type) {
    case Counter.INCREMENT_COUNTER:
      return state + 1
    case Counter.DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
