import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
function Login (props){
    const {isAuthenticated,loginWithRedirect,error,isLoading}=useAuth0();
    if(isAuthenticated){
        return (
            <>
                <h1>You logged in successfully!</h1>
                <Link to='/home'>Back To App</Link>
            </>
        )
    }
    else if(isLoading){
        return <LoadingComponent/>
    }
    else if(error){
        return <h1>can not log in</h1>
    }
    else{
        loginWithRedirect();
    }
}

export default Login;