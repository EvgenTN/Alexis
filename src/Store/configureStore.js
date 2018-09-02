import { createStore } from 'redux';
import rootReducer from '../reducers'

 function configureStore(initialData) {
  //  console.log(initialData);
  return createStore(rootReducer, initialData)
};

export default configureStore;