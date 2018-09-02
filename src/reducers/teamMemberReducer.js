import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case actionTypes.CHOOSE_TEAM_MEMBER:
      return {
        ...state,
        activeTeamMember: action.payload,
      };
    default:
      return state;
  }
}