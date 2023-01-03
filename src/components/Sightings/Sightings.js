import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FiPlus } from 'react-icons/fi';
import InputAdornment from '@mui/material/InputAdornment';
import './Sightings.css';


export default function Sightings(props) {

  // Initialize local state
  const [sightingFilter, setSightingFilter] = useState('');


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
        <div className='add-icon-container' onClick={() => history.goBack()}>
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