import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, FormControl, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './AddSighting.css';

export default function AddSighting(props) {

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // initialize variables from store
  const subtypes = useSelector(store => store.filterSearch.subtypes);
  const families = useSelector(store => store.filterSearch.families);
  const speciesNames = useSelector(store => store.filterSearch.species);
  const selected = useSelector(store => store.selectedAnimal);
  const autofill = useSelector(store => store.autofill);
  const user = useSelector(store => store.user);

  // Initialize local state
  const [caption, setCaption] = useState('');
  const [type, setType] = useState('');
  const [subType, setSubType] = useState('');
  const [family, setFamily] = useState('');
  const [species, setSpecies] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [visibility, setVisibility] = useState(false);
  const date = new Date().toISOString().slice(0,10);

  // POST sighting when Submit button is clicked and direct to sightings feed
  const submitSighting = () => {
    dispatch({
      type: 'NEW_SIGHTING',
      payload: {
        user_id: user.id,
        animal_id: selected.id,
        date: date,
        location: location,
        caption: caption,
        image: ('images/uploads/'+image),
        public: visibility
      }
    });
    history.push('/sightings');
  }

  // function to set subType state and dispatch fetch families
  const getSubtypes = (event) => {
    setType(event.target.value);
    dispatch({ type: 'SET_TYPE', payload: event.target.value });
    dispatch({ type: 'FETCH_SUBTYPES', payload: event.target.value });
  }

  // function to set subType state and dispatch fetch families
  const getFamilies = (event) => {
    setSubType(event.target.value);
    dispatch({ type: 'FETCH_FAMILIES', payload: event.target.value });
  }

  // function to set families state and dispatch fetch species
  const getSpecies = (event) => {
    setFamily(event.target.value);
    dispatch({ type: 'FETCH_SPECIES', payload: event.target.value });
  }

  // function to set species state and dispatch selected species to filterSearch reducer
  const selectSpecies = (event) => {
    setSpecies(event.target.value);
    dispatch({ type: 'SET_SELECTED', payload: event.target.value });
    dispatch({ type: 'FETCH_ANIMAL_DATA', payload: event.target.value });
  }

  // function to return to the previous page and set autofill to false if it is true
  const xButton = () => {
    history.goBack();
    dispatch({ type: 'SET_AUTOFILL_FALSE' });
  }

  // function to toggle post visibility between true and false
  const toggleVisibility = () => {
    setVisibility(!visibility);
  }

  const fetchFormData = () => {
    let formData = parent.document.getElementById("photoUpload").value;
    let output = formData.slice(12);
    setImage(output);
  }

  return (
    <div className='add-body'>
      {/* Page Head */}
      <div className='ref-menu'>
        {/* Close Button */}
        <div className='ref-menu-icon-container' onClick={() => xButton()}>
          <FiX className='ref-menu-icon' />
        </div>
        {/* Species Name */}
        <div className='ref-page-title'>
          <h1>Add A Sighting</h1>
        </div>
      </div>

      {/* Form fields for adding a new sighting */}
      <div className='sighting-form'>

        {/* Image Upload */}
        {/* <FormControl>
          <Button variant="contained" component="label">
            Upload Photo
            <input type="file" hidden />
          </Button>
        </FormControl> */}
        <form method="POST" action="/post-photo-upload" encType="multipart/form-data" id="uploadTest">
          <div>
            <label>Upload Photo</label>
            <input type="file" name="photo-upload" id='photoUpload' onChange={() => fetchFormData()}/>
            {/* <input type="file" name="photo-upload" onChange={() => {setImage(name.value)}} /> */}
          </div>
          <div>
            <input type="submit" value="Upload" />
          </div>
        </form>
        {/* <input
          accept="image/*"
          style={{ display: 'none' }}
          id="photo-upload-select"
          
          type="file"
        />
        <label htmlFor="photo-upload-select">
          <Button variant="contained" component="span">
            Select Photo
          </Button>
        </label> */}

        {/* Caption */}
        <FormControl>
          <TextField
            value={caption}
            label="Caption"
            variant="outlined"
            onChange={(event) => setCaption(event.target.value)}
          />
        </FormControl>

        {/* Animal Type Drop Down 
            If selectedAnimal is populated, the field auto-populates and is disabled
            Otherwise normal search functionality exists */}
        <FormControl fullWidth >
          <InputLabel id="add-type">Animal Type*</InputLabel>
          {autofill == true ?
            <Select
              disabled
              id="add-type"
              label="Animal Type"
              defaultValue={selected.type}
            >
              <MenuItem value={selected.type}>{selected.type}</MenuItem>
            </Select>
            :
            <Select
              required
              id="add-type"
              label="Animal Type"
              value={type}
              onChange={(event) => getSubtypes(event)}
            >
              <MenuItem value={'Bird'}>Bird</MenuItem>
              <MenuItem value={'Mammal'}>Mammal</MenuItem>
            </Select>}
        </FormControl>

        {/* Animal Subtype Drop Down 
            If selectedAnimal is populated, the field auto-populates and is disabled
            Otherwise normal search functionality exists */}
        <FormControl fullWidth>
          <InputLabel id="add-subtype">Animal Subtype*</InputLabel>
          {autofill == true ?
            <Select
              disabled
              id="add-subtype"
              label="Animal Subtype"
              defaultValue={selected.subtype}
            >
              <MenuItem value={selected.subtype}>{selected.subtype}</MenuItem>
            </Select>
            :
            type == '' ?
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
                {subtypes.map((subtype, i) => {
                  return (<MenuItem key={i} value={subtype.subtype}>{subtype.subtype}</MenuItem>)
                })}
              </Select>
          }
        </FormControl>

        {/* Animal Family Drop Down (disabled if Subtype is not selected) 
            If selectedAnimal is populated, the field auto-populates and is disabled
            Otherwise normal search functionality exists */}
        <FormControl fullWidth>
          <InputLabel id="add-family">Animal Family*</InputLabel>
          {autofill == true ?
            <Select
              disabled
              id="add-family"
              label="Animal Family"
              defaultValue={selected.family}
            >
              <MenuItem value={selected.family}>{selected.family}</MenuItem>
            </Select>
            :
            subType == '' ?
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
                {families.map((family, i) => {
                  return (<MenuItem key={i} value={family.family}>{family.family}</MenuItem>)
                })}
              </Select>
          }
        </FormControl>

        {/* Animal Species Drop Down (disabled if Family is not selected) 
            If selectedAnimal is populated, the field auto-populates and is disabled
            Otherwise normal search functionality exists */}
        <FormControl fullWidth>
          <InputLabel id="add-species">Animal Species*</InputLabel>
          {autofill == true ?
            <Select
              disabled
              id="add-species"
              label="Animal Species"
              defaultValue={selected.name}
            >
              <MenuItem value={selected.name}>{selected.name}</MenuItem>
            </Select>
            :
            family == '' ?
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
                onChange={(event) => selectSpecies(event)}
              >
                {speciesNames.map((name, i) => {
                  return (<MenuItem key={i} value={name.name}>{name.name}</MenuItem>)
                })}
              </Select>
          }
        </FormControl>

        {/* GeoLocation Tagging */}
        <h3>GeoLocation Select Here</h3>

        {/* Post Visibility */}
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={() => toggleVisibility()} />} label="Public Sighting" />
        </FormGroup>

        {/* View Entry button (disabled if form is not filled out) */}
        <Box textAlign="center" >
          {autofill == true ?
            <Button
              variant='contained'
              sx={{ width: "140px" }}
              onClick={() => submitSighting()}
            >
              Submit
            </Button>
            :
            species ?
              <Button
                variant='contained'
                sx={{ width: "140px" }}
                onClick={() => submitSighting()}
              >
                Submit
              </Button>
              :
              <Button disabled variant='contained' sx={{ width: "140px" }}>Submit</Button>
          }
        </Box>
      </div>
    </div>
  );
}