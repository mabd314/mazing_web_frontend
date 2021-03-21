import { useAuth0 } from '@auth0/auth0-react';
import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
function Login (props){

    const {isAuthenticated,loginWithRedirect,error,isLoading,getAccessTokenSilently,user}=useAuth0();
    const {token,setToken}=useState("");
    useEffect(async () => {
        try{
            console.log(user);
            token=await getAccessTokenSilently();
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
    else if(isLoading){
        return <LoadingComponent/>
    }
    else if(error){
        return <h1>can not log in</h1>
    }
    else if(token==="error"){
        return <h1>token=error</h1>
    }
    else{
        return <h1>{token}</h1>;
    }
}

export default Login;