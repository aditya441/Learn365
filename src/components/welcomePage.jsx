import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Welcome extends Component{

    render(){
        return(
            <div className="welcome">
                    <h2>Welcome!</h2>
                    <h4>Educating all students to achieve today and tomorrow in a global community and economy.</h4> 
                <div className="row justify-content-around align-items-center">
                    <div className="col-md-4 wf2 order-3">
                        <h3>Become an Instructor</h3>
                        <p>Teach what you Love.Learn365 gives you the tools to create an online course.</p> 
                        <div className="FormField">
                            <Link to='/Learner'>
                            <button type="button" class="btn btn-danger">Start Teaching</button>
                            </Link>
                        </div>
                        
                        </div>
                    <div className="col-md-4 wf1 order-4">
                        <h2>Be a Learner</h2>
                        <p>Get unlimited access to the 100's of courses that Learn365 provides you.</p>
                        <div className="FormField">
                            <Link to='/Learner'>
                            <button type="button" class="btn btn-danger">Start Leaning</button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Welcome;