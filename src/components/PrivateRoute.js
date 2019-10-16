import React from 'react';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({ component: RouterComponent, authed,...rest}){

console.log(authed);
   
   return(
    <Route 
        {...rest}
        render={props =>
            authed===true ? (
                <RouterComponent {...props} />
            ) : (
                <Redirect to={'./login'} />
            )
        }
        />
        
   );

    }

    export default PrivateRoute;