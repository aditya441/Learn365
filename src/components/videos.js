import React, { Component } from "react";
import { Link } from "react-router-dom";

class Videos extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    url: "https://www.youtube.com/embed/FN5Qi2GnyxM"
  }
  render() {
    return (
      <div> 
        {this.props.videos.map(video => (
          <div>
            <ul className="collapse list-unstyled" id="section1Submenu">
              <a href={`/${video.video_id}/Sections`} title={video.name}>{video.name}</a>
              </ul>
          </div>
          ))}  
      </div>
    );
   }
}
export default Videos;