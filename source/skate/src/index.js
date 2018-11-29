// @jsx h

import { props, withComponent } from 'skatejs';
import withPreact from '@skatejs/renderer-preact';
import { h } from 'preact';

class WithPreact extends withComponent(withPreact()) {
  static state = {
    hue: props.string({ attribute: true, default: '200' })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.state = { hue: value };
  }

  render({ state, handleChange }) {
    return (
      <div className="color-picker">
        <div className="color-picker__controls">
          <p className="color-picker__description">Adjust the hue:</p>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={state.hue}
            onChange={handleChange} />
        </div>
        <div className="color-picker__preview">
          <span
            className="color-picker__preview-pane"
            style={{ backgroundColor: `hsl(${state.hue}, 100%, 50%)` }}>
              hsl({state.hue}, 100%, 50%)
            </span>
        </div>
      </div>
    );
  }
}

customElements.define('color-picker-skate', WithPreact);