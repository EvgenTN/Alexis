import { combineReducers } from 'redux';
import data from './dataReducer';
import hover from './hoverReducer';


export default combineReducers({
  data: data,
  hover,
})