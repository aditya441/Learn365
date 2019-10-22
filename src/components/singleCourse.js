import React, { Component } from 'react';
import Sections from './Sections';
class Single extends Component {
    state = {
        id: this.props.match.params.courseId,
        videoId: this.props.match.params.videoId
    }
    render () {
        return (
            <div>
                {/* {console.log(this.props.match.params.videoId)} */}
               {this.props.data.map(course => (
                   <div>
                       {this.state.id === course.course_id && (
                           <Sections id={this.state.id} sections={course.sections} videoId={this.state.videoId}/>
                       )}  
                   </div>   
               ))}
            </div>
        )
    }
}
export default Single;




