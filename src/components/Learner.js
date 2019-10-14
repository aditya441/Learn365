import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Learner extends Component {
    render () {
        return (
            // <div className="learner">
            //     <h2>Enjoy Learning!</h2>
            //     <h5 class="text-left">Top courses in IT & Software</h5>
            //     <div className="row justify-content-around align-items-center">
            //         {this.props.stories.map((story) => {
            //             return (
            //                 <div className="col-md-2 col order-1">
            //                     <h5>{story.title}</h5>
            //                     <div className="FormField">
            //                         <Link to='/Courses'>
            //                         <button type="button" class="btn btn-danger">view course</button>
            //                         </Link>
            //                     </div>
            //                 </div>    
            //             )    
            //         })}
            //     </div>
                
            // </div>


            <div className="learner">
                <h2>Enjoy Learning!</h2>
                <h5 class="text-left">Top courses in IT & Software</h5> 
                <div className="row justify-content-around align-items-center">
                    <div className="col-md-2 col order-1">
                        <h5>Linux Administration Bootcamp: Go from Beginner to Advanced</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>
                        
                        </div>
                    <div className="col-md-2 col order-2">
                        <h5>compTIA security+ Certification: The Total Course</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="col-md-2 col order-3">
                        <h5>The Complete Cyber Security Course:Anonymous Browsing!</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>     
                    </div>
                    <div className="col-md-2 col order-4">
                        <h5>Data Structures and Algorithms!</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>     
                    </div>

                </div>
                <h5 class="text-left">Top courses in Personal Development</h5> 
                <div className="row justify-content-around align-items-center"> 
                    <div className="col-md-2 col order-1">
                        <h5>Neuroplasticity: How To Rewire Your Brain</h5> 
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>
                        
                        </div>
                    <div className="col-md-2 col order-2">
                        <h5>Professional Life Coach Certification & Guide</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="col-md-2 col order-3">
                        <h5>Radiate Confidence: How to Create a 1000 Watt Presence</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>    
                    </div>
                    <div className="col-md-2 col order-3">
                        <h5>Management Skills: New Manager Training in Essential Skills</h5>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-danger">view course</button>
                            </Link>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
export default Learner;