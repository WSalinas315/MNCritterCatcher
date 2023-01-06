import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './DetailedSighting.css';

export default function DetailedSighting(props) {

  // Initialize sightings data from store
  const sighting = useSelector(store => store.detailed);
  const user = useSelector(store => store.user);

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize history
  const history = useHistory();

  // function to delete the sighting and return to the sightings list
  const deleteSighting = () => {
    dispatch({ type: 'DELETE_SIGHTING', payload: { sighting: sighting.id, user: user.id } });
    history.push('/sightings');
  }

  return (
    <div>
      <div className='top-thingy'>
        <Button variant='contained' sx={{ margin: "20px" }} onClick={() => deleteSighting()}>Delete</Button>
        <Button variant='contained' sx={{ margin: "20px" }}>Edit</Button>
        <Button variant='contained' sx={{ margin: "20px" }} onClick={() => history.goBack()}>Back</Button>
      </div>
      <div>
        <h1>{sighting.name}</h1>
        <h3>Date Seen: {sighting.date}</h3>
        <div className='dummy-image'> <p>Image Here</p></div>
        <p>Caption: {sighting.caption}</p>
        <div className='dummy-map'> <p>Geolocation</p></div>
      </div>
    </div>
  );
}