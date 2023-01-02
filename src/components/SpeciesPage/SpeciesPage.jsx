import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import './SpeciesPage.css';

export default function SpeciesPage(props) {

  // fetches specific animal information from database
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIMAL_DATA', payload: speciesName })
  }, []);

  // Initialize history
  const history = useHistory();

  // Initialize dispatch
  const dispatch = useDispatch();

  // Initialize store data
  const speciesName = useSelector(store => store.filterSearch.selected);

  return (
    <div className='ref-body'>

      {/* Page Head */}
      <div className='ref-menu'>
        {/* Close Button */}
        <div className='ref-menu-icon-container' onClick={() => history.goBack()}>
          <FiX className='ref-menu-icon' />
        </div>
        {/* Species Name */}
        <div className='ref-page-title'>
          <h1>{speciesName}</h1>
          <h4>Scientific name</h4>
        </div>
      </div>
      {/* Animal Image */}
      <div>
        {/* <img src= */}
      </div>

    </div>

  );
}