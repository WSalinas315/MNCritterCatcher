import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {BsPersonCircle} from 'react-icons/bs';
import './ProfilePage.css';


export default function ProfilePage(props) {

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div className='profile-page'>
      <h1>Profile</h1>

      <div className='avatar'>
        <BsPersonCircle className='profileAvatar'/>
      </div>
    </div>
  );
}