import React, { Component } from 'react';
// import './App.css';
import Header from './containers/Header';
import {
  Home
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
