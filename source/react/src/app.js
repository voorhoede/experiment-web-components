import React from 'react';
import ColorPicker from './color-picker';

const App = () => (
  <div>
    <h2>React components</h2>
    <ColorPicker />
    <ColorPicker hue={180} />
    <ColorPicker>
      <input type="number" min="0" max="360" step="1" />
    </ColorPicker>

    <h2>Web components</h2>
    <color-picker></color-picker>
    <color-picker-with-prop></color-picker-with-prop>
    <color-picker-with-child></color-picker-with-child>
  </div>
);

export default App;
