import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function LoginButton(props) {
  return(
    <Link to='/login' className='nav-link'>
      <Button color='light' outline className='nav-link' ><span className='fa fa-sign-out'></span> login</Button>
    </Link>
  );
}

export default LoginButton;
