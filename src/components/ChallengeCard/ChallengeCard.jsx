import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './ChallengeCard.css';


export default function ChallengeCard(props) {
  
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      {/* Page Title */}
      {/* <h2>{challenge.name}</h2> */}
    </div>
  );
}