import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {BsPersonCircle} from 'react-icons/bs';
import EditIcon from '@mui/icons-material/Edit';
import {FiEdit, FiInfo} from 'react-icons/fi';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import './ProfilePage.css';


export default function ProfilePage(props) {

  // initialize store
  const store = useSelector((store) => store);

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

  // Pull user and sightings information from store
  const user = useSelector((store) => store.user);
  // const sightings = useSelector((store) => store.sightings);

  // fetches subtypes from database
  useEffect(() => {
    dispatch({ type: 'FETCH_SIGHTINGS'})
  }, []);

  return (
    <div className='profile-page'>

      {/* Page Title, Edit Button, About Button */}
      <div className='top-menu'>
        {/* Edit Profile */}
        <div className='menu-icon-container' onClick={() => history.push('/profile/edit')}>
          <FiEdit className='menu-icon' />
        </div>
        {/* Page Title */}
        <div className='page-title'>
          <h1>Profile</h1>
        </div>
        {/* About */}
        <div className='menu-icon-container' onClick={() => history.push('/about')}>
          <FiInfo className='menu-icon' />
        </div>
      </div>

      {/* Profile Picture / Generic Icon */}
      <div className='avatar'>
        <BsPersonCircle className='profileAvatar'/>
      </div>

      {/* Username */}
      <h1>{user.username}</h1>

      {/* Sightings Count */}
      <h2>Sightings: </h2>

      {/* Challenges Count (Stretch) */}
      <h2>Challenges Completed: </h2>

      {/* Badges Display Case (Stretch) */}

    </div>
  );
}