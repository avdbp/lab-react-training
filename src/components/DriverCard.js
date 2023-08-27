import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const cardStyle = {
    backgroundColor: '#4a90e2',
    color: 'white',
    width: '700px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };

  const imgStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px'
  };

  const roundedRating = Math.round(rating);
  const stars = '★'.repeat(roundedRating);
  const emptyStars = '☆'.repeat(5 - roundedRating);

  return (
    <div className='driver-card'>
        <div style={cardStyle}>
            <div className='img-driver-card' >
                <img src={img} alt={name} style={imgStyle} />
            </div>
            <div className='text-driver-card' >
                <h3>{name}</h3>
                <p>{`${stars}${emptyStars}`}</p>
                <p>{`${car.model} - ${car.licensePlate}`}</p>
            </div>
            
        </div>
    </div>
  );
};

export default DriverCard;
