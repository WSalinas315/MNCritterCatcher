import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../SightingCard/SightingCard';
import SightingCard from '../SightingCard/SightingCard';
import './SightingList.css';

export default function SightingList(props) {

  // Initialize sightings data from store
  const sightings = useSelector(store => store.sighting);
  const user = useSelector(store => store.user);

  return (
    <div className='sighting-list'>
      {sightings.map(sighting => (
        <SightingCard key={sighting.id} sighting={sighting} user={user.username} />
      ))}
    </div>
  );
}