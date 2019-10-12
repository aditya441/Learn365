import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import  { useCallback, useContext } from "react";
// import {  Redirect } from "react-router";
// // import app from "./firebase";
// import { AuthContext } from "../firebase/auth";
class Login extends Component {

    // Login = ({ history }) => {
    //     const handleLogin = useCallback(
    //       async event => {
    //         event.preventDefault();
    //         const { email, password } = event.target.elements;
    //         try {
    //           await app
    //             .auth()
    //             .signInWithEmailAndPassword(email.value, password.value);
    //           history.push("/");
    //         } catch (error) {
    //           alert(error);
    //         }
    //       },
    //       [history]
    //     );
    //     const { currentUser } = useContext(AuthContext);
    //     if (currentUser) {
    //       return <Redirect to="/Welcome" />;
    //     }
    // }
    render () {
        return (
            <div>
            <div className="App__Form">
                <div className="FormTitle">
                    <h3>Log In</h3>
                    {/* <a href="#" className="FormTitle__Link">Sign In</a> */}
                </div>
                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail </label>
                            <input  type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input  type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
                        </div>

                        <div className="FormField">
                            <Link to='/welcome'>
                            <button  className="FormField__Button">Log In</button> 

                            </Link>
                        </div>

                    </form>
                </div>

            </div>  
        </div>
            
        
        )
    }
}
export default Login;