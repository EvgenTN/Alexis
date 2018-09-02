import * as actionTypes from './actionTypes';

export const choose = (id) => {
  // console.log(id);
  return {
    type: actionTypes.CHOOSE_TEAM_MEMBER,
    payload: id,
  }
}