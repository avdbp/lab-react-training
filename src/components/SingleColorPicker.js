import React from 'react';

class SingleColorPicker extends React.Component {
  render() {
    const { color, value, onChange } = this.props;
    return (
      <div>
        <label>{color.toUpperCase()}:</label>
        <input
          type="number"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onChange(color, parseInt(e.target.value))}
        />
      </div>
    );
  }
}

export default SingleColorPicker;
