import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/configureStore'
import initialData from   './initialData'

const store = configureStore(initialData);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
