import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const textColor = r + g + b > 382 ? 'black' : 'white'; // Choose text color based on background color

  const boxStyle = {
    backgroundColor: bgColor,
    color: textColor,
    width: '200px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    marginTop: '20px'
  };

  const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return (
    <div style={boxStyle}>
      <div>{`rgb(${r}, ${g}, ${b})`}</div>
      <div>{hexColor}</div>
    </div>
  );
};

export default BoxColor;
