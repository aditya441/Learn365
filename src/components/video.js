import React, { Component } from "react";

class Video extends Component {
    render () {
        return (
            <div className="container-fluid">
                <h2> video tutorials</h2>
                <div className="row">
                    <div className="col-sm-4 center">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/TLPF07YMME0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>   
                    </div>
                    <div className="col-sm-4 center">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/t7n39cQMGNs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;