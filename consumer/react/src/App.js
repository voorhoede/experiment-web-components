import React, { Component } from 'react';
import './web-components/hue-slider-native';
// import './web-components/hue-slider-vue';
import './web-components/hue-slider-svelte';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <p>Native:</p>
        <hue-slider-native></hue-slider-native>
        <hue-slider-native hue="100"></hue-slider-native>
        <hue-slider-native>
          Lorem ipsum
        </hue-slider-native>

        <p>Vue:</p>
        {/* <hue-slider-vue></hue-slider-vue> */}
        {/* <hue-slider-vue hue="100"></hue-slider-vue> */}
        {/* <hue-slider-vue>
          Lorem ipsum
        </hue-slider-vue> */}

        <p>Svelte:</p>
        <hue-slider-svelte></hue-slider-svelte>
        <hue-slider-svelte hue="100"></hue-slider-svelte>
        <hue-slider-svelte>
          Lorem ipsum
        </hue-slider-svelte>
      </div>
    );
  }
}

export default App;
