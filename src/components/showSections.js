import React, { Component } from 'react';
import Section from "./singleSection";
// import secondaryApp from '../Firebase';
import firebase from 'firebase'

class Display extends Component {
    constructor(props) {
      super(props);
    //   this.ref = secondaryApp.firestore().collection('sections').where("courseId", '==', this.props.match.params.courseId);
      this.ref = firebase.firestore().collection('sections').where("courseId", '==', this.props.match.params.courseId);
      console.log(this.ref)
      this.unsubscribe = null;
      this.state = {
        sections: [],
        videoName: "",
        url: "",
        expanded: false,
        checked: false,
        courseName:'',
      };
    }
    onCollectionUpdate = (querySnapshot) => {
      const sections = [];
      querySnapshot.forEach((doc) => {
        const { courseId,sectionName,videos } = doc.data();
        sections.push({
          key: doc.id,
          doc, // DocumentSnapshot
          courseId,
          sectionName,
          videos
        });
      });
      this.setState({
        sections,
        url: sections[0].videos[0].videoUrl,
      });
      this.state.sections.map(section => {
        section.videos.map(video => {
          if(video.videoId === this.props.match.params.videoId){
          this.setState({url: video.videoUrl,videoName: video.videoName,expanded: true})
          }
        })
      
      });
    }
    
    componentDidMount() { 
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

    const ref = firebase
    .firestore()
    .collection("courses")
    .doc(this.props.match.params.courseId);
    ref.get().then(doc => {
    if (doc.exists) {
      this.setState({
        courseName: doc.data()
      });
    } else {
      console.log("no such document");
    }
  });
    }
    onContinue = () => {
      window.location = `/${this.props.match.params.courseId}/takequiz`;
    };

    // componentDidUpdate(prevProps,prevState) {
     
    //     console.log(prevState,this.state)
    // }
    render() {
      return (
        <div className="wrapper" id="wrapper">
          <nav id="sidebar">
            <h3 class="_sidebar--header--2BaH_">
              <span style={{marginLeft:'10px'}}>
                {this.state.courseName.courseName}
                </span>
              
              <p style={{marginLeft:'10px'}}>currently playing: {this.state.videoName}</p>
            </h3>
            {this.state.sections.map(section => (
              <Section checked={this.state.checked} id={section.courseId} section={section} />
            ))}
            <button onClick={this.onContinue} className='btn btn-link'> Take Quiz</button>
          </nav>
          <div className="video-content" id="video-content">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                width="560"
                height="215"
                src={this.state.url}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>        
      )
    }
}
export default Display;