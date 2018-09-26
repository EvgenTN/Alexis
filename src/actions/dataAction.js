import * as actionTypes from './actionTypes';

export const sendMessage = (message) => {
  return {
    type: actionTypes.SEND_MESSAGE,
    payload: message
  }
}
export const changeActiveArticle = (id) => {
  return {
    type: actionTypes.CHANGE_ACTIVE_ARTICLE,
    payload: id,
  }
}

export const changeData = (data) => {
  return {
    type: actionTypes.CHANGE_DATA,
    data: data,
  }
}

export const addData = (data) => {
  // console.log(data);
  return {
    type: actionTypes.ADD_DATA,
    payload: data,
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

export const subscribe = (mail) => {
  return {
    type: actionTypes.SUBSCRIBE_NOW,
    payload: mail,
  }
}