import { createStore } from 'redux';
import rootReducer from '../reducers'

export default function configureStore(initialData) {
  return createStore(rootReducer, initialData)
}