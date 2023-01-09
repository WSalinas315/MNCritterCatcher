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
      {user}<br />
      {sighting.date.slice(0,10)}
      <div className='dummy-class'>
        <img src={sighting.image} />
      </div>
      <h3>{sighting.name}</h3>
      <p>{sighting.caption}</p>
    </div>
  );
}