import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Learner extends Component {
    render () {
        return (
            <div className="learner">
                <h3>Welcome! Enjoy Learning!</h3>
                    <p>Learn course of your wish</p>
                <div className="row justify-content-around">
                    <div className="col wf">
                        <h3>The Ultimate Drawing Course - Beginner to Advanced</h3>
                        <p>Draw objects out of your head</p>
                        <p>Draw realistic light and shadow</p>
                        <p>Understand the fundamentals of Art</p>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-primary">view the course</button>
                            </Link>
                        </div>
                        {/* <button type="button" class="btn btn-primary">view the course</button> */}
                        </div>
                    <div className="col wf">
                        <h3>Landing Page Design From Scratch</h3>
                        <p>Design a high converting landing page from scratch without a single line of code</p>
                        <p>Double or triple your landing page conversion rates by applying the principles of clarity</p>
                        {/* <p>Run a A/B tests to guarantee a conversion</p> */}
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-primary">view the course</button>
                            </Link>
                        </div>
                        {/* <button type="button" class="btn btn-primary">view the course</button> */}
                        </div>
                    <div className="col wf">
                        <h3>The Science of Leadership</h3>
                        <p>Discover a groundbreaking model of Leadership that will help me manage myself and others</p>
                        <p>Recognize how our genetic programming influences our behavior.</p>
                        <div className="FormField">
                            <Link to='/Courses'>
                            <button type="button" class="btn btn-primary">view the course</button>
                            </Link>
                        </div>
                        {/* <button type="button" class="btn btn-primary">view the course</button> */}
                    </div>    
                </div>
            </div>
        )
    }
}
export default Learner;