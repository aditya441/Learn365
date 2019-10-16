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
import HeaderAuth from './components/HeaderAuth';
import Headersignup from './components/HeaderSignup';
import firebase from 'firebase';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin'
import CreateCourse from './components/CreateCourse';
import firebaseConfig from './firebase.config';
import CreateSection from './components/CreateSection';
firebase.initializeApp(firebaseConfig);

// import Stories from './components/stories';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    authorized:true,
    user:''
  }
}

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({user:user})
        // console.log(user);
        this.setState({authorized:true})
      }else{
        this.setState({authorized:false})
      }
    })
  }
  // state = {
    //   Stories,
    // }
    
    render() {
      // console.log(this.state.user)
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
         <HeaderAuth/>
        <Register />
          </React.Fragment>
        )} />
        <PrivateRoute  path='/welcome' authed={this.state.authorized} 
        // component={Welcome} /> 
        component={() => <Welcome user={this.state.user}  />} />
        <Route exact path='/:user/createcourse' 
        render={props =>(
          <React.Fragment>
            <Headersignup {...props} name={this.state.user}/>
        <CreateCourse {...props} userId={this.state.user}/>

          </React.Fragment>
        )} />
        <Route path='/:userId/course/:courseId/sections' render={props =>(
          <React.Fragment>
            <Headersignup {...props} name={this.state.user}/>
        <CreateSection {...props} userId={this.state.user}/>

          </React.Fragment>
        )} />
         <Route  path='/Learner' render={props =>(
          <React.Fragment>
            <Headersignup {...props} name={this.state.user} />
            <Learner />
        {/* <Learner stories={this.state.Stories}/> */}
          
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
