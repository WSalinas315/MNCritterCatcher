import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
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

  // const { isLoaded } = useLoadScript({
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // Map rendering with Marker
  function Map() {
    console.log('Coords:', 'lat', +sighting.location_lat, 'long:', +sighting.location_long);
    return (
      <GoogleMap
        zoom={9}
        center={{ lat: +sighting.location_lat, lng: +sighting.location_long }}
        mapContainerStyle={{width: '100%', height: '250px'}}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{lat: +sighting.location_lat, lng: +sighting.location_long}} />
      </GoogleMap>
    )
  }


  return (
    <div>
      <div className='detail-button-menu'>

        <Button variant='contained' sx={{ margin: "20px" }} onClick={() => history.goBack()}>Back</Button>
        {user.id == sighting.user_id ?
          <Button variant='contained' sx={{ margin: "20px" }} onClick={() => deleteSighting()}>Delete</Button>
          :
          <></>
        }
      </div>

      <div className='detailed-sighting'>

        {/* Animal Name */}
        <h1>{sighting.name}</h1>

        {/* Date Seen*/}
        <h3>Date Seen: {sighting.date?.slice(0, 10)}</h3>

        {/* Image */}
        <div className='detail-sighting-image'>
          <img src={sighting.image}/>
        </div>

        {/* Caption */}
        <p>{sighting.caption}</p>

        {/* Google Map */}
        <div className='google-map'>
          {isLoaded ? <Map /> : <CircularProgress />}
        </div>
      </div>
    </div>
  );
}