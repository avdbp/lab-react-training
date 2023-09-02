import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
    };
  }

  handleColorChange = (color, value) => {
    this.setState({ [`${color}Value`]: value });
  };

  render() {
    const { rValue, gValue, bValue } = this.state;
    const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

    const rColorStyle = {
      backgroundColor: `rgb(${rValue}, 0, 0)`,
      width: '50px',
      height: '50px',
      display: 'inline-block',
    };

    const gColorStyle = {
      backgroundColor: `rgb(0, ${gValue}, 0)`,
      width: '50px',
      height: '50px',
      display: 'inline-block',
    };

    const bColorStyle = {
      backgroundColor: `rgb(0, 0, ${bValue})`,
      width: '50px',
      height: '50px',
      display: 'inline-block',
    };

    return (
      <div className='rgbColorPicked'>
        
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={this.handleColorChange}
        />
        <div style={rColorStyle}></div>
        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={this.handleColorChange}
        />
        <div style={gColorStyle}></div>
        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={this.handleColorChange}
        />
        <div style={bColorStyle}></div>
        <p>Selected Color: {rgbColor}</p>

        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: rgbColor,
          }}
        >
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
