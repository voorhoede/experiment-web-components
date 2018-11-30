import { LitElement, html } from '@polymer/lit-element';

class ColorPicker extends LitElement {
  static get properties() {
    return {
      hue: { type: String }
    };
  }

  constructor() {
    super();

    this.hue = '0';

    this.hueChangeHandler = this.hueChangeHandler.bind(this);
  }

  hueChangeHandler(e) {
    const { value } = e.target;
    this.hue = value;
  }

  render() {
    return html`
      <style>
        .color-picker {
          display: flex;
          align-items: center;
          max-width: 500px;
          border: 1px solid #cccccc;
        }

        .color-picker__controls,
        .color-picker__preview {
          padding: 1rem;
        }

        .color-picker__controls {
          display: flex;
          flex: 1 1 auto;
        }

        .color-picker__description {
          flex: 0 1 auto;
          margin: 0 1rem 0 0;
        }

        .color-picker__controls input {
          flex: 1 0 auto;
          margin: 0;
        }

        .color-picker__preview-pane {
          display: block;
          width: 50px;
          height: 50px;
        }
      </style>

      <div class="color-picker">
        <div class="color-picker__controls">
          <p class="color-picker__description">Adjust the hue:</p>
          <slot name="input">
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value=${this.hue}
              @change=${this.hueChangeHandler} />
          </slot>
        </div>
        <div class="color-picker__preview">
          <span
            class="color-picker__preview-pane"
            style="background-color: hsl(${this.hue}, 100%, 50%);"></span>
        </div>
      </div>
    `;
  }
}

customElements.define('color-picker-polymer', ColorPicker);
