import React, { useState } from 'react';

const Carousel = ({ images }) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the previous image
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle moving to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-div">
      <img className='carousel' src={images[currentIndex]} alt={`${currentIndex + 1}`} />

      <div className="carousel-buttons">
        <button className='carousel-button' onClick={goToPreviousImage}>Left</button>
        <button className='carousel-button' onClick={goToNextImage}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
