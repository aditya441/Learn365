import React, { Component } from "react";
import programming  from './programming.jpg'
import mentor from './learn365Mentor.png'

export class mywelcome extends Component {
  render() {
    return (
      <div className="welcome-container">
        <div className="welcome-new">
          <div className="welcome_detail">
          {/* <p className="preffix h6 blue strong mb-0" > The school of </p> */}
          <h1 className="title h1 light slate">Be a Learner</h1>
          <p className="description regular slate">Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. Whether you’re new to coding, adding more skills, or advancing your career,</p>
          <button  className="button--primary ng-star-inserted btn btn-danger  myvutton">
          <span  class="bold">Get Started</span>
          </button>
          </div>
          <div className="Image">
              <img src={programming} alt="unavailable"/>
          </div>
        </div>
        <div className="welcome-new">
          <div className="welcome_detail">
          {/* <p className="preffix h6 blue strong mb-0" > The school of </p> */}
          <h1 className="title h1 light slate">Become a Learn365 Mentor</h1>
          <p className="description regular slate">Make a difference by becoming a Udacity mentor.Build subject-matter expertise and deepen your own personal knowledge.Learn how to motivate others and provide guidance to aspiring learners</p>
          <button  className="button--primary ng-star-inserted btn btn-danger  myvutton">
          <span  class="bold">Get Started</span>
          </button>
          </div>
          <div className="Image">
              <img src={mentor} alt="unavailable"/>
          </div>
        </div>
      </div>
    );
  }
}

export default mywelcome;
