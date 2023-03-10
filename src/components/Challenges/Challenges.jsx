import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import ChallengeList from '../ChallengeList/ChallengeList';
import './Challenges.css';


export default function Challenges(props) {
  
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      {/* Page Title */}
      <h1>Challenges</h1>
    </div>
  );
}