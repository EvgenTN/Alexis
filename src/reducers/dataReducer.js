// import initialData from '../initialData';
import * as actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlide: action.payload,
      }
    case actionTypes.CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      }
    case actionTypes.CHANGE_DATA:
      return [...state];
    default:
      // console.log(state);
      return {
        ...state,
        activeSlide: 0,
      };
  }
}