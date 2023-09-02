import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked, alt }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  return (

    <div className='clickablePicture' >
    <h1>Clickable Picture</h1>
    <img
      className='clickImage'
      src={isClicked ? imgClicked : img}
      alt={alt}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
    </div>
  );
};

export default ClickablePicture;
