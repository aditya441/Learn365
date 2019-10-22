import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import firebase from 'firebase';
// var   secondaryApp = firebase.initializeApp({config},"secondary");
// import firestore from 'firebase/firebase-firestore';

// import fireConfig from '../Firebase';
// var secondaryApp = firebase.initializeApp(fireConfig,"secondary");

// import secondaryApp from '../Firebase';


class Show extends Component {
  constructor(props) {
    super(props);
    // this.ref = secondaryApp.firestore().collection('courses');
    this.ref = firebase.firestore().collection('courses');
    this.unsubscribe = null;
    this.state = {
      courses: [],
      courseId: ''
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const courses = [];
    querySnapshot.forEach((doc) => {
      const { courseName,courseDesc } = doc.data();
      courses.push({
        key: doc.id,
        doc, // DocumentSnapshot
        courseName,
        courseDesc
       
      });
    });
    this.setState({
     courses
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <nav className="course-header" style={{marginLeft:'-150px'}} >
          <h3>Welcome</h3>
          <tr className="course-header-list">
            <th style={{fontWeight:'bolder'}}>All Courses</th>
            
            <th><Link to={`/${this.props.user.displayName}/MyCourse/`}> My Courses</Link></th>
           
          </tr>
        </nav>          
        <div className="main-box">
          {this.state.courses.map(board =>
            <div className="box">
              <div className="card-image">
              <img src="https://i.udemycdn.com/course/240x135/1036600_93c4_5.jpg" alt="How to Set your Course Goals: Official Udemy Course" width="240" height="135"></img>
              </div>
              <span className="course-body"> 
              <h7><Link to={`/show/${board.key}`}>{board.courseName}</Link></h7>
              {/* <p>{board.courseDesc}</p> */}
              <p>Learn 365 Team,Official Learn 365 Instructor Account</p>
              </span> 
              
              <div className="course-footer">
              {/* <div className="progress">
                 <p>progress bar</p>
              </div> */}
              <Link to={`/${board.key}/Sections`}>
              <button type="button" class="btn btn-danger btn-sm">Start Course</button>
              </Link>
              
              {/* <a href={`/${board.key}/Sections`} class="btn btn-custom btn-default btn-sm">START COURSE</a> */}
              </div>
            </div>        
          )}    
        </div>
        
      </div>
     
            
      // {/* <div class="container">
      //   <div class="panel panel-default">
      //     <div class="panel-heading">
      //       <h3 class="panel-title">
      //         BOARD LIST
      //       </h3>
      //     </div>
      //     <div class="panel-body">
           
      //       <table class="table table-stripe">
      //         <thead>
      //           <tr>
      //             <th>Title</th>
      //             <th>Description</th>
      //             <th>Author</th>
      //           </tr>
      //         </thead>
              // <tbody>
              //   {this.state.courses.map(board =>
              //     <tr>
              //       <td><Link to={`/show/${board.key}`}>{board.courseName}</Link></td>
              //       <td>{board.courseDesc}</td>
                   
              //     </tr>
              //   )}
              // </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div> */}
    );
  }
}

export default Show;