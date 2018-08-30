import * as actionTypes from './actionTypes';

export const hover = (id) => {
// console.log(id);
  return {
    type: actionTypes.HOVER,
    payload: id,
  }
}