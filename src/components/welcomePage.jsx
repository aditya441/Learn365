import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Welcome extends Component{

    render(){
        return(
            <div className="container my-container">
                    <h3>Welcome!</h3>
                    <p>You can browse through the courses</p>
                   
                <div className="row justify-content-around align-items-center">
                    <div className="col-md-4 wf order-3">
                        <h3>Become an Instructor</h3>
                        <p>Teach what you Love.Learn365 gives you the tools to create an online course.</p>
                        <div className="FormField">
                            <Link to='/Learner'>
                            <button type="button" class="btn btn-primary">Start Teaching</button>
                            </Link>
                        </div>
                        {/* <button type="button" class="btn btn-primary">Start Teaching</button> */}
                        </div>
                    <div className="col-md-4 wf order-4">
                        <h3>Be a Learner</h3>
                        <p>Get unlimited access to the 100's of courses that Learn365 provides for you and your Team.</p>
                        <div className="FormField">
                            <Link to='/Learner'>
                            <button type="button" class="btn btn-primary">Start Leaning</button>
                            </Link>
                        </div>
                        {/* <button type="button" class="btn btn-primary">Start Leaning</button> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Welcome;