import { combineReducers } from 'redux';
import data from './dataReducer';
import hover from './hoverReducer';
import teamMember from './teamMemberReducer';


export default combineReducers({
  data,
  hover,
  teamMember,
})