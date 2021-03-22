import React, { useState,useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button
} from 'reactstrap';

function LogoutButton(props) {

  const {getAccessTokenSilently,logout}=useAuth0();

  useEffect(async () => {
    const token=await getAccessTokenSilently();
    console.log(token);
    props.fetchPlayer(token);
},[]);


  return (
    <>
      <small>{props.activePlayer.player===null?"":props.activePlayer.player.userName}</small>
      <Button color='light' outline className='nav-link' onClick={(event) => {
        event.preventDefault();
        logout({ returnTo: window.location.origin });
      }}>
      <span className='fa fa-sign-out'></span> logout
      </Button>
    </>
  );
}

export default LogoutButton;
