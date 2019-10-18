import React, { Component } from "react";

class AddVedio extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      vedioName:'',
      vedioUrl:''
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
          {/* <form onSubmit={this.props.addClicked}> */}

        <div className="vedio-detail">
          <div className="form-inline vedio-title">
            <label htmlFor="" className="col-xs-2 vedio-title">
              Video title
            </label>{" "}
            <input
                value={this.props.value.vedioName}
              onChange={this.props.titleChanged}
              //   {() => {
            // this.props.handleChange(this.props.vedioName);
            //   }}
              type="text"
              className="form-control col-xs-6 course-input"
              name="vedioName"
              placeholder="Enter video title"
              required
              />
          </div>
          <div className="form-inline">
            <label htmlFor="" className="col-xs-2 vedio-url">
              Video Url
            </label>{" "}
            <input
                
              value={this.props.value.vedioUrl}
              onChange={this.props.urlChanged}
            //   {()=>{
            //       this.props.handleChange(this.props.vedioUrl);
            //   }}
            type="text"
            className="form-control col-xs-6 course-input"
            name="vedioUrl"
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
              {/* </form> */}
      </div>
    );
  }
}

export default AddVedio;
