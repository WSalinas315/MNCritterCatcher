import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SightingCard.css';

export default function SightingCard({ sighting, user }) {

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize history
  const history = useHistory();

  const viewDetailed = () => {
    dispatch({type: 'FETCH_DETAILED_SIGHTING', payload: sighting.id});
    history.push(`/sightings/detailed/${sighting.id}`);
  }

  return (
    <div className='sighting-card' key={sighting.id} onClick={() => viewDetailed()}>
      <div className='dummy-class'>
        <p>{user}</p>
        <h3>picture here</h3>
      </div>
      <h3>{sighting.name}</h3>
      <p>Caption: {sighting.caption}</p>
    </div>
  );
}