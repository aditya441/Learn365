import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import './App.css';
import QuestionBox from './components/quizComponents/QuestionBox';
import Register from './components/registration';
import Result from './components/quizComponents/Result';
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
import quizData from './components/quizData.json';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);

// import Stories from './components/stories';




class App extends Component {
constructor(props){
  super(props);
  this.state={
    quiz:quizData,
    score:0,
    responses:0,
    authorized:true
  }
}
computeAnswer = (answer,correctAnswer) => {
  if(answer === correctAnswer){
    this.setState({
      score:this.state.score + 1
    });
  }
  this.setState({
    responses:this.state.responses + 1
  })
}

playAgain = () => {
  this.setState({
    score:0,
    responses:0
  })
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

  // state = {
  //   Stories,
  // }

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
        <Route path='/quiz' render={props =>(
          <React.Fragment>
            <Headersignup/>
            <div className="quizcontainer">
              <div className="title">Quiz</div>
              { this.state.responses < 4 &&
                this.state.quiz.map((courseId)=>(
                courseId.questions.map((question)=>(
                  <QuestionBox question={question.question} option={question.options} key={question.question_id} selected={answer => this.computeAnswer(answer,question.answer)}/>
                ))
              ))}
              {this.state.responses === 4 ? (<Result response={this.state.responses}score={this.state.score} playAgain={this.playAgain}/>) : null}
            </div>
          </React.Fragment>
        )} />
       </Router>
       
      </div>
    );
  }
}

export default App;
