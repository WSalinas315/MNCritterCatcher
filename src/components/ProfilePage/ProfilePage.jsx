import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FiEdit, FiInfo } from 'react-icons/fi';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
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
        <IconButton variant='contained' sx={{ margin: "20px", backgroundColor: "#1EA1C9", borderRadius:"4px", color:"white", boxShadow:"1" }} onClick={() => history.push('/profile/edit')}><EditIcon /></IconButton>

        {/* Page Title */}
        <div>
          <h1>Profile</h1>
        </div>

        {/* Logout button */}
        <LogOutButton className="btn" />
      </div>

      {/* Profile Picture / Generic Icon */}
      <div className='avatar'>
        {user.profile_image ? <img className='profileAvatar' src={user.profile_image} /> : <BsPersonCircle className='profileAvatar' />}
      </div>

      {/* Username */}
      <h1>{user.username}</h1>

      {/* Sighting Count Title */}
      <h2 id='sighting-counts'>Sighting Counts</h2>

      <Card sx={{ backgroundColor: '#1ea1c930', m: '7%', textAlign: 'left', padding: '10px' }}>
        {/* Sightings Count */}
        <h3>Total : {count.sighting_count}</h3>

        {/* Unique Sightings Count */}
        <h3> Unique : {count.unique_count}</h3>
      </Card>

      <Card sx={{ backgroundColor: '#1ea1c930', m: '7%', textAlign: 'left', padding: '10px' }}>

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