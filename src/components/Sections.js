import React, { Component } from "react";
import Section from "./singleSection";

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    videoId: this.props.videoId,
    url: this.props.sections[0].videos[0].url,
    count: 0,
    videoName: ""
  };

  componentDidMount = () => {
    {
      this.props.sections.map(section => {
        section.videos.map(video => {
          if (parseInt(this.state.videoId) === video.video_id) {
            this.setState({
              url: video.url,
              videoName: video.name,
              count: this.state.count + 1
            });
            // this.setState({count:this.state.count++})
          }
        });
      });
    }
  };
  render() {
    return (
      <div className="wrapper" id="wrapper">
        {console.log(this.state.videoId)}
        <nav id="sidebar">
          <h3 class="_sidebar--header--2BaH_">
            <a href="/courses">
                <h11>Sections</h11>
            </a>
            <p>currently playing: {this.state.videoName}</p>
          </h3>

          {/* <div className="sidebar-header">
            
            <h4>Sections</h4>
            <p>currently playing video  :   {this.state.videoName}</p>
            <h6>count: {this.state.count}</h6>
          </div> */}


          {this.props.sections.map(object => (
            <Section id={this.props.id} section={object} />
          ))}
        </nav>
        <div className="video-content" id="video-content">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              width="560"
              height="215"
              src={this.state.url}
              // {this.state.url}
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default Sections;
