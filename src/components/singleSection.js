import React, { Component } from "react";
import Videos from "./videos";
class Section extends Component {
  state = {
    key: 'hello'
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* {console.log(this.props.section)} */}
        {console.log(this.props.checked)}
        <ul className="list-unstyled components">
            <li className="active">
              <a href={`#${this.props.section.key}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{this.props.section.sectionName}</a>
              
              <Videos checked={this.props.checked} section={this.props.section}  id={this.props.id} />
            </li>
        </ul>
      </div>
    );
  }
}
export default Section;
