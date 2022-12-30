import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register New User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      {/* <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div> */}
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
      {/* <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div> */}
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
      {/* <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div> */}
      <div>
        <Button variant="contained" type="submit" color="success">Register</Button>
      </div>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {history.push('/login')}}>
          Login Page
        </button>
      </center>
    </form>
  );
}

export default RegisterForm;
