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
    dispatch({ type: 'FETCH_SUBTYPES', payload: props.type })
  }, []);

  //initialize dispatch
  const dispatch = useDispatch();

  // initialize store
  const store = useSelector((store) => store);
  const subtypes = useSelector(store => store.filterSearch.subtypes);
  const families = useSelector(store => store.filterSearch.families);

  // initialize local states
  const [subType, setSubType] = useState('');
  const [family, setFamily] = useState('');
  const [species, setSpecies] = useState('');

  // function to set subType state and dispatch fetch families
  const getFamilies = (event) => {
    setSubType(event.target.value);
    dispatch({type: 'FETCH_FAMILIES', payload: event.target.value});
  }


  return (
    <div className='species-select-body'>
      <h1>Discover {props.type}s</h1>
      <div className='input-fields'>
        <FormControl fullWidth sx={{ marginTop: "20px" }}>
          {/* Animal Subtype Drop Down */}
          <InputLabel id="subtype">Animal Subtype*</InputLabel>
          <Select
            required
            id="subtype"
            label="Animal Subtype"
            value={subType}
            // onChange={(event) => setSubType(event.target.value)}
            onChange={(event) => getFamilies(event)}
          >
            {subtypes.map((subtype, i) => {
              return(<MenuItem key={i} value={subtype.subtype}>{subtype.subtype}</MenuItem>)
            })}
          </Select>
        </FormControl>

        {/* Animal Family Drop Down (disabled if Subtype is not selected) */}
        <FormControl fullWidth sx={{ marginTop: "30px" }}>
          <InputLabel id="family">Animal Family*</InputLabel>
          {subType == '' ?
            <Select
              disabled
              required
              id="family"
              label="Animal Family"
              value={family}
              // onChange={(event) => setFamily(event.target.value)}
            >
              {/* <MenuItem value={2}>Two</MenuItem> */}
            </Select>
            :
            <Select
              required
              id="family"
              label="Animal Family"
              value={family}
              onChange={(event) => setFamily(event.target.value)}
            >
              {families.map((family, i) => {
              return(<MenuItem key={i} value={family.family}>{family.family}</MenuItem>)
            })}
            </Select>
          }
        </FormControl>

        {/* Animal Species Drop Down (disabled if Family is not selected) */}
        <FormControl fullWidth sx={{ marginTop: "30px", marginBottom: "30px" }}>
          <InputLabel id="species">Animal Species*</InputLabel>
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


