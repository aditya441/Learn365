import React, { Component } from 'react';
import { BrowseRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from './components/registration'
// import Login from './components/login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2> Learn365</h2>
            <p>Agile way of learning</p>
          </div>
      {/* <Login /> */}
      {/* <Register /> */}
      </div>
      </Router> 
    );
  }
}

export default App;
