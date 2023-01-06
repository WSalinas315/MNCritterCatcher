import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FiPlus } from 'react-icons/fi';
import InputAdornment from '@mui/material/InputAdornment';
import './Sightings.css';

export default function Sightings(props) {

  // Initialize user data from store
  const user = useSelector(store => store.user);

  // Initialize local state
  const [sightingFilter, setSightingFilter] = useState('');

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // fetches sightings from database
  useEffect(() => {
    dispatch({ type: 'FETCH_SIGHTINGS', payload: user.id })
  }, []);

  return (
    <div className='sightings-body'>

      {/* Search field and Add button */}
      <div className='sightings-head'>
        {/* Search field */}
        <div className='sightings-search'>
          <TextField
            value={sightingFilter}
            fullWidth
            variant="outlined"
            placeholder='Search Your Sightings'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(event) => setSightingFilter(event.target.value)}
            sx={{ margin: "10px 15px" }}
          />
        </div>
        {/* Add sighting button */}
        <div className='add-icon-container' onClick={() => history.push('/sightings/add')}>
          <FiPlus className='sightings-add-icon' />
        </div>
      </div>

      {/* Scrollable sighting feed */}
      <div className='sightings-feed'>
        <h1>Sightings</h1>

        

        {/* map sighting feed */}
        {/* <SightingCard /> */}
      </div>

    </div>
  );
}