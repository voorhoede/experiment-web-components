import React from 'react';
import ColorPicker from '../../components/color-picker/color-picker';

class Experiment extends React.Component {
  render() {
    return (
      <main className="experiment">
        <h1>Web Component</h1>
        <color-picker></color-picker>

        <h1>React Component: default</h1>
        <ColorPicker />

        <h1>React Component: set custom hue value</h1>
        <ColorPicker hue={100} />

        <h1>React Component: use different input element</h1>
        <ColorPicker>
          <input
            className="color-picker__slider"
            type="number"
            min="0"
            max="360"
            step="1" />
        </ColorPicker>
      </main>
    );
  }
}

export default Experiment;
