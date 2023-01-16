import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FiX } from 'react-icons/fi';
import { Button, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import './SpeciesPage.css';

export default function SpeciesPage(props) {

  // fetches specific animal information from database
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMAL_DATA', payload: speciesName })
  }, []);

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize store data
  const speciesName = useSelector(store => store.filterSearch.selected);
  const animal = useSelector(store => store.selectedAnimal);

  // function to direct to add a sighting page and update the autofill boolean
  const addSighting = () => {
    dispatch({ type: 'SET_AUTOFILL_TRUE' });
    history.push('/sightings/add');
  }

  return (
    <div className='ref-body'>
      {/* Close Button */}
      <IconButton variant='contained' sx={{ margin: "20px", backgroundColor: "#1EA1C9", borderRadius: "4px", color: "white", boxShadow: "1" }} onClick={() => history.goBack()}><CloseIcon /></IconButton>

      <Card className='species-card' sx={{ backgroundColor: "lightgray", p: "15px", boxShadow: "2" }}>
        {/* Species Name */}
        <h2 className='h1-center no-top-margin'>{speciesName}</h2>

        <h4 className='scientific'>{animal.scientific_name}</h4>

        {/* Animal Image */}
        <div>
          <img className="species-image" src={animal.stock_image} />
        </div>

        {/* Animal dimensions */}
        <div className='ref-dimensions'>
          <p>Length: {animal.length} {animal.length_uom}</p>
          {animal.type == 'Bird' ? <p>Wingspan: {animal.wingspan} cm</p> : <></>}
          <p>Weight: {animal.weight} {animal.weight_uom}</p>
          <p>Conservation Status: {animal.conservation_status}</p>

          <Typography variant="body2">
            {/* <p>Markings: {animal.description}</p> */}
            Markings: {animal.description}
          </Typography>
        </div>
        <br />
        {/* Add sighting button */}
        <div className='sighting-btn'>
          <Button variant='contained' onClick={() => addSighting()} sx={{ backgroundColor: "#1EA1C9" }}>Add Sighting</Button>
        </div>
      </Card>
    </div>
  );
}