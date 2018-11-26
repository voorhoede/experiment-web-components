import React from 'react';
import PropTypes from 'prop-types';

import './color-picker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: 0,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ hue: value });
  }

  render() {
    const { hue } = this.state;

    return (
      <div className="color-picker">
        <div className="color-picker__controls">
          <p className="color-picker__description">Adjust the hue:</p>
          <input
            className="color-picker__slider"
            type="range"
            min="0"
            max="360"
            step="1"
            value={hue}
            onChange={this.handleChange} />
        </div>
        <div className="color-picker__preview">
          <span
            className="color-picker__preview-pane"
            style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}></span>
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  hue: PropTypes.number,
};

export default ColorPicker;
