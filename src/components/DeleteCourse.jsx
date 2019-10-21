
import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeleteCourse extends Component{

    render(){
      
        return(


<div key={this.props.id} className="box">
{/* {console.log(course)} */}

<div className="card-image">
  <img
    src="https://i.udemycdn.com/course/240x135/1036600_93c4_5.jpg"
    alt="How to Set your Course Goals: Official Udemy Course"
    width="240"
    height="135"
  ></img>
</div>
<span className="course-body">
  <h7>
    <Link to={`/show/${this.props.course.courseId}`}>{this.props.course.courseName}</Link>
  </h7>
  <p>Learn 365 Team,Official Learn 365 Instructor Acoount</p>
</span>

<div className="course-footer">
  <div className="progress">
    <p>progress bar</p>
  </div>
  <Link to={`/${this.props.course.courseId}/Sections`}>
    <button type="button" class="btn btn-danger btn-sm">
      Start Course
    </button>
  </Link>
  <button
    onClick={()=>this.props.deleteCourse(this.props.id)}
    style={{ marginLeft: "30px" }}
    type="button"
    class="btn btn-danger btn-sm"
  >
    Delete
  </button>
</div>
</div>
        )
    }
}


export default DeleteCourse;