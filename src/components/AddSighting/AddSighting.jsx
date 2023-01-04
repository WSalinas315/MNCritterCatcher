import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, FormControl, TextField } from '@mui/material';
import './AddSighting.css';

export default function AddSighting(props) {

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // initialize variables from store
  // const subtypes = useSelector(store => store.filterSearch.subtypes);
  // const families = useSelector(store => store.filterSearch.families);
  // const speciesNames = useSelector(store => store.filterSearch.species);

  // Initialize local state
  const [caption, setCaption] = useState('');
  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [family, setFamily] = useState('');
  const [species, setSpecies] = useState('');

  // function to set subType state and dispatch fetch families
  const getSubtypes = (event) => {
    setType(event.target.value);
    // dispatch({type: 'FETCH_FAMILIES', payload: event.target.value});
  }

  // function to set subType state and dispatch fetch families
  const getFamilies = (event) => {
    setSubType(event.target.value);
    // dispatch({type: 'FETCH_FAMILIES', payload: event.target.value});
  }

  // function to set families state and dispatch fetch species
  const getSpecies = (event) => {
    setFamily(event.target.value);
    // dispatch({type: 'FETCH_SPECIES', payload: event.target.value});
  }

  // function to set species state and dispatch selected species to filterSearch reducer
  const selectSpecies = (event) => {
    setSpecies(event.target.value);
    // dispatch({type:'SET_SELECTED', payload: event.target.value});
  }



  return (
    <div>

      {/* Page Head */}
      <div className='ref-menu'>
        {/* Close Button */}
        <div className='ref-menu-icon-container' onClick={() => history.goBack()}>
          <FiX className='ref-menu-icon' />
        </div>
        {/* Species Name */}
        <div className='ref-page-title'>
          <h1>Add A Sighting</h1>
        </div>
      </div>

      {/* Form fields for adding a new sighting */}
      <div className='sighting-form'>

        {/* Caption */}
        <FormControl>
          <TextField
            value={caption}
            label="Caption"
            variant="outlined"
            onChange={(event) => setCaption(event.target.value)}
          />
        </FormControl>

        {/* Image Upload */}
        <h3>Image Upload Here</h3>

        {/* Animal Type Drop Down */}
        <FormControl fullWidth >
          <InputLabel id="add-type">Animal Type*</InputLabel>
          <Select
            required
            id="add-type"
            label="Animal Type"
            value={type}
            onChange={(event) => getSubtypes(event)}
          >
            <MenuItem value={'Bird'}>Bird</MenuItem>
            <MenuItem value={'Mammal'}>Mammal</MenuItem>
          </Select>
        </FormControl>

        {/* Animal Subtype Drop Down */}
        <FormControl fullWidth>
          <InputLabel id="add-subtype">Animal Subtype*</InputLabel>
          {type == '' ?
            <Select
              disabled
              required
              id="add-subtype"
              label="Animal Subtype"
              value={subType}
            ></Select>
            :
            <Select
              required
              id="add-subtype"
              label="Animal Subtype"
              value={subType}
              onChange={(event) => getFamilies(event)}
            >
              {/* {subtypes.map((subtype, i) => {
              return(<MenuItem key={i} value={subtype.subtype}>{subtype.subtype}</MenuItem>)
            })} */}
            </Select>
          }
        </FormControl>

        {/* Animal Family Drop Down (disabled if Subtype is not selected) */}
        <FormControl fullWidth>
          <InputLabel id="add-family">Animal Family*</InputLabel>
          {subType == '' ?
            <Select
              disabled
              required
              id="add-family"
              label="Animal Family"
              value={family}
            ></Select>
            :
            <Select
              required
              id="add-family"
              label="Animal Family"
              value={family}
              onChange={(event) => getSpecies(event)}
            >
              {/* {families.map((family, i) => {
              return(<MenuItem key={i} value={family.family}>{family.family}</MenuItem>)
            })} */}
            </Select>
          }
        </FormControl>

        {/* Animal Species Drop Down (disabled if Family is not selected) */}
        <FormControl fullWidth>
          <InputLabel id="add-species">Animal Species*</InputLabel>
          {family == '' ?
            <Select
              disabled
              required
              id="add-species"
              label="Animal Species"
              value={species}
            ></Select>
            :
            <Select
              required
              id="add-species"
              label="Animal Species"
              value={species}
              // onChange={(event) => setSpecies(event.target.value)}
              onChange={(event) => selectSpecies(event)}
            >
              {/* {speciesNames.map((name, i) => {
              return(<MenuItem key={i} value={name.name}>{name.name}</MenuItem>)
            })} */}
            </Select>
          }
        </FormControl>
        
        {/* GeoLocation Tagging */}
        <h3>GeoLocation Select Here</h3>

        {/* View Entry button (disabled if form is not completely filled out) */}
        <Box textAlign="center" >
          {species ?
            <Button 
              variant='contained'
              // onClick={() => history.push(`/reference/${species}`)}
              sx={{ width: "140px" }}
            >
              View Entry
            </Button>
            :
            <Button disabled variant='contained' sx={{ width: "140px" }}>Submit</Button>
          }
        </Box>
      </div>



    </div>
  );
}