import { useAuth0 } from '@auth0/auth0-react';
import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
function Login (props){

    const {isAuthenticated,loginWithRedirect,getAccessTokenSilently,user}=useAuth0();
    useEffect(async () => {
        if(isAuthenticated)
            return;
        try{
            console.log(await getAccessTokenSilently());
            console.log(user);
        }catch(err){
            console.log(err);
            loginWithRedirect();
        }
    },[]);

    if(isAuthenticated){
        return (
            <>
                <h1>You logged in successfully!</h1>
                <Link to='/home'>Back To App</Link>
            </>
        )
    }
    else
    return <h1>you should be logging in instead of seeing this.</h1>
}

export default Login;