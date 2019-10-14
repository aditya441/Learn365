import React, { Component } from "react";
import CreateSection from "./CreateSection";
import './../course.css';
import firebase from 'firebase';
// import firestore from 'firebase/firestore';
// firebase.firestore().settings(settings);
// import { Redirect } from 'react-router-dom'
// import firebaseConfig from '../firebase.config';
// firebase.initializeApp(firebaseConfig);


class CreateCourse extends Component {
  constructor(){
      super();
      this.ref =  firebase.firestore().collection('courses');
      this.state = {
          courseName:'',
          courseDesc:'',
          
        onClick: []
      };
  }
  onChange=(e)=>{
      const state=this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
  }
  onSubmit=(e)=>{
      e.preventDefault();
      const { courseName, courseDesc} = this.state;
      this.ref.add({
          courseName,
          courseDesc
      }).then((docRef)=>{
          this.setState({
              courseName:'',
              courseDesc:''
          });

          alert('course created')
          this.props.history.push('/')
      })
      .catch((error)=>{
          console.error(error);
      });
      
  }

  handleChange = () => {
    this.setState({ onClick: this.state.onClick.concat([1]) });
  };

  render() {
    //   const {courseName,courseDesc }=this.state;
    return (
        <div className='course-body'>
            {/* <form onSubmit={this.onSubmit}> */}

            
      <div className='course'>
     
        <div className="course-title">
          <label htmlFor="" className='col-xs-2 course-name'>Give a name of your Course</label>{" "}
          <input type="text" name='courseName' onChange={this.onChange} className='form-control col-xs-6 course-input'  placeholder="Enter course title" />
          <input type="text" name='courseDesc'  onChange={this.onChange} className='form-control col-xs-6 course-input'  placeholder="Description of course" />
          <button
            onClick={this.handleChange}
            type="button"
            className="btn btn-link"
          >
            + add section
          </button>
        </div>
        {this.state.onClick.map(() => (
            <CreateSection />
            
            ))}
          <button onClick={this.onSubmit} type='submit' className='btn btn-danger submit'> Submit</button>

        
      </div>
      {/* </form> */}
            </div>
    );
  }
}

export default CreateCourse;
