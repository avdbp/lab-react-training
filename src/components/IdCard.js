import React from 'react';

const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props;
  
    return (
      <div className='id-card'>
        <div><img className='image' src={picture} alt={`${firstName} ${lastName}`} /></div>
        <div className="info">
          <li><strong>Nombre:</strong> {firstName} {lastName}</li>
          <li><strong>Género:</strong> {gender}</li>
          <li><strong>Altura:</strong> {height} cm</li>
          <li><strong>Fecha de Nacimiento:</strong> {birth.toDateString()}</li>
        </div>
      </div>
    );
  }

export default IdCard;

