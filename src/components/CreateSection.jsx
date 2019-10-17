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
      sectionId: [],
      courseId: this.props.match.params.courseId,
      sectionName: "",
      videos: [],
      vedioName: "",
      vedioUrl: "",
      courseName: "",
      sections: [],
      addedSection : ''
    };
  }


  onSectionChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  onTitleChange = e => {
    this.setState({ vedioName: e.target.value });
  };
  onUrlChange = e => {
    this.setState({ vedioUrl: e.target.value });
  };

  handleChange = () => {
    this.setState({ onClick: this.state.onClick.concat([1]) });
  };
  onContinue = () => {
    window.location = "/welcome";
  };

  onSubmit = e => {
    // e.preventDefault();
    this.state.videos.push({
      vedioName: this.state.vedioName,
      vedioUrl: this.state.vedioUrl
    });
    // this.setState({videos: this.state.v})
    const { courseId, sectionName, videos } = this.state;
    this.setState({addedSection : sectionName})
    this.ref
      .add({
        courseId,
        sectionName,
        videos
      })
      .then(docRef => {
        //   console.log(docRef)
        this.setState({
          sectionName: "",
          vedioName: "",
          vedioUrl: "",
          videos: [],
          sectionId:docRef.id
        });
        console.log(this.state.sectionId)
        const docref = firebase
      .firestore()
      .collection("sections")
      .doc(this.state.sectionId);
    docref.get().then(doc => {
        // console.log( 'section doc',doc);
      if (doc.exists) {
        // this.setState({
                this.state.sections.push(doc.data())
          // isLoading:false
        // });
      } else {
        console.log("no such document");
      }
    });
        // this.props.history.push(`/${this.props.user.displayName}/course/${courseId}/Sections`)
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    //for fecting course name
    const ref = firebase
      .firestore()
      .collection("courses")
      .doc(this.state.courseId);
    ref.get().then(doc => {
      //   console.log(doc);
      if (doc.exists) {
        this.setState({
          courseName: doc.data()
          // isLoading:false
        });
      } else {
        console.log("no such document");
      }
    });

    
  }
  render() {
    return (
      <div className="course-body">
        {/* <button  onClick={this.addSection}type='' className='btn btn-danger submit add-section'> add section</button> */}
        <div className="courseName">
          {console.log('sections ',this.state.sections)}
          <p className='course_name'> Course : {this.state.courseName.courseName}</p>
          <div className='sections'>

          {this.state.sections.map((section)=>(
              <div className='single-section'>
                  {console.log('single section ',section)}
                  <span>Section : </span>
                    {section.sectionName}
           </div>
         ))} 
         {/* <div className="single-section">
                <span>Section: </span>
                {this.state.addedSection}
         </div> */}
          </div>
        </div>
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
            <AddVedio
              value={this.state}
              titleChanged={this.onTitleChange}
              urlChanged={this.onUrlChange}
              addClicked={this.addClicked}
            />
          ))}
          <div className="a">
            <button
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-danger submit"
              data-toggle="modal"
              data-target=".exampleModelCenter"
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
