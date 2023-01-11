import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { GiDuck, GiSquirrel } from 'react-icons/gi';
import './Search.css';

export default function Search(props) {

  // Initialize local state
  const [textSearch, setTextSearch] = useState('');
  const [textInputSearch, setTextInputSearch] = useState('');

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

  const selectBySearch = (species) => {
    dispatch({type:'SET_SELECTED', payload: species});
    console.log('SELECT BY SEARCH PARAM:', species);
    setTextSearch(species);
    dispatch({type:'FETCH_ANIMAL_DATA', payload: species});
    history.push(`/reference/${species}`);
  }

  return (
    <div className='search-body'>
      {/* Page Title */}
      <h1>Discover Animals Around You</h1>

      {/* Search by text */}
      <div className='search-box'>
        <h3>Begin searching with a keyword, e.g., duck</h3>
        <Stack className='search-bar' spacing={2} sx={{ width: 250 }}>
          <Autocomplete
            id="free-solo-demo"
            InputValue={textSearch}
            freeSolo
            options={animalList.map((option) => option.name)}
            onChange={(event) => {selectBySearch(event.target.textContent)}}
            renderInput={(params) => <TextField {...params} />} 
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
            onClick={() => selectMammals()}
            sx={{ width: "125px" }}>
            Mammals
          </Button>
        </div>
      </div>
    </div>
  );
}