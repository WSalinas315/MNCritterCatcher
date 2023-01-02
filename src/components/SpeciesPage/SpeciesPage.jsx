import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const store = useSelector((store) => store);
  const speciesName = useSelector(store => store.filterSearch.selected);

  return (
    <div>
      <h1>{speciesName}</h1>
    </div>
  );
}