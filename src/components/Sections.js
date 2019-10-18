import React, { Component } from "react";
import Section from './singleSection';

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    videoId: this.props.videoId,
    url: this.props.sections[0].videos[0].url,
  }
 
  componentDidMount=()=>{
    {this.props.sections.map(section => {
      section.videos.map(video => {
        if(parseInt(this.state.videoId) === video.video_id) {
          this.setState({url:video.url})
        } 
      })
    })}      
}
  render() {
    return (
      <div className="wrapper" id="wrapper">
        {console.log(this.state.videoId)}
        <nav id="sidebar">
          <div className="sidebar-header">
            <h4>Sections</h4>
          </div>
          {this.props.sections.map(object => (
            <Section id={this.props.id} section={object}/>  
          ))}
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
    );
  }
}
export default Sections;
