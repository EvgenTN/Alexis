import React, { Component } from 'react';
// import './App.css';
import Header from './containers/Header';

import {
  Home,
  About,
  Focus,
  Video,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Focus />
        <Video/>
      </div>
    );
  }
}

export default App;
