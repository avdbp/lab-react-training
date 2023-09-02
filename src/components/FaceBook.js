import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [...new Set(profiles.map(profile => profile.country))];

  return (
    <div className='containerFacebookFather' >
      <h1>FaceBook</h1>
      <div>
      {countries.map(country => (
        <button className='buttonCountry' key={country} onClick={() => setSelectedCountry(country)}>
          {country}
        </button>
      ))}
      </div>
      

      {profiles.map((profile) => (
        <div
          className='containerFacebook'
          key={profile.firstName}
          style={{ backgroundColor: profile.country === selectedCountry ? 'aqua' : 'transparent' }}
        >
          <div className='imgFacebook'>
            <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
          </div>
          <div className='infoFacebook'>
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
