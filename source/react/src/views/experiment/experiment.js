import React from 'react';
import ReactWebComponent from 'react-web-component';
import ColorPicker from '../../components/color-picker/color-picker';

ReactWebComponent.create(<ColorPicker />, 'color-picker');

class Experiment extends React.Component {
  render() {
    return (
      <main className="experiment">
        <h1>Web Component</h1>
        <color-picker></color-picker>
        <h1>React Component</h1>
        <ColorPicker hue={0} />
      </main>
    );
  }
}

export default Experiment;
