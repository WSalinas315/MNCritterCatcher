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
    dispatch({ type: 'FETCH_DETAILED_SIGHTING', payload: sighting.id });
    history.push(`/sightings/detailed/${sighting.id}`);
  }

  return (
    <div className='sighting-card' key={sighting.id} onClick={() => viewDetailed()}>
      <div className='dummy-class'>
        <img src={sighting.image} />
      </div>
      {sighting.image ? <div className='post-info'>
        {sighting.username}<br />
        {sighting.date.slice(0, 10)}
      </div>
        :
        <div>
          {sighting.username}<br />
          {sighting.date.slice(0, 10)}
        </div>}
      <h2>{sighting.name}</h2>
      <p>{sighting.caption}</p>
    </div>
  );
}