// import initialData from '../initialData';
import * as actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
  // console.log('state=> ',state);
  // console.log('action=> ', action);

  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_ARTICLE:
      return {
        ...state,
        activeArticle: action.payload,
      }
    case actionTypes.ADD_DATA:
      // const result = {...state};
      // console.log(action.payload);
      return Object.assign({ ...state }, action.payload);

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
      const random4 = Math.floor(Math.random() * 3);
      return {
        ...state,
        activeSlide: 0,
        activeArticle: random4,
      };
  }
}