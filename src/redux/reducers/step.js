import { INCREMENT_STEP } from '../actions/actionCreators'

const step = (state=1, action) => {
  switch(action.type){
    case INCREMENT_STEP:
      return state + 1;
    case "DECREMENT_STEP":
      return state - 1;
    default:
      return state;
  }
}

export default step;