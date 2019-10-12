import React, { Component } from "react";
import CreateSection from "./CreateSection";
import './../course.css';
class CreateCourse extends Component {
  state = {
    onClick: []
  };

  handleChange = () => {
    this.setState({ onClick: this.state.onClick.concat([1]) });
  };

  render() {
    return (
        <div className='course-body'>

      <div className='course'>
     
        <div className="course-title">
          <label htmlFor="" className='col-xs-2 course-name'>Give a name of your Course</label>{" "}
          <input type="text" className='form-control col-xs-6 course-input'  placeholder="Enter course title" />
          <input type="text" className='form-control col-xs-6 course-input'  placeholder="Description of course" />
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

        
      </div>
            </div>
    );
  }
}

export default CreateCourse;
