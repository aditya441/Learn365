import React, { Component } from "react";

class Addvideo extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      videoName:'',
      videoUrl:''
    };
  }

// a=(e)=>{
//     const state= this.state;
//     state[e.target.name]=e.target.value;
//     this.setState(state) 
// }

  render() {
    return (
      <div>
          <form >

        <div className="video-detail">
          <div className="form-inline video-title">
            <label htmlFor="" className="col-xs-2 video-title">
              Video title
            </label>{" "}
            <input
                value={this.props.value.videoName}
              onChange={this.props.titleChanged}
              //   {() => {
            // this.props.handleChange(this.props.videoName);
            //   }}
              type="text"
              className="form-control col-xs-6 course-input"
              name="videoName"
              placeholder="Enter video title"
              required
              />
          </div>
          <div className="form-inline">
            <label htmlFor="" className="col-xs-2 video-url">
              Video Url
            </label>{" "}
            <input
                
              value={this.props.value.videoUrl}
              onChange={this.props.urlChanged}
            //   {()=>{
            //       this.props.handleChange(this.props.videoUrl);
            //   }}
            type="url"
            pattern="https?://.+"
            className="form-control col-xs-6 course-input"
            name="videoUrl"
            placeholder="Enter video url"
              required
              />
          </div>
          <button
              onClick={this.props.addClicked}
              type="submit"
              className="btn btn-light add"
              >
              {" "}
              add
            </button>
        </div>
              </form>
      </div>
    );
  }
}

export default Addvideo;
