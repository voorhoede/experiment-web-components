import React from 'react';
import PropTypes from 'prop-types';

import './color-picker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hue: this.props.hue || 0,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ hue: value });
  }

  render() {
    const { hue } = this.state;
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      value: hue || 0,
      onChange: this.handleChange,
    }));

    return (
      <div className="color-picker">
        <div className="color-picker__controls">
          <p className="color-picker__description">Adjust the hue:</p>

          { children
            ? React.Children.map(children, child => React.isValidElement(child) && child)
            : <DefaultSlider hue={hue} onChange={this.handleChange} />
          }
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

const DefaultSlider = ({ hue, onChange }) => (
  <input
    type="range"
    className="color-picker__slider"
    min="0"
    max="360"
    step="1"
    value={hue}
    onChange={onChange} />
);

DefaultSlider.propTypes = {
  hue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

ColorPicker.propTypes = {
  hue: PropTypes.number,
  children: PropTypes.node,
};

export default ColorPicker;
