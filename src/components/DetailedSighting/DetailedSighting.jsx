import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import './DetailedSighting.css';

export default function DetailedSighting(props) {

  // Initialize sightings data from store
  const sighting = useSelector(store => store.detailed);
  const user = useSelector(store => store.user);

  // Local state for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize history
  const history = useHistory();

  // function to delete the sighting and return to the sightings list
  const deleteSighting = () => {
    dispatch({ type: 'DELETE_SIGHTING', payload: { sighting: sighting.id, user: user.id } });
    history.push('/sightings');
  }

  // Google Maps API request
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // Map rendering with Marker
  function Map() {
    return (
      <GoogleMap
        zoom={12}
        center={{ lat: +sighting.location_lat, lng: +sighting.location_long }}
        mapContainerStyle={{ width: '100%', height: '250px' }}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{ lat: +sighting.location_lat, lng: +sighting.location_long }} />
      </GoogleMap>
    )
  }

  // Modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='detailed-page-body'>
      <div className='detail-button-menu'>
        {/* Go Back Button */}
        <Button variant='contained' sx={{ margin: "20px", backgroundColor: "#1EA1C9" }} onClick={() => history.goBack()}>Back</Button>

        {/* Delete button that only renders if you're viewing your own post */}
        {user.id == sighting.user_id ?
          <><Button variant='contained' sx={{ margin: "20px", backgroundColor: "#1EA1C9" }} onClick={() => handleOpen()}>Delete</Button>
          {/* Modal to verify user wants to delete the post */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="delete-sighting-modal"
              >
              <Box sx={style}>
                <Typography id="delete-sighting-modal" variant="h6" component="h2">
                  Are you sure you want to delete this sighting?
                </Typography>
                <br />
                {/* Cancel Button */}
                <Button variant='outlined' sx={{marginLeft: "40px"}} onClick={() => handleClose()}>Cancel</Button>
                {/* Delete button */}
                <Button variant='contained' sx={{marginLeft: "50px"}} color="error" onClick={() => deleteSighting()}>Delete</Button>
              </Box>
            </Modal></>
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
          <img src={sighting.image} />
        </div>

        {/* Caption */}
        <p>{sighting.caption}</p>

        {/* Google Map */}
        <div className='google-map'>
          {sighting.location_lat ? isLoaded ? <Map /> : <CircularProgress /> : <></>}
        </div>
      </div>
    </div>
  );
}