import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Courses extends Component {
    render () {
        return (
            <div id="wrapper">
                <div className="overlay">
                    <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                        <ul className="nav sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">Sections</a>
                            </li>
                            <div className="FormField">
                            <Link to='/video'>
                            <li> <a href="#">section1</a></li>
                            </Link>
                            
                        </div>
                            {/* <li> <a href="#">section1</a></li> */}
                            
                        </ul>
                    </nav>
                    
                </div>
                {/* <div className="col-sm-4 center">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/TLPF07YMME0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> 
                </div> */}
            </div>
        )
    }
}
export default Courses;