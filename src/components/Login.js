import { useAuth0 } from '@auth0/auth0-react';
import React,{useEffect, useState} from 'react';
import {Alert,
Row,
Col,
Container} from 'reactstrap';

import LoadingComponent from './LoadingComponent';
function Login (props){

    const {isAuthenticated,loginWithRedirect,getAccessTokenSilently,user}=useAuth0();
    useEffect(async () => {
        if(isAuthenticated)
            return;
        try{
            await getAccessTokenSilently();
        }catch(err){
            console.log(err);
            loginWithRedirect();
        }
    },[]);

    if(isAuthenticated){
        return (
            <Container>
                <Row>
                    <Col xs='12'>
                        <Alert color='success' className='mt-5'>
                            <h1>You logged in successfully!</h1>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }
    else
        return <LoadingComponent/>
}

export default Login;