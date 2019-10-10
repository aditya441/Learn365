import React, { Component } from 'react'
import '../App.css';


export class HeaderHomePage extends Component {
    render() {
        return (
          <nav class="headerHomePage navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          <a class="navbar-brand" href="#">Learn365</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navb" class="navbar-collapse collapse hide">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
        
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#"><span class="fas fa-user"></span> Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span class="fas fa-sign-in-alt"></span> Login</a>
              </li>
            </ul>
          </div>
        </nav>
        )
    }
}


export default HeaderHomePage
