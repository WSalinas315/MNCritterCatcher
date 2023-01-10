import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import { GiDuck, GiSquirrel } from 'react-icons/gi';
import './Search.css';


export default function Search(props) {

  // Initialize local state
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // Animal names from store
  const animalList = useSelector(store => store.animalList);

  // fetches animal list from database
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMAL_LIST' })
  }, []);

  // dispatch to update animal type in filterSearch reducer and move to speciesSelect page
  const selectBirds = () => {
    dispatch({ type: 'SET_TYPE', payload: 'Bird' });
    history.push('/search/birds');
  }

  // dispatch to update animal type in filterSearch reducer and move to speciesSelect page
  const selectMammals = () => {
    dispatch({ type: 'SET_TYPE', payload: 'Mammal' });
    history.push('/search/mammals');
  }

  return (
    <div className='search-body'>
      {/* Page Title */}
      <h1>Discover Animals Around You</h1>

      {/* Search by text */}
      {/* <div className='search-box'>
        <h3>Begin searching with a keyword, e.g., duck</h3>
        <TextField
          value={searchQuery}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div> */}

      <div className='search-box'>
        <h3>Begin searching with a keyword, e.g., duck</h3>
        <Stack className='search-bar' spacing={2} sx={{ width: 250 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={animalList.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="freeSolo" />} 
          />
        </Stack>
      </div>


      {/* Search via filters */}
      <div className='filter-select'>
        <h3>or select an animal type:</h3>
        {/* Bird search button */}
        <div className='bird-select'>
          <GiDuck className='animal-icon' />
          <Button
            variant="contained"
            // onClick={() => history.push('/search/birds')}
            onClick={() => selectBirds()}
            sx={{ width: "125px" }}>
            Birds
          </Button>
        </div>
        {/* Mammal search button */}
        <div className='mammal-select'>
          <GiSquirrel className='animal-icon' />
          <Button
            variant="contained"
            //onClick={() => history.push('/search/mammals')}
            onClick={() => selectMammals()}
            sx={{ width: "125px" }}>
            Mammals
          </Button>
        </div>
      </div>
    </div>
  );
}