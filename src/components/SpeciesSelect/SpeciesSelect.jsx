import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './SpeciesSelect.css';


export default function SpeciesSelect(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');


  return (
    <div>
      <h1>Discover {props.type}s</h1>

      

    </div>
  );
}

