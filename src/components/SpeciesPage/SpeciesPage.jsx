import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { Button } from '@mui/material';
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

  return (
    <div className='ref-body'>

      {/* Page Head */}
      <div className='ref-menu'>
        {/* Close Button */}
        <div className='ref-menu-icon-container' onClick={() => history.goBack()}>
          <FiX className='ref-menu-icon' />
        </div>
        {/* Species Name */}
        <div className='ref-page-title'>
          <h1>{speciesName}</h1>
          <h4>{animal.scientific_name}</h4>
        </div>
      </div>

      {/* Animal Image */}
      {/* Pizza image cover thingy this! */}
      <div>
        <img className='ref-img' src={animal.stock_image} />
      </div>

      {/* Animal dimensions */}
      <div className='ref-dimensions'>
        <p>Length: {animal.length} {animal.length_uom}</p>
        {animal.type == 'Bird' ? <p>Wingspan: {animal.wingspan} cm</p> : <></>}
        <p>Weight: {animal.weight} {animal.weight_uom}</p>
        <p>Conservation Status: {animal.conservation_status}</p>
        <p>Markings: {animal.description}</p>
      </div>

      {/* Add sighting button */}
      <div className='sighting-btn'>
        <Button variant='contained' onClick={() => history.push('/sightings/add')}>Add Sighting</Button>
      </div>


    </div>
  );
}