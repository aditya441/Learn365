import React, { Component } from 'react';
// import { BrowserRouter as Router,Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import Welcome  from './welcomePage'; 
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
class Register extends Component {

state={
    isSignedIn:false
};
uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };
componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user =>{
        this.setState({ isSignedIn: !!user});
    })
}
    render () {
        return (
            <div className='signup-form'>
                {this.state.isSignedIn ? (
                    <Redirect to='./welcome'></Redirect>
                   
                    
                    ):(
                        <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                        />
                    )}
                
            </div>

        //     <div>

        //     <div className="App__Form">
        //         <div className="FormTitle">
        //             <h3>SignUp</h3>
        //             {/* <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#"
        //             className="FormTitle__Link FormTitle__Link--Active">Sign Up</a> */}
        //         </div>
        //         <div className="FormCenter">
        //             <form className="FormFields" onSubmit={this.handleSubmit}>
        //                 <div className="FormField">
        //                     <label className="FormField__Label" htmlFor="name">Full Name</label>
        //                     <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
        //                 </div>

        //                 <div className="FormField">
        //                     <label className="FormField__Label" htmlFor="password">Password</label>
        //                     <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
        //                 </div>

        //                 <div className="FormField">
        //                     <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
        //                     <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"/>
        //                 </div>

        //                 {/* <div className="FormField">
        //                     <label className="FormField__CheckboxLabel">
        //                     <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/>I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
        //                     </label> 
        //                 </div> */}

        //                 <div className="FormField">
                        
        //                     <Link to='/login'>
        //                     <button className="FormField__Button mr-20">Sign Up</button> 

        //                    <a href="#" className="FormField__Link">I'm already member</a>
        //                     </Link>
        //                 </div>

        //             </form>
        //         </div>

        //     </div>  
        // </div>
            
        
        )
    }
}
export default Register;