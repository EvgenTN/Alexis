import * as actionTypes from './actionTypes';

export const changeData = (data) => {
  return {
    type: actionTypes.CHANGE_DATA,
    data: data,
  }
}

export const changeActivePage = (path) => {
  return {
    type: actionTypes.CHANGE_ACTIVE_PAGE,
    payload: path,
  }
}

export const changeActivSlide = (id) => {
  return {
    type: actionTypes.CHANGE_ACTIVE_SLIDE,
    payload: id,
  }
}