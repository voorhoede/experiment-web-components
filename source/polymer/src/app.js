import { LitElement, html } from '@polymer/lit-element';
import './components/color-picker-polymer.js';

class App extends LitElement {
  render() {
    return html`
      <color-picker-polymer></color-picker-polymer>
      <color-picker-polymer hue="300"></color-picker-polymer>
    `;
  }
}

window.customElements.define('polymer-app', App);