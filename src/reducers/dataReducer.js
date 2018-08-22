import initialData from '../initialData';
import * as actionTypes from '../actions/actionTypes';


export default (state = initialData, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DATA:
      return [...state];
    default: return state;
  }
}