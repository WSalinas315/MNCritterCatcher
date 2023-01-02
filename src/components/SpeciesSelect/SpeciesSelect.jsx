import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, FormControl } from '@mui/material';
import './SpeciesSelect.css';


export default function SpeciesSelect(props) {

  // fetches subtypes from database
  useEffect(() => {
    dispatch({ type: 'FETCH_SUB_TYPES' })
  }, []);

  //initialize dispatch
  const dispatch = useDispatch();

  // initialize store
  const store = useSelector((store) => store);

  // initialize local states
  const [subType, setSubType] = useState('');
  const [family, setFamily] = useState('');
  const [species, setSpecies] = useState('');


  return (
    <div className='species-select-body'>
      <h1>Discover {props.type}s</h1>
      <div className='input-fields'>
        <FormControl fullWidth sx={{ marginTop: "20px" }}>
          {/* Animal Sub-Type Drop Down */}
          <InputLabel id="sub-type">Animal Sub-Type</InputLabel>
          <Select
            required
            id="sub-type"
            label="Animal Sub-Type"
            value={subType}
            onChange={(event) => setSubType(event.target.value)}
          >
            <MenuItem value={1}>One</MenuItem>
          </Select>
        </FormControl>

        {/* Animal Family Drop Down (disabled if Sub-Type is not selected) */}
        <FormControl fullWidth sx={{ marginTop: "30px" }}>
          <InputLabel id="family">Animal Family</InputLabel>
          {subType == '' ?
            <Select
              disabled
              required
              id="family"
              label="Animal Family"
              value={family}
              onChange={(event) => setFamily(event.target.value)}
            >
              <MenuItem value={2}>Two</MenuItem>
            </Select>
            :
            <Select
              required
              id="family"
              label="Animal Family"
              value={family}
              onChange={(event) => setFamily(event.target.value)}
            >
              <MenuItem value={2}>Two</MenuItem>
            </Select>
          }
        </FormControl>

        {/* Animal Species Drop Down (disabled if Family is not selected) */}
        <FormControl fullWidth sx={{ marginTop: "30px", marginBottom: "30px" }}>
          <InputLabel id="species">Animal Species</InputLabel>
          {family == '' ?
            <Select
              disabled
              required
              id="species"
              label="Animal Species"
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            >
              <MenuItem value={3}>Three</MenuItem>
            </Select>
            :
            <Select
              required
              id="species"
              label="Animal Species"
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            >
              <MenuItem value={3}>Three</MenuItem>
            </Select>
          }
        </FormControl>

        {/* View Entry button (disabled if form is not completely filled out) */}
        <Box textAlign="center" >
          {species ? 
            <Button variant='contained' sx={{ width: "140px" }}>View Entry</Button>
            :
            <Button disabled variant='contained' sx={{ width: "140px" }}>View Entry</Button>
          }
        </Box>
      </div>
    </div>
  );
}


