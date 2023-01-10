import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { Button } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import './EditProfile.css';

export default function EditProfile(props) {

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // Get user data from the store
  const user = useSelector((store) => store.user);

  // Initialize local state
  const [profileImage, setProfileImage] = useState('');

  const updateProfile = () => {
    console.log('Dispatching from edit profile');
    console.log('Payload is:');
    console.log('id:', user.id);
    console.log('profile_image: images/uploads/' + profileImage);
    dispatch({ type: 'UPDATE_PROFILE', payload: { id: user.id, profile_image: ('images/uploads/' + profileImage) } });
    history.push('/profile');
  }

  const fetchFormData = () => {
    let formInfo = parent.document.getElementById("profilePhotoUpload").value;
    let result = formInfo.slice(12);
    setProfileImage(result);
  }

  return (
    <div className='edit-profile-body'>
      {/* Page Head */}
      <div className='ref-menu'>
        {/* Close Button */}
        <div className='ref-menu-icon-container' onClick={() => history.goBack()}>
          <FiX className='ref-menu-icon' />
        </div>
        {/* Page Title */}
        <div className='ref-page-title'>
          <h1>Edit Profile</h1>
        </div>
      </div>

      {/* Username Listed */}
      <div>
        <h2>Username: {user.username}</h2>
      </div>

      {/* Profile Photo upload */}
      <div>
        {/* Current Profile Image */}
        <div className='current-photo'>
          <h2>Current Profile Picture</h2>
          {user.profile_image ? <img className='profilePic' src={user.profile_image} /> : <BsPersonCircle className='profilePic' />}
        </div>
        {/* Upload Form */}
        <form method="POST" action="/post-photo-upload" encType="multipart/form-data" id="profileUpload">
          <div>
            <label>Upload New Photo</label>
            <input type="file" name="photo-upload" id='profilePhotoUpload' onChange={() => fetchFormData()} />
            {/* </div>
            <div> */}
            <input type="submit" value="Upload" />
          </div>
        </form>
      </div>

      <Button variant='contained' sx={{marginTop: "30px"}} onClick={() => updateProfile()}>Update</Button>

    </div>
  );
}
