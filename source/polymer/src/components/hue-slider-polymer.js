import { LitElement, html } from '@polymer/lit-element'

class HueSlider extends LitElement {
  static get properties() {
    return {
      hue: { type: String }
    };
  }

  constructor() {
    super()
    this.hue = '0'
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.hue = value
  }

  render() {
    return html`
      <style>
        .hue-slider {
          display: flex;
        }

        .hue-slider output {
          display: inline-block;
          width: 50px;
          height: 50px;
          margin-left: 10px;
        }
      </style>
      <label class="hue-slider">
        <input type="range" min="0" max="360" value=${this.hue} @change=${this.handleChange} />
        <output style="background-color: hsl(${this.hue}, 100%, 50%);">
          <slot />
        </output>
      </label>
    `
  }
}

customElements.define('hue-slider-polymer', HueSlider)
