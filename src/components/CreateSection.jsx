import React, { Component } from "react";
import AddVedio from "./AddVedio";
import firebase from "firebase";
// import { Link } from "react-router-dom";
class CreateSection extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("sections");
    this.state = {
      // onClick: [],
      sectionId: [],
      courseId: this.props.match.params.courseId,
      sectionName: "",
      videos: [],
      vedioName: "",
      vedioUrl: "",
      courseName: "",
      sections: [],
      name: "",
      data: [],
      v: [],
      saveClicked: false,
      addSection:false
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
  addClicked = () => {
    // console.log("add clicked");
    this.state.videos.push({
      vedioName: this.state.vedioName,
      vedioUrl: this.state.vedioUrl
    });
    this.state.v.push({
      vedioName: this.state.vedioName,
      vedioUrl: this.state.vedioUrl
    });
    this.setState({ vedioName: "", vedioUrl: "" });
    
  };
  addSection=()=>{
    this.setState({ saveClicked: true });
    this.setState({addSection:true});
    
    this.setState({ name: this.state.sectionName });
    // document.querySelector('.addVideo').style.display='block'
  }
  
  handleChange = () => {
    this.setState({ onClick: this.state.onClick.concat([1]) });
  };
  onContinue = () => {
    window.location = "/welcome";
  };

  onSubmit = e => {
    e.preventDefault();
      // this.setState({ saveClicked: false });
    this.setState({addSection:false})
    
    // this.setState({ name: this.state.sectionName });
    // this.setState({videos: this.state.v})
    const { courseId, sectionName, videos } = this.state;
    // this.state.addedSection.push(this.state.sectionName);
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
          // sectionId:docRef.id,
        });
        this.state.sectionId.push(docRef.id);
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
   
    this.fetchSection();
    const ref = firebase
      .firestore()
      .collection("courses")
      .doc(this.state.courseId);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          courseName: doc.data()
        });
      } else {
        console.log("no such document");
      }
    });
    document.querySelector('.course-input').addEventListener('keypress', e=>{
      if(e.keyCode === 13){
        
          if (document.querySelectorAll(".course-input").value === "") {
            document.querySelector(".errorMsg").style.display = "block";
            document.querySelector(".errorMsg").textContent =
              "Please give all the details";
            // alert('please input something');
            
          } else{

            this.addSection();
          }
        // alert('hello');
      }
    })
  }
  fetchSection = () => {
    firebase
      .firestore()
      .collection("sections")
      .where("courseId", "==", this.state.courseId)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("no macthing documents");
          return;
        }
        snapshot.forEach(doc => {
          // console.log('docData : ',doc.data());
          let data = doc.data();
          // console.log(data.sectionName);
          // this.state.sections.push(data.sectionName)
          this.state.data.push(data);
        });
      })
      .catch(err => {
        console.log("error getting documents", err);
      });
  };

  render() {
    return (
      <div className="course-body">
        {/* <button  onClick={this.addSection}type='' className='btn btn-danger submit add-section'> add section</button> */}
        <div className="courseName">
          {console.log("data: ", this.state.data)}
          {/* {console.log('sections ',this.state.sections)} */}
          <p className="course_name">
            {" "}
            Course : {this.state.courseName.courseName}
          </p>
          <div className="sections">
            {this.state.saveClicked === true && (
              <div className="single-section">
                <ul className="section-list">
                  <li>
                    {this.state.name}
                    {console.log("v : ", this.state.v)}
                  </li>
                </ul>
                {this.state.v.map(video => (
                  <div className="vedioName">
                    <ul>
                      <li>
                        <span className="v">Video </span>
                        &nbsp; {video.vedioName}
                        <span className="u"> Url </span>
                        &nbsp; {video.vedioUrl}
                        {console.log("VideoName :", video.vedioUrl)}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
             )} 
            {this.state.data.map(section => (
              <div className="single-section">
                {console.log("single section ", section)}
                <ul className="section-list">
                  <li>{section.sectionName}</li>
                </ul>

                {console.log("vedio : ", section.videos)}

                {section.videos.map(video => (
                  <div className="vedioName">
                    <ul>
                      <li>
                        <span className="v">Video </span>
                        &nbsp; {video.vedioName}
                        <span className="u"> Url </span>
                        &nbsp; {video.vedioUrl}
                      </li>
                    </ul>

                    {console.log("video", video)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="course">
          <div className="form-group ">
            <label htmlFor="" className="col-xs-2 section-name">
              Section
            </label>
            {/* <div className='form-inline '> */}
            <input
              type="text"
              name="sectionName"
              value={this.state.sectionName}
              onChange={this.onSectionChange}
              className="form-control col-xs-6 course-input"
              placeholder="Enter section title"
              required
            />
            <div
              className="errorMsg p-3 my-3 bg-danger text-light"
              style={{ display: "none" }}
            ></div>
            {/* <button
              onClick={this.addSection}
              type="button"
              className="btn btn-danger addSection"
            >
               add 
            </button> */}
            {/* </div> */}
            {/* <button
              onClick={this.handleChange}
              type="button"
              className="btn btn-link addVideo"
              style={{display:'none'}}
            >
              + add video
            </button> */}
          </div>

          {/* {this.state.onClick.map(() => ( */}
            {this.state.addSection===true && (

            <AddVedio
              value={this.state}
              titleChanged={this.onTitleChange}
              urlChanged={this.onUrlChange}
              addClicked={this.addClicked}
            />
            )}
          {/* ))} */}
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
              type="submit"
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
