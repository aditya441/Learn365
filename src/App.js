import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Register from './components/registration'
import Login from './components/login';
import Welcome from './components/welcomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Router>

        <Route exact path='/login' render={props =>(
          <React.Fragment>
            <div className="App-header">
          <h2> Learn365</h2>
        </div>
              <Login />

          </React.Fragment>
        )} />
        
        <Route  path='/signup' render={props =>(
          <React.Fragment>
            <div className="App-header">
          <h2> Learn365</h2>
        </div>
        
        <Register />

          </React.Fragment>
        )} />
        <Route  path='/welcome' render={props =>(
          <React.Fragment>
        <Welcome/>

          </React.Fragment>
        )} />
       </Router>
      </div>
    );
  }
}

export default App;
