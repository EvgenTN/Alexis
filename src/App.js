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
  Pricing
} from './containers';


class App extends Component {






  render() {

    // const pricing = [
    //   {
    //     "title": "Starter",
    //     "price": "125",
    //     "Online Storage": "200GB",
    //     "Files Per Day": "20",
    //     "Monthly Bandwidth": 2,
    //     "Secure Platform": true,
    //     "Customer Support": "24/7",
    //     "Fast & Reliable": true,
    //     "color": "green",
    //   },
    //   {
    //     "title": "Ultimate",
    //     "price": "195",
    //     "Online Storage": "800GB",
    //     "Files Per Day": "Unlimited",
    //     "Monthly Bandwidth": 10,
    //     "Secure Platform": true,
    //     "Customer Support": "24/7",
    //     "Fast & Reliable": true,
    //     "color": "red",
    //   },
    //   {
    //     "title": "Professional",
    //     "price": "145",
    //     "Online Storage": "200GB",
    //     "Files Per Day": 20,
    //     "Monthly Bandwidth": 2,
    //     "Secure Platform": true,
    //     "Customer Support": "24/7",
    //     "Fast & Reliable": true,
    //   },
    // ];

    // var str = JSON.stringify(pricing);
    // console.log(str);


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
        </div>
      </Router>

    );
  }
}

export default App;
