import React, { Component } from 'react';
import './web-components/color-picker-native';
// import './web-components/color-picker-vue';
import './web-components/color-picker-svelte';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <p>native:</p>
        <color-picker-native></color-picker-native>
        <color-picker-native hue="300"></color-picker-native>
        <color-picker-native>
          <input type="number" min="0" max="360" step="1" />
        </color-picker-native>

        <p>vue:</p>
        {/* <color-picker-vue></color-picker-vue> */}
        {/* <color-picker-vue hue="300"></color-picker-vue> */}
        {/* <color-picker-vue>
          <input type="number" min="0" max="360" step="1" />
        </color-picker-vue> */}

        <p>svelte:</p>
        <color-picker-svelte></color-picker-svelte>
        <color-picker-svelte hue="300"></color-picker-svelte>
        <color-picker-svelte>
          <input type="number" min="0" max="360" step="1" />
        </color-picker-svelte>
      </div>
    );
  }
}

export default App;
