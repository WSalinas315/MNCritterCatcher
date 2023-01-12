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
        <Button variant='contained' sx={{ margin: "20px" }} onClick={() => history.goBack()}>Back</Button>
        {user.id == sighting.user_id ?
          <Button variant='contained' sx={{ margin: "20px" }} onClick={() => deleteSighting()}>Delete</Button>
          :
          <></>
        }
        {/* <Button variant='contained' sx={{ margin: "20px" }}>Edit</Button> */}
      </div>
      <div className='detailed-sighting'>
        <h1>{sighting.name}</h1>
        <h3>Date Seen: {sighting.date?.slice(0, 10)}</h3>
        {/* <h3>Date: {sighting.date}</h3> */}
        <div className='dummy-image'>
          <img src={sighting.image} />
        </div>
        <p>{sighting.caption}</p>
        <div className='dummy-map'> <p>Geolocation</p></div>
      </div>
    </div>
  );
}