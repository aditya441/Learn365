import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from './components/registration'
import Login from './components/login';
import Welcome from './components/welcomePage';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
          <div className="App">
          <Router>
            <Route exact path='/' render={props =>(
              <React.Fragment> 
                <Homepage /> 
              </React.Fragment>
            )} />
            <Route exact path='/login' render={props =>(
              <React.Fragment>
                <div className="App-header">
                  <h2> Learn365</h2>
                </div>
                <Login />
              </React.Fragment>
            )} />
          
            <Route exact path='/signup' component={Register} />

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
