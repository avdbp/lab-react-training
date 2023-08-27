import React from 'react';

const CreditCard = (props) => {
  const {
    typeCard,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '150px'
    
  };

  return (
    <div className='body-card' style={cardStyle}>
        <div>
            <p className='type-card'>{typeCard}</p>
            <p className='number-card'>**** **** **** {number.slice(-4)}</p>
            <p className='expiration-card' >
                Expires {expirationMonth}/{expirationYear} {bank}
            </p>
            <p className='name-card' >{owner}</p>
        </div>
    </div>
  );
};

export default CreditCard;
