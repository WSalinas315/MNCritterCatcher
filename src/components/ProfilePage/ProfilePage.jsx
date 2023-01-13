import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FiEdit, FiInfo } from 'react-icons/fi';
import LogOutButton from '../LogOutButton/LogOutButton';
import './ProfilePage.css';


export default function ProfilePage(props) {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

  // Pull user and sightings information from store
  const user = useSelector((store) => store.user);
  const count = useSelector((store) => store.sightingCount);

  // fetches sighting count from database
  useEffect(() => {
    dispatch({ type: 'FETCH_COUNT', payload: user.id })
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
        {/* <div className='menu-icon-container' onClick={() => history.push('/about')}>
          <FiInfo className='menu-icon' />
        </div> */}
        <LogOutButton className="btn" />
      </div>

      {/* Profile Picture / Generic Icon */}
      <div className='avatar'>
        {user.profile_image ? <img className='profileAvatar' src={user.profile_image} /> : <BsPersonCircle className='profileAvatar' />}
      </div>

      {/* Username */}
      <h1>{user.username}</h1>

      {/* Sightings Count */}
      <h2>Sightings: {count}</h2>

      {/* Challenges Count (Stretch) */}
      {/* <h2>Challenges Completed: </h2> */}

      {/* Badges Display Case (Stretch) */}

    </div>
  );
}