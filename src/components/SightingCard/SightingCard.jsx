import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
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

      {/* conditional rendering for username & date placement */}
      {sighting.profile_image ?
        <div className='post-info'>
          <div>
            <img src={sighting.profile_image} className='profile-img-small' />
          </div>
          <div className='name-date'>
            {sighting.username}<br />
            {sighting.date.slice(0, 10)}
          </div>
        </div>
        :
        <div className='post-info'>
          <div className='center-avatar'>
            <BsPersonCircle className='profile-img-small' />
          </div>
          <div className='name-date'>
            {sighting.username}<br />
            {sighting.date.slice(0, 10)}
          </div>
        </div>}

      {/* Uploaded image */}
      <div>
        <img src={sighting.image} />
      </div>

      {/* Animal Name */}
      <h2>{sighting.name}</h2>

      {/* Post Caption */}
      <p>{sighting.caption}</p>
    </div>
  );
}