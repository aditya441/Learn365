import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../App.css';


export class HeaderHomePage extends Component {
    render() {
        return (
          <nav className="headerHomePage navbar navbar-expand-md  navbar-light sticky-top">
          <a className="navbar-brand" href="#">Learn365</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navb" className="navbar-collapse collapse hide">
            {/* <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul> */}
        
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/signup'>
                <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to='/login'>
                <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}


export default HeaderHomePage
