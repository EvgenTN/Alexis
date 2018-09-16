// import initialData from '../initialData';
import * as actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
  // console.log('state=> ',state);
  // console.log('action=> ', action);

  switch (action.type) {
    case actionTypes.ADD_DATA:
    // const result = {...state};
      return Object.assign({...state}, action.payload);

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