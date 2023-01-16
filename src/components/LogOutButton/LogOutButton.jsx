import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    <IconButton
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
      sx={{margin: "20px", backgroundColor: "#1EA1C9", borderRadius:"4px", color:"white", boxShadow:"1"}}
    >
      <LogoutIcon />
    </IconButton>
  );
}

export default LogOutButton;
