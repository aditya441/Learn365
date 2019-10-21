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
              <span class="_sidebar--title-content--tLGxZ">
                <span class="_sidebar--arrow--2Hns-">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 5 32 25">
                      <path
                        d="M20.589 23.84l-10.175-7.13c-.422-.297-.541-.903-.265-1.356a.947.947 0 0 1 .276-.292L20.6 8.152c.425-.29.99-.153 1.259.304.092.157.141.338.141.524v14.04c0 .542-.409.98-.912.98a.868.868 0 0 1-.5-.16z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </i>
                </span>
                Sections>
              </span>
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
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default Sections;
