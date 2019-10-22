import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videos extends Component {
  constructor(props) {
    super(props);
  }
  state = {
      key: 'hello',
      name: this.props.name,
      chkbox: false
    // url: "https://www.youtube.com/embed/FN5Qi2GnyxM"
  }
  render() {
    return (
      <div> 
        {/* {this.props.videos.map(video => (
            <h5>{video.videoName}</h5>
        ))} */}
        
        
        {this.props.section.videos.map(video => (
          <div> 
            {console.log(this.props.checked)}
            
            <ul className="collapse list-unstyled" id={this.props.section.key}>
                <span className="video-box"><input type="checkbox" checked={this.props.checked} onChange={this.handleChangeChk}/>
                <a href={`/${this.props.id}/${video.videoId}/Sections`} title={video.videoName}>
                {video.videoName}
              </a>
              </span>
              </ul>
          </div>
          ))}  
      </div>
    );
   }
}

export default Videos;