import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Link} from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
function Login (props){
    const {isAuthenticated,loginWithRedirect,error,isLoading,getAccessTokenSilently,user,getAccessTokenWithPopup}=useAuth0();
    // if(isAuthenticated){
    //     return (
    //         <>
    //             <h1>You logged in successfully!</h1>
    //             <Link to='/home'>Back To App</Link>
    //         </>
    //     )
    // }
    // else if(isLoading){
    //     return <LoadingComponent/>
    // }
    // else if(error){
    //     return <h1>can not log in</h1>
    // }
    // else{
        setTimeout(()=>{
            getAccessTokenSilently()
            .then(token=>{console.log(token);alert(token)})
            .catch(err=>{
                console.log(err);
                alert(err.message);
                loginWithRedirect({
                    audience:"https://mazing.com",
                    // redirectUri:"http://localhost:3000/login"
                    redirectUri:"https://mazingame.com/login"
                });
            });
        },500)
        return <h1>............................</h1>;
    // }
}

export default Login;