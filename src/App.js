import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import './App.css';
import Register from './components/registration'
import Login from './components/login';
import Welcome from './components/welcomePage';
import Courses from './components/Courses';
import Sections from './components/Sections';
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
import courseData from './components/coursesData';
import Video2 from './components/video2';
import Video1 from './components/video1';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      courseData,
      progress: 0,
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
                  <div className="try2">
                    <Header/>
                    <Homepage />
                  </div>
                </div>
                <HowWeWork />
              </React.Fragment>
            )} /> 
            <PrivateRouteLogin exact path='/login' authed={this.state.authorized} component={Login} />
            <Route  path='/signup' render={props =>(
              <React.Fragment>
                <Headersignup/>
                <Register />
              </React.Fragment>
            )} />
            <PrivateRoute  path='/welcome' authed={this.state.authorized} component={Welcome} /> 
            <Route exact path='/createcourse' render={props =>(
              <React.Fragment>
                <Headersignup/>
                <CreateCourse />
              </React.Fragment>
            )} />
            <Route  path='/courses' render={props =>(
              <React.Fragment>
                <Headersignup/>
                <Courses courses={this.state.courseData}/>  
              </React.Fragment>
            )} />
            
                 <Route  path='/courseId/Sections' render={props =>(
                  <React.Fragment>
                    <Headersignup />
                  <Sections/>
                      
                  </React.Fragment>
                )} />
                <Route  path='/Course' render={props =>(
                  <React.Fragment>
                    <Headersignup />
                  <Video1/>
                      
                  </React.Fragment>
                )} />  
                <Route  path='/Coursess' render={props =>(
                  <React.Fragment>
                    <Headersignup />
                  <Video2/>
                      
                  </React.Fragment>
                )} /> 
        
          </Switch>
        </Router>
       
      </div>
    );
  }
}

export default App;
