import React, { Component } from "react";
import AddVedio from "./AddVedio";
import firebase from "firebase";
// import { Link } from "react-router-dom";
class CreateSection extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("sections");
    this.state = {
      onClick: [],
    
      courseId: this.props.match.params.courseId,
      sectionName: "",
      videos:[
        //   {
        //       vedioName:'',
        //       vedioUrl:''
        //     }
        ]
      };
    }

      

    
    onSectionChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
    };
    onChange = (e) => {
        // const state = this.state.videos;
        this.state.videos.push({vedioName: e.target.vedioName.value, vedioUrl:e.target.vedioUrl.value})
        // state[e.target.name] = e.target.value;
        // this.setState(state);
      };
    


  handleChange = () => {
    this.setState({ onClick: this.state.onClick.concat([1]) });
  };
  onContinue = () => {
    window.location = "/welcome";
  };

  onSubmit = e => {
    e.preventDefault();
    const { courseId, sectionName } = this.state;
    this.ref
      .add({
        courseId,
        sectionName
      })
      .then(docRef => {
        this.setState({
          sectionName: ""
        });
        // this.props.history.push(`/${this.props.user.displayName}/course/${courseId}/Sections`)
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <div className="course-body">
        {/* <button  onClick={this.addSection}type='' className='btn btn-danger submit add-section'> add section</button> */}
        <div className="course">
          <div className="form-group ">
            <label htmlFor="" className="col-xs-2 section-name">
              Section
            </label>
            {/* <button onClick={this.handleChange} type="button" className="btn btn-link">+ add section</button> */}
            <input
              type="text"
              name="sectionName"
              value={this.state.sectionName}
              onChange={this.onSectionChange}
              className="form-control col-xs-6 course-input"
              placeholder="Enter section title"
              required
            />
            <button
              onClick={this.handleChange}
              type="button"
              className="btn btn-link"
            >
              + add video
            </button>
          </div>

          {this.state.onClick.map(() => (
         <AddVedio  value={this.state} handleChanged={this.onChange}/> 
         ))} 
          <div className="a">
            <button
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-danger submit"
              data-toggle='modal'
              data-target='.exampleModelCenter'
            >
              {" "}
              Save
            </button>
            <button
              onClick={this.onContinue}
              type="button"
              className="btn btn-danger continue"
            >
              {" "}
              Continue
            </button>
          </div>
         
        </div>
      </div>
    );
  }
}

export default CreateSection;
