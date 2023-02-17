import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { GiDuck, GiSquirrel, GiSandSnake } from 'react-icons/gi';
import { IoFishSharp } from 'react-icons/io5';
import './Search.css';

export default function Search(props) {

  // Initialize local state
  const [textSearch, setTextSearch] = useState('');
  // const [textInputSearch, setTextInputSearch] = useState('');

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

  // dispatch to update animal type in filterSearch reducer and move to speciesSelect page
  const selectFish = () => {
    dispatch({ type: 'SET_TYPE', payload: 'Fish' });
    history.push('/search/fish');
  }

  // dispatch to update animal type in filterSearch reducer and move to speciesSelect page
  const selectReptiles = () => {
    dispatch({ type: 'SET_TYPE', payload: 'Reptile' });
    history.push('/search/reptile');
  }

  // function for selecting an animal from the search box and directing to its detailed page
  const selectBySearch = (species) => {
    dispatch({ type: 'SET_SELECTED', payload: species });
    // console.log('SELECT BY SEARCH PARAM:', species);
    setTextSearch(species);
    dispatch({ type: 'FETCH_ANIMAL_DATA', payload: species });
    history.push(`/reference/${species}`);
  }

  return (
    <div className='search-body'>
      {/* Page Title */}
      <h1 className='h1-center'>Discover Animals Around You</h1>

      {/* Search by text */}
      <div className='search-box'>
        <h3 className='h3-search-page'>Begin searching with a keyword, e.g., duck</h3>
        <Stack className='margin-center' spacing={2} sx={{ width: 250 }}>
          <Autocomplete
            id="free-solo-demo"
            InputValue={textSearch}
            freeSolo
            options={animalList.map((option) => option.name)}
            onChange={(event) => { selectBySearch(event.target.textContent) }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </div>

      {/* Search via filters */}
      <div className='filter-select'>
        <h3 className='h3-search-page'>or select an animal type:</h3>

        {/* Bird search button */}
        <div className='bird-select'>
          <GiDuck className='animal-icon' />
          <Button
            variant="contained"
            onClick={() => selectBirds()}
            sx={{ width: "220px", backgroundColor: "#1EA1C9" }}>
            Birds
          </Button>
        </div>

        {/* Mammal search button */}
        <div className='mammal-select'>
          <GiSquirrel className='animal-icon' />
          <Button
            variant="contained"
            onClick={() => selectMammals()}
            sx={{ width: "220px", backgroundColor: "#1EA1C9" }}>
            Mammals
          </Button>
        </div>

        {/* Fish search button */}
        <div className='fish-select'>
          <IoFishSharp className='animal-icon' />
          <Button
            variant="contained"
            onClick={() => selectFish()}
            sx={{ width: "220px", backgroundColor: "#1EA1C9" }}>
            Fish
          </Button>
        </div>

        {/* Reptile & Amphibian search button */}
        <div className='reptile-select'>
          <GiSandSnake className='animal-icon' />
          <Button
            variant="contained"
            onClick={() => selectReptiles()}
            sx={{ width: "220px", backgroundColor: "#1EA1C9" }}>
            Reptiles & Amphibians
          </Button>
        </div>

      </div>
    </div>
  );
}