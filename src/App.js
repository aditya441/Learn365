import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import './App.css';
import Addquiz from './components/quizComponents/addQuiz';
import Showing from './components/quizComponents/showingQuiz';
// import QuestionBox from './components/quizComponents/QuestionBox';
import Register from './components/registration';
import Result from './components/quizComponents/Result';
import Login from './components/login';
import Welcome from './components/welcomePage';
import Courses from './components/Courses';
import MyCourse from './components/MyCourse'
import Sections from './components/Sections';
import Header from './components/Header';
import Homepage from './components/Homepage';
import HowWeWork from './components/howWeWork';
import HeaderAuth from './components/HeaderAuth';
import Headersignup from './components/HeaderSignup';
import firebase from 'firebase';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin'
import CreateCourse from './components/CreateCourse';
import quizData from './components/quizData.json';
// import firebaseConfig from './firebase.config';
import CreateSection from './components/CreateSection';
import courseData from './components/coursesData';
// import config from './Firebase';
import Show from './components/Show';
import Display from './components/showSections';
import Single from './components/singleCourse';
// var mainApp = firebase.initializeApp(firebaseConfig);
// var secondaryApp = firebase.initializeApp({config},"secondary");
// firebase.initializeApp(config);

class App extends Component {
constructor(props){
  super(props);
  this.state={
    data:[],
    quiz:quizData,
    score:0,
    responses:0,
    authorized:true,
    courseData,
    user:''
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
    
    
      // console.log(this.state.user)
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
                <HeaderAuth />
                
                <Register />
              </React.Fragment>
            )} />
            <Route  path='/courses' render={props =>(
              <React.Fragment>
                {/* <Artist data={this.state.artistData}/> */}
                <Headersignup {...props} name={this.state.user}/>
                <Show user={this.state.user}/> 
  
              </React.Fragment>
            )} />
            <Route path='/:userId/MyCourse' render={props=>(
              <React.Fragment>
              <Headersignup {...props} name={this.state.user}/>
              <MyCourse {...props} user={this.state.user}/>
              {/* <Courses courses={this.state.courseData}/>   */}
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
 
                 <Route  path='/:courseId/Sections' render={props =>(
                  <React.Fragment>

                    <Headersignup {...props} name={this.state.user} />
                    <Display {...props}/>
                    {/* <Single data={this.state.courseData} {...props}/>   */}
                  </React.Fragment>
                )} />
                <Route  path='/:courseId/:videoId/Sections' render={props =>(
                  <React.Fragment>
                    <Headersignup {...props} name={this.state.user} />
                   <Display {...props}/>
                   {/* <Single data={this.state.courseData} {...props}/> */}
                  </React.Fragment>
                )} />  
                {/* <Route path='/quiz' render={props =>(
          <React.Fragment>
            <Headersignup  {...props} name={this.state.user}/>
            <div className="quizcontainer">
              <div className="title">Quiz</div>
              { this.state.responses < 3 &&
                this.state.quiz.map((courseId)=>(
                courseId.questions.map((question)=>(
                  <QuestionBox question={question.question} option={question.options} key={question.question_id} selected={answer => this.computeAnswer(answer,question.answer)}/>
                ))
                ))}
              {this.state.responses === 3 ? (<Result response={this.state.responses}score={this.state.score} playAgain={this.playAgain}/>) : null}
            </div>
          </React.Fragment>
        )} /> */}
        <Route path='/:userId/course/:courseId/addQuiz' render={props => (
          <React.Fragment>
            <Headersignup {...props} name={this.state.user}/>
            <Addquiz {...props} userId={this.state.user} />
          </React.Fragment>
        )} />
         <Route path='/:courseId/takequiz' render={props =>(
          <React.Fragment>
            <Headersignup  {...props} name={this.state.user}/>
            <div className="quizcontainer">
              {/* <div className="title">Quiz</div> */}
              <Showing {...props} userId={this.state.user}/>
            </div>
          </React.Fragment>
        )} />
        <Route path='/show/:id' component={Show} />
       
          </Switch>
        </Router>
       
      </div>
    );
  }
}
export default App;













