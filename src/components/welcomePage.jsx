

import React, { Component } from "react";
import programming  from '../components/quizComponents/programming.jpg'
import mentor from '../components/quizComponents/learn365Mentor.png'
import { Link } from 'react-router-dom';
import Headersignup from './HeaderSignup';

export class Welcome extends Component {
    state={
                user:this.props.user
    }
  render() {
    return (
        <div>
        <Headersignup name={this.state.user}/>
      <div className="welcome-container">
        <div className="welcome-new">
          <div className="welcome_detail">
          {/* <p className="preffix h6 blue strong mb-0" > The school of </p> */}
          <h1 className="title h1 light slate">Be a Learner</h1>
          <p className="description regular slate">Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. Whether you’re new to coding, adding more skills, or advancing your career,</p>
          <Link to='/Courses'>
          <button  className="button--primary ng-star-inserted btn btn-danger  myvutton">
          <span  class="bold">Get Started</span>
          </button>
          </Link>
          </div>
          <div className="Image">
              <img src={programming} alt="unavailable"/>
          </div>
        </div>
        <div className="welcome-new">
          <div className="welcome_detail">
          {/* <p className="preffix h6 blue strong mb-0" > The school of </p> */}
          <h1 className="title h1 light slate">Become a Learn365 Mentor</h1>
          <p className="description regular slate">Make a difference by becoming a Learn365 mentor.Build subject-matter expertise and deepen your own personal knowledge.Learn how to motivate others and provide guidance to aspiring learners</p>
          <Link to={`/${this.state.user.displayName}/createcourse`}>
          <button  className="button--primary ng-star-inserted btn btn-danger  myvutton">
          <span  class="bold">Get Started</span>
          </button>
          </Link>
          </div>
          <div className="Image">
              <img src={mentor} alt="unavailable"/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Welcome;
