import React, { useState } from 'react';

const LikeButton = ({ initialLikes = 0, buttonText = 'Likes' }) => {
  const [likes, setLikes] = useState(initialLikes);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[currentColorIndex],
    color: colors[currentColorIndex] === 'yellow' ? 'black' : 'white',
   
  };

  return (
    <div>
    <h1>Like Button</h1>
      <button className='likeButton' style={buttonStyle} onClick={handleLikeClick}>
        {likes} {likes === 1 ? 'Like' : buttonText}
      </button>
    </div>
  );
};

export default LikeButton;
