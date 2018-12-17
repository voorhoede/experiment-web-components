// @jsx h

import { props, withComponent } from 'skatejs'
import withPreact from '@skatejs/renderer-preact'
import { h } from 'preact'

class HueSlider extends withComponent(withPreact()) {
  static get props() {
    return {
      hue: props.string
    }
  }

  connectedCallback() {
    if (this.hue === '') {
      this.hue = '0'
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.hue = value
  }

  render({ hue, handleChange }) {
    return (
      <label className="hue-slider" style="display: flex;">
        <input type="range" min="0" max="360" value={hue} onInput={handleChange} />
        <output style={{ backgroundColor: `hsl(${hue}, 100%, 50%)`, display: 'inline-block', width: '50px', height: '50px' }}>
          <slot></slot>
        </output>
      </label>
    )
  }
}

customElements.define('hue-slider-skate', HueSlider)
