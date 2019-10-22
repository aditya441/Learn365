import React, { Component } from 'react';
import Section from "./singleSection";
import secondaryApp from '../Firebase';

class Display extends Component {
    constructor(props) {
      super(props);
      this.ref = secondaryApp.firestore().collection('sections').where("courseId", '==', this.props.match.params.courseId);
      console.log(this.ref)
      this.unsubscribe = null;
      this.state = {
        sections: [],
        videoName: "",
        url: "",
        expanded: false,
        checked: false
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
    }

    // componentDidUpdate(prevProps,prevState) {
     
    //     console.log(prevState,this.state)
    // }
    render() {
      return (
        <div className="wrapper" id="wrapper">
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
          <nav id="sidebar">
            <h3 class="_sidebar--header--2BaH_">
              <a href="/courses">
                  <h11>Sections</h11>
              </a>
              <p>currently playing: {this.state.videoName}</p>
            </h3>
            {this.state.sections.map(section => (
              <Section checked={this.state.checked} id={section.courseId} section={section} />
            ))}
          </nav>
        </div>        
      )
    }
}
export default Display;