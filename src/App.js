import React, { Component } from 'react';
// import './App.css';
// import Header from './containers/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {
  Home,
} from './components';

import {
  Header,
  Focus,
  Portfolio,
  Team,
  About,
  WorkSteps,
  Testimonials,
  Pricing,
  WhySelectUs,
  Blog,
  Contact
} from './containers';


class App extends Component {






  render() {


    return (
      <Router>
        <div className="App">
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/focus' component={Focus} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/team' component={Team} />
          <Route path='/workSteps' component={WorkSteps} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/pricing' component={Pricing} />
          <Route path="/whySelectUs" component={WhySelectUs} />
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>

    );
  }
}

export default App;
