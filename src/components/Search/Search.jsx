import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import './Search.css';


export default function Search(props) {
  // Initialize store
  const store = useSelector((store) => store);
  // Initialize local state
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='search-body'>
      <h1>Discover Animals Around You</h1>
      <div className='search-box'>
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
      </div>
      <div className='filter-select'>
        <h3>or select an animal type:</h3>
        <div className='bird-select'>
          <Button 
            variant="contained"
            sx={{width: "125px"}}>
              Birds
            </Button>
        </div>
        <div className='mammal-select'>
          <Button 
            variant="contained" 
            sx={{width: "125px"}}>
              Mammals
            </Button>
        </div>
      </div>
    </div>
  );
}