import React, { Component } from 'react';
// import './App.css';
// import Header from './containers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {
  Home,
  About,
  
} from './components';

import {
  Header,
  Focus,
  Portfolio,
} from './containers';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header r='sdfsdfsdf'/>
          <Route path='/' exact component = {Home}/>
          <Route path='/about' component = {About}/>
          <Route path='/focus' component = {Focus}/>
          <Route path='/portfolio' component = {Portfolio}/>
          {/* <Home />
          <About />          
          <Focus />
          <Video /> */}
        </div>
      </Router>

    );
  }
}

export default App;
