import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { Button, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
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
    <div key={sighting.id} onClick={() => viewDetailed()}>
      <Card className='sighting-card' sx={{ backgroundColor: "lightgray", p: "15px", boxShadow: "2" }}>

        {/* conditional rendering for username & date placement */}
        {sighting.profile_image ?
          <div className='post-info'>
            <div>
              <img src={sighting.profile_image} className='profile-img-small' />
            </div>
            <div className='name-date'>
              <Typography variant="body1" >
                <strong>{sighting.username}</strong>
                <br />
                {sighting.date.slice(0, 10)}
              </Typography>
            </div>
          </div>
          :
          <div className='post-info'>
            <div className='center-avatar'>
              <BsPersonCircle className='profile-img-small' />
            </div>
            <div className='name-date'>
              <Typography variant="body1" >
                <strong>{sighting.username}</strong>
                <br />
                {sighting.date.slice(0, 10)}
              </Typography>
            </div>
          </div>}

        {/* Uploaded image */}
        <div>
          <img className='card-img' src={sighting.image} />
        </div>

        {/* Animal Name */}
        <Typography variant="h6" ><strong>{sighting.name}</strong></Typography>
        {/* <h3>{sighting.name}</h3> */}

        {/* Post Caption */}
        <Typography variant="body1" >{sighting.caption}</Typography>
        {/* <p>{sighting.caption}</p> */}
      </Card>

    </div>
  );
}