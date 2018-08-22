import * as actionTypes from './actionTypes';

export const changeData (data) => {
  return {
    type: actionTypes.CHANGE_DATA,
    data: data,
  }
}