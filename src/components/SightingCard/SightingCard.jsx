import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SightingCard.css';

export default function SightingCard({ sighting, user }) {

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize history
  const history = useHistory();

  return (
    <div className='sighting-card' key={sighting.id} onClick={() => history.push(`/sightings/detailed/${sighting.id}`)}>
      <div className='dummy-class'>
        <p>{user}</p>
        <h3>picture here</h3>
      </div>
      <h3>ID:{sighting.animal_id} NamePlaceholder</h3>
      <p>Caption: {sighting.caption}</p>
    </div>
  );
}