import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './SpeciesPage.css';

export default function SpeciesPage(props) {

  const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>MADE IT</h2>
    </div>
  );
}