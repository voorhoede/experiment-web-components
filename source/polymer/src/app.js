import { LitElement, html } from '@polymer/lit-element';
import './components/color-picker-polymer.js';

class App extends LitElement {
  render() {
    return html`
      <color-picker-polymer></color-picker-polymer>
      <color-picker-polymer hue="300"></color-picker-polymer>
      <color-picker-polymer hue="300">
        <input slot="input" type="number" min="1" max="360" @change=${(e) => console.log('changed!')}>
      </color-picker-polymer>
    `;
  }
}

window.customElements.define('polymer-app', App);