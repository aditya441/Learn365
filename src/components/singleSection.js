import React, { Component } from "react";
import Videos from "./videos";
class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="list-unstyled components">
            <li className="active">
              <a href="#section1Submenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{this.props.section.name}</a>
              <Videos videos={this.props.section.videos} name={this.props.section.name} id={this.props.id}/>
            </li>
        </ul>
      </div>
    );
  }
}
export default Section;
