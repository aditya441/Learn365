import React, { Component } from "react";

class Video extends Component {
    render (){
        return (
            <div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#section1Submenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">section 1: creating Promises</a>
                        <ul className="collapse list-unstyled" id="section1Submenu">
                            <a href="#" data-target="#videoModal" data-toggle="modal">1. Course Introduction</a>
                           </ul>
                    </li>
                </ul>
            </div>                
        );
    }
}

export default Video;