import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Courses extends Component {  
    render () {
        return (
            <div> 
                {this.props.courses.map(object => (
                    <div className="shadow p-2 mb-5 bg-red rounded">
                        <h3 className="vds-heading--h9 vds-spacing--stack-5x"><i class="vds-icon vds-icon--lg vds-color--green" role="img" aria-hidden="true"><svg viewBox=" -1 5 32 32"><path d="M6.766 21h8.468L11 13.944 6.766 21zm5.091-9.514l6 10A1 1 0 0 1 17 23H5a1 1 0 0 1-.857-1.514l6-10a1 1 0 0 1 1.714 0zm13 5l3 5A1 1 0 0 1 27 23h-6a1 1 0 0 1-.857-1.514l3-5a1 1 0 0 1 1.714 0zM22.767 21h2.467L24 18.944 22.766 21zm-2.91-5.486a1 1 0 0 1-1.714 0l-3-5A1 1 0 0 1 16 9h6a1 1 0 0 1 .857 1.514l-3 5zM20.234 11h-2.468L19 13.056 20.234 11z" fill-rule="nonzero"></path></svg></i>Course</h3>
                        <h4>{object.title}</h4>
                        <p>{object.description}</p>
                        <Link to={`/${object.course_id}/Sections`}>
                        <button className="btn1 btn-danger">click here</button>
                        </Link>
                    </div>  
                ))}
            </div>       
        )   
    }
}
export default Courses;