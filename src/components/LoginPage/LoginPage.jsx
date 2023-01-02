import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';

export default function LoginPage() {
  const logo = require("./CritterCatcherLogo.png");

  return (
    <div className="squirrel">
      {/* App logo */}
      <img src={logo} />

      {/* Login form */}
      <LoginForm />
    </div>
  );
}
