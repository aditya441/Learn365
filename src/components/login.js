import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'
// import { history } from 'react-router'
import firebase from 'firebase';
// import Headersignup from './HeaderSignup';
import HeaderAuth from './HeaderAuth'
// import Welcome from './welcomePage';
// import firebaseConfig from '../firebase.config';
// firebase.initializeApp(firebaseConfig);
class Login extends Component {
constructor(props){
    super(props)

    this.state={
        email:'',
        pass:'',
        
        
    }
    this.emailChanged=this.emailChanged.bind(this);
    this.passChanged=this.passChanged.bind(this);
    this.loginClicked=this.loginClicked.bind(this);
}
    emailChanged=(e)=>{

        this.setState({email: e.target.value})
    }
    passChanged=(e)=>{

        this.setState({pass: e.target.value})
    }
    
    

loginClicked=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.pass).then((u)=>{
 console.log(u.user.displayName);
        console.log(this.props.history);
window.location='./welcome'


    }).catch((error)=>{
        console.log(error)
        alert('invalid detail');
    })
}
    
    

    
    

   


    render () {
        return (
            <div >
                <HeaderAuth />
                <div className="login-container d-flex align-items-center justify-content-center">
                <form className="login-form text-center">
                    <h4 className="mb-5 text-uppercase loginText">Login</h4>
                    <div className="form-group">
                        <input type="email" onChange={this.emailChanged} name="email" className="form-control rounded-pill form-control-lg " placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={this.passChanged} name="pass"className="form-control rounded-pill form-control-lg " placeholder="Password"/>
                    </div>
                    <div className="forgot-link d-flex align-items-center justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember"/>
                            <label htmlFor="remember">Remember Password</label>
                        </div>

                        <a href="#">Forgot Password</a>
                   </div>
                   <button type="submit"onClick={this.loginClicked} className="btn btn-custom btn-block text-uppercase rounded-pill btn-lg mt-5 ">Login</button>
                   <p className="mt-3 font-weight-normal">Don't have an account ? <Link to="/signup"><strong>Register Now</strong></Link></p>
               </form>
           </div>
           </div>

        //                 <div className="FormField">
        //                     {/* <Link to='/welcome'> */}
        //                     <button type='submit' onClick={this.loginClicked}className="FormField__Button">Log In</button> 

        //                     {/* </Link> */}
        //                 </div>

        //             </form>
        //         </div>

        //     </div>  
        // </div>
            
        
        )
    }
}
export default Login;