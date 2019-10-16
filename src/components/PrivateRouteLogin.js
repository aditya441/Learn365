import React from 'react';
import { Redirect,Route } from 'react-router-dom';

function PrivateRouteLogin({ component: RouterComponent, authed,...rest}){

console.log(authed);
   
   return(
    <Route 
        {...rest}
        render={props =>
            authed===true ? (
                <Redirect to={'./welcome'} />
                ) : (
                    <RouterComponent {...props} />
                    )
        }
        />
        
   );

    }

    export default PrivateRouteLogin;