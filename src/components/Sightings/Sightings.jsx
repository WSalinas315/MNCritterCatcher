import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import PublicIcon from '@mui/icons-material/Public';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FiPlus } from 'react-icons/fi';
import {BsSliders} from 'react-icons/bs';
import InputAdornment from '@mui/material/InputAdornment';
import '../SightingList/SightingList';
import './Sightings.css';
import SightingList from '../SightingList/SightingList';

export default function Sightings(props) {

  // Initialize user data from store
  const user = useSelector(store => store.user);

  // Initialize local state
  const [sightingFilter, setSightingFilter] = useState('');
  const [publicToggle, setPublicToggle] = useState(false);

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // fetches sightings from database
  useEffect(() => {
    dispatch({ type: 'FETCH_SIGHTINGS', payload: user.id })
  }, []);

  const toggleVisibility = () => {
    if (publicToggle == false) {
      console.log('executing public dispatch');
      dispatch({ type: 'FETCH_PUBLIC_SIGHTINGS' });
    } else {
      console.log('executing private dispatch');
      dispatch({ type: 'FETCH_SIGHTINGS', payload: user.id });
    }
    setPublicToggle(!publicToggle);
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

        {/* Search field */}
        {/* <div className='sightings-search'>
          <TextField
            value={sightingFilter}
            fullWidth
            variant="outlined"
            placeholder='Search Sightings'
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
        </div> */}
        <div className='toggle-btn'>
          <ToggleButton
            value="check"
            color="info"
            // selected={publicToggle}
            // onChange={() => toggleVisibility()}
            sx={{ height: "56px", width: "56" }}
          >
            <BsSliders /> Filters
          </ToggleButton>
        </div>

        {/* Add sighting button */}
        {/* <div className='add-icon-container' onClick={() => history.push('/sightings/add')}>
          <FiPlus className='sightings-add-icon' />
        </div> */}
      </div>

      {/* Scrollable sighting feed */}
      <div className='sightings-feed'>
        <h1>Sightings</h1>
        <SightingList />
      </div>
    </div>
  );
}