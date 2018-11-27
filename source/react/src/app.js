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
  </div>
);

export default App;
