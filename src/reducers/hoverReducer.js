import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.HOVER:
      return {
        ...state,
        hoverId: action.payload
      }
    default: return state
  }
}