import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  // Login function
  const login = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      {/* Username field */}
      <div>
        <TextField required
          fullWidth
          value={username}
          variant="outlined"
          label="Username"
          onChange={(event) => setUsername(event.target.value)}
          style={{ background: 'white' }}
        />
      </div>

      {/* Password field */}
      <div>
        <TextField required
          fullWidth
          value={password}
          variant="outlined"
          label="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          style={{ background: 'white' }}
        />
      </div>

      {/* Login Button */}
      <div>
        <Button variant="contained" type="submit" color="success">Log In</Button>
      </div>

      {/* Registration Link */}
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {history.push('/registration')}}>
          Register New Account
        </button>
      </center>
    </form>
  );
}

export default LoginForm;
