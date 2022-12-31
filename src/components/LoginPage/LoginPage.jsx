import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import './LoginPage.css';

function LoginPage() {
  // const history = useHistory();
  const logo = require("./CritterCatcherLogo.png");

  return (
    <div className="squirrel">
      {/* App logo */}
      <img src={logo} />

      {/* Login form */}
      <LoginForm />

      {/* Registration Link */}
      {/* <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {history.push('/registration')}}>
          Register New Account
        </button> */}
        {/* <Button variant="text" onClick={() => {history.push('/registration')}}>Register New Account</Button> */}
      {/* </center> */}
    </div>
  );
}

export default LoginPage;
