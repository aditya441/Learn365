import React, { Component } from 'react';

class Footer extends  Component {
    render () {
        return (
            <div>
                <h5>currently playing:</h5>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Footer;