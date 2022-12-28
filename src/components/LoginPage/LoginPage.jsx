import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();
  const logo = require("./CritterCatcherLogo.png");

  return (
    <div>
      {/* App logo */}
      <img src={logo} />
      
      {/* Login form */}
      <LoginForm />

      {/* Registration Link */}
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {history.push('/registration')}}>
          Register New Account
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
