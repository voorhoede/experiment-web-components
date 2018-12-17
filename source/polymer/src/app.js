import { LitElement, html } from '@polymer/lit-element'
import './components/hue-slider-polymer.js'

class App extends LitElement {
  render() {
    return html`
      <hue-slider-polymer></hue-slider-polymer>
      <hue-slider-polymer hue="300"></hue-slider-polymer>
      <hue-slider-polymer>Lorem ipsum</hue-slider-polymer>
    `
  }
}

window.customElements.define('polymer-app', App)