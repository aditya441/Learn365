import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Register from './components/registration'
import Login from './components/login';
import Welcome from './components/welcomePage';
import Learner from './components/Learner';
import Courses from './components/Courses';
import Video from './components/video';
import Header from './components/Header';
import Homepage from './components/Homepage';
import HowWeWork from './components/howWeWork';
import Headersignup from './components/HeadenSignup';
import firebase from 'firebase';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Route exact path='/' render={props =>(
          <React.Fragment>
            <div className="try">
            <Header/>
            <Homepage />
            </div>
            <HowWeWork />
          </React.Fragment>
        )} />
        
        <Route exact path='/login' render={props =>(
          <React.Fragment>
           
         <Headersignup/>
              <Login />

          </React.Fragment>
        )} />
        
        <Route  path='/signup' render={props =>(
          <React.Fragment>
         
         <Headersignup/>
        <Register />

          </React.Fragment>
        )} />
        <Route  path='/welcome' render={props =>(
          <React.Fragment>
            <Headersignup />
        <Welcome/>

          </React.Fragment>
        )} />
         <Route  path='/Learner' render={props =>(
          <React.Fragment>
            <Headersignup/>
        <Learner/>

          </React.Fragment>
        )} />

      <Route  path='/Courses' render={props =>(
          <React.Fragment>
            <Headersignup />
        <Courses/>

          </React.Fragment>
        )} />

<Route  path='/video' render={props =>(
          <React.Fragment>
            <Headersignup />
        <Video/>

          </React.Fragment>
        )} />
        
       </Router>
       
      </div>
    );
  }
}

export default App;
