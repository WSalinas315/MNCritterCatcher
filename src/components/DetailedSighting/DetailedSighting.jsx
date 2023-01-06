import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './DetailedSighting.css';

export default function DetailedSighting(props) {

  // Initialize sightings data from store
  const sightings = useSelector(store => store.sighting);
  const user = useSelector(store => store.user);

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize history
  const history = useHistory();

  // Initialize variable with sighting ID
  const sightingID = useParams();



  return (
    <div>
      <div className='top-thingy'>
        <Button variant='contained'>Delete</Button>
      </div>
      {/* <div><h1>{sightings}</h1></div> */}
    </div>
  );
}