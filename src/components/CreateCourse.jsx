import React, { Component } from "react";
// import CreateSection from "./CreateSection";
import './../course.css';
import firebase from 'firebase';
// import firestore from 'firebase/firestore';
// firebase.firestore().settings(settings);
// import { Redirect } from 'react-router-dom'
// import firebaseConfig from '../firebase.config';
// firebase.initializeApp(firebaseConfig);


class CreateCourse extends Component {
  constructor(props){
      super(props);
      this.ref =  firebase.firestore().collection('courses');
      
      this.state = {
          courseName:'',
          courseDesc:'',
          userId:this.props.userId.uid,
        // onClick: []
      };
  }
  onChange=(e)=>{
      const state=this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const { courseName, courseDesc,userId} = this.state;
        this.ref.add({
            courseName,
            courseDesc,
            userId
        }).then((docRef)=>{
            console.log(docRef.id);
            this.setState({
                courseName:'',
                courseDesc:''
            });
            
            // alert('course created')
          this.props.history.push(`/${this.props.userId.displayName}/course/${docRef.id}/Sections`)
        })
        .catch((error)=>{
            console.error(error);
        });
        
    }
    
//   handleChange = () => {
//       this.setState({ onClick: this.state.onClick.concat([1]) });
//   };
  
  render() {
    // console.log(this.state.userId)
    //   const {courseName,courseDesc }=this.state;
    return (
        <div className='course-body'>
            {/* <form onSubmit={this.onSubmit}> */}

            
      <div className='course'>
     
        <div className="course-title">
          <label htmlFor="" className='col-xs-2 course-name'>Course Details</label>{" "}
          <input type="text" name='courseName' onChange={this.onChange} className='form-control col-xs-6 course-input'  placeholder="Enter course title" required />
          <input type="text" name='courseDesc'  onChange={this.onChange} className='form-control col-xs-6 course-input'  placeholder="Description of course" required  />
          {/* <button
            onClick={this.handleChange}
            type="button"
            className="btn btn-link"
          >
            + add section
          </button> */}
        </div>
        {/* {this.state.onClick.map(() => (
            <CreateSection />
            
            ))} */}
          <button onClick={this.onSubmit} type='submit' className='btn btn-danger submit'> Submit</button>

        
      </div>
      {/* </form> */}
            </div>
    );
  }
}

export default CreateCourse;
