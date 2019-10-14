import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'
// import { history } from 'react-router'
import firebase from 'firebase';
import Headersignup from './HeadenSignup';
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
            <div>
                < Headersignup />
            <div className="App__Form">
                <div className="FormTitle">
                    <h3>Log In</h3>
                    {/* <a href="#" className="FormTitle__Link">Sign In</a> */}
                </div>
                <div className="FormCenter">
                    <form className="FormFields" >
                    <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail </label>
                            <input onChange={this.emailChanged} type="email"   className="FormField__Input" placeholder="Enter your email" name="email"/>
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input onChange={this.passChanged} type="password"  className="FormField__Input" placeholder="Enter your password" name="password"/>
                        </div>

                        <div className="FormField">
                            {/* <Link to='/welcome'> */}
                            <button type='submit' onClick={this.loginClicked}className="FormField__Button">Log In</button> 

                            {/* </Link> */}
                        </div>

                    </form>
                </div>

            </div>  
        </div>
            
        
        )
    }
}
export default Login;