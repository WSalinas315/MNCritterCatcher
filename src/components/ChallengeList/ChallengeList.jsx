import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import ChallengeCard from '../ChallengeCard/ChallengeCard';

export default function ChallengeList(props) {
  
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      
    </div>
  );
}