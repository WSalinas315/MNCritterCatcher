import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FiEdit, FiInfo } from 'react-icons/fi';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Card } from '@mui/material';
import './ProfilePage.css';


export default function ProfilePage(props) {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize history
  const history = useHistory();

  // Pull user and sightings information from store
  const user = useSelector((store) => store.user);
  const count = useSelector((store) => store.sightingCount.sightingCount);
  const animalCount = useSelector((store) => store.sightingCount.animalCounts);

  // fetches sighting count from database
  useEffect(() => {
    dispatch({ type: 'FETCH_COUNT', payload: user.id });
    dispatch({ type: 'FETCH_ANIMAL_COUNTS', payload: user.id });
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


      <h2>Sighting Counts</h2>
      <Card sx={{backgroundColor: 'teal', m: '7%', textAlign: 'left'}}>
      {/* Sightings Count */}
      <h3>Total : {count.sighting_count}</h3>

      {/* Unique Sightings Count */}
      <h3> Unique : {count.unique_count}</h3>
      </Card>

      <Card sx={{backgroundColor: 'gray', m: '7%', textAlign: 'left'}}>

        {/* Mammal Sightings Count */}
        <h3> Mammals: {animalCount.Mammal}</h3>

        {/* Bird Sightings Count */}
        <h3> Birds: {animalCount.Bird}</h3>

        {/* Bird Sightings Count */}
        <h3> Fish: {animalCount.Fish}</h3>

        {/* Bird Sightings Count */}
        <h3> Reptiles & Amphibians: {animalCount.Reptile}</h3>
      </Card>
    </div>
  );
}