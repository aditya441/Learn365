import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div className="login-container d-flex align-items-center justify-content-center">
                <form className="login-form text-center">
                    <h4 className="mb-5 text-uppercase loginText">Login</h4>
                    <div className="form-group">
                        <input type="email" className="form-control rounded-pill form-control-lg" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password"/>
                    </div>
                    <div className="forgot-link d-flex align-items-center justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember"/>
                            <label for="remember">Remember Password</label>
                        </div>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn btn-custom btn-block text-uppercase rounded-pill btn-lg mt-5">Login</button>
                    <p className="mt-3 font-weight-normal">Don't have an account ? <Link to="/signup"><a href="#"><strong>Register Now</strong></a></Link></p>
                </form>

            </div>
        //     <div>
        //     <div className="App__Form">
        //         <div className="FormTitle">
        //             <h3>Sign In</h3>
        //             {/* <a href="#" className="FormTitle__Link">Sign In</a> */}
        //         </div>
        //         <div className="FormCenter">
        //             <form className="FormFields" onSubmit={this.handleSubmit}>
        //             <div className="FormField">
        //                     <label className="FormField__Label" htmlFor="email">E-Mail</label>
        //                     <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
        //                 </div>

        //                 <div className="FormField">
        //                     <label className="FormField__Label" htmlFor="password">Password</label>
        //                     <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
        //                 </div>

        //                 <div className="FormField">
        //                     <Link to='/welcome'>
        //                     <button className="FormField__Button">Sign In</button> 

        //                     </Link>
        //                 </div>

        //             </form>
        //         </div>

        //     </div>  
        // </div>

            
        
        )
    }
}
export default Login;