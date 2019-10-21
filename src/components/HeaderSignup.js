import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import userDummyPic from "../user.png";

class HeaderSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }
  render() {
    return (
      // <div className="container">

      <nav className="headerHomePageSignup navbar navbar-expand-md navbar-dark">
        <Link to="/" className="signup navbar-brand" href="#">
          Learn365
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
          aria-expanded="true"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
          <ul className="nav navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to='/signup'
               className="nav-link" href="#">
                  <span className="fas fa-user"></span> Sign Up
                  
              </Link>  
            </li>
            <li className="nav-item">
                <Link to='/login'
              className=" nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login 
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/'
               onClick={()=> firebase.auth().signOut()} className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Sign Out
              </Link>
            </li>
            */}
            <li className="nav-item">
              <div className="dropdown">
                <div className="dropdown-toggle" data-toggle="dropdown" style={{ cursor: "pointer" }}>
                  <img
                    src={userDummyPic}
                    alt="user-dummy-pic"
                    className="userDummyPic"
                    style={{ cursor: "pointer" }}
                  />
                  <span className="userName" style={{ cursor: "pointer" }}>
                    {" "}
                    {this.props.name.displayName}
                  </span>
                </div>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <Link
                    to="/"
                    onClick={() => firebase.auth().signOut()}
                    className="dropdown-item"
                    href="#"
                  >
                    <span className="fas fa-sign-in-alt"></span> Sign Out
                  </Link>
                  {/* <a
                   className="dropdown-item"
                   onClick={this.logout}
                   href="/login"
                 >
                   Log out
                 </a> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      // </div>
    );
  }
}

export default HeaderSignup;
