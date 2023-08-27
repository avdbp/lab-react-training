import React from 'react';
import { useState } from 'react';

const Random = ({ min, max }) => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber(min, max));
  
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function handleReset() {
      const newRandomNumber = generateRandomNumber(min, max);
      setRandomNumber(newRandomNumber);
    }

  return (
    <div>
      Random number between {min} and {max}: {randomNumber}
      <button className='resetRandom' onClick={handleReset}>Generate New Random Number</button>
    </div>
  );
};

export default Random;
