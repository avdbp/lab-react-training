import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png'; // Importa la imagen vacía

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(1);

  const handleClick = () => {
    // Display the empty dice image
    setDiceValue('empty');

    // After 1 second, display a new random dice image
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
    }, 1000);
  };

  return (
    <div>
    <h1>Dice</h1>
    <img
      className='dice'
      src={diceValue === 'empty' ? emptyDice : diceImages[diceValue - 1]} 
      alt={`Valor del dado: ${diceValue}`} 
      onClick={handleClick} 
    />
    </div>
  );
  
};


export default Dice;
