import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiInfo } from 'react-icons/fi';
import './Home.css';

export default function Home() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  // initialize history
  const history = useHistory();


  return (
    <div className="container tree">
      {/* <LogOutButton className="btn" /> */}
      {/* About */}
      <div className='menu-icon-container' onClick={() => history.push('/about')}>
        <FiInfo className='menu-icon' />
      </div>
    </div>
  );
}
