import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

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
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin'
import CreateCourse from './components/CreateCourse';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);
class App extends Component {
constructor(props){
  super(props);
  this.state={
    authorized:true
  }
}

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        console.log(user);
        this.setState({authorized:true})
      }else{
        this.setState({authorized:false})
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
        <Route exact path='/' render={props =>(
          <React.Fragment>
            <div className="try">
            <Header/>
            <Homepage />
            </div>
            <HowWeWork />
          </React.Fragment>
        )} />
        
        <PrivateRouteLogin exact path='/login' authed={this.state.authorized} component={Login} />
         {/* render={props =>(
          <React.Fragment>
           
         {/* <Headersignup/> */}
              {/* <Login /> */}

          {/* </React.Fragment> */}
        {/* )} /> */}
        
        <Route  path='/signup' render={props =>(
          <React.Fragment>
         
         <Headersignup/>
        <Register />

          </React.Fragment>
        )} />
        <PrivateRoute  path='/welcome' authed={this.state.authorized} component={Welcome} /> 
         {/* render={props =>(
          <React.Fragment>
            <Headersignup />
        <Welcome/>

          </React.Fragment>
        )} /> */}
        <Route exact path='/createcourse' 
        render={props =>(
          <React.Fragment>
            <Headersignup/>
        <CreateCourse />

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
        </Switch>
       </Router>
       
      </div>
    );
  }
}

export default App;
