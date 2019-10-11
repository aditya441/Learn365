import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div>
            <div className="App__Form">
                <div className="FormTitle">
                    <h3>Sign In</h3>
                    {/* <a href="#" className="FormTitle__Link">Sign In</a> */}
                </div>
                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
                        </div>

                        <div className="FormField">
                            <Link to='/welcome'>
                            <button className="FormField__Button">Sign In</button> 

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