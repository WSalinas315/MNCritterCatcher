import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import PublicIcon from '@mui/icons-material/Public';
import { BsSliders } from 'react-icons/bs';
import '../SightingList/SightingList';
import './Sightings.css';
import SightingList from '../SightingList/SightingList';

export default function Sightings(props) {

  // Initialize user data from store
  const user = useSelector(store => store.user);
  const publicToggle = useSelector(store => store.sighting.visibility);

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // fetches sightings from database depending on if public sightings is toggled on/off
  useEffect(() => {
    if (publicToggle == false) {
      dispatch({ type: 'FETCH_SIGHTINGS', payload: user.id })
    } else {
      dispatch({ type: 'FETCH_PUBLIC_SIGHTINGS', payload: user.id })
    }

  }, []);

  // Toggles sighting.visibility reducer's state and fetches public/private sightings lists
  const toggleVisibility = () => {
    if (publicToggle == false) { // here
      console.log('executing public dispatch');
      dispatch({ type: 'FETCH_PUBLIC_SIGHTINGS' });
      dispatch({ type: 'SET_VISIBILITY_PUBLIC' });
    } else {
      console.log('executing private dispatch');
      dispatch({ type: 'FETCH_SIGHTINGS', payload: user.id });
      dispatch({ type: 'SET_VISIBILITY_SELF' });
    }
  }

  return (
    <div className='sightings-body'>

      {/* Search field and Add button */}
      <div className='sightings-head'>
        {/* Public/Private toggle */}
        <div className='toggle-btn'>
          <ToggleButton
            value="check"
            color="info"
            selected={publicToggle}
            onChange={() => toggleVisibility()}
            sx={{ height: "56px", width: "56" }}
          >
            <PublicIcon /> Public Sightings
          </ToggleButton>
        </div>

        {/* Filters button */}
        {/* <div className='toggle-btn'>
          <ToggleButton
            value="check"
            color="info"
            sx={{ height: "56px", width: "56" }}
          >
            <BsSliders /> Filters
          </ToggleButton>
        </div> */}
      </div>

      {/* Scrollable sighting feed */}
      <div className='sightings-feed'>
        <h1 className='h1-center'>Sightings</h1>
        <SightingList />
      </div>
    </div>
  );
}