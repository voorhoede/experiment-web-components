import { Component, Prop, State, Event, EventEmitter, Watch } from '@stencil/core'

@Component({
  tag: 'hue-slider-stencil',
  styleUrl: 'hue-slider-stencil.css',
  shadow: true
})

export class HueSlider {
  @Prop({reflectToAttr: true, mutable: true}) hue: string = '100'

  @State() inputValue: string
  @State() value: string

  @Event({eventName: 'input'}) inputEvent: EventEmitter

  handleInput(e) {
    e.stopPropagation()
    const { value } = e.target
    this.hue = value
    this.inputValue = value
    this.inputEvent.emit({ value })
  }

  componentWillLoad() {
    this.value = this.hue
  }

  @Watch('hue')
  hueUpdated(newValue) {
    this.value = newValue
  }

  render() {
    return (
      <label class="hue-slider">
        <input type="range" min="0" max="360" value={`${this.hue}`} onInput={(e) => this.handleInput(e)} />
        <output style={{ backgroundColor: this.value }}>
          <slot></slot>
        </output>
      </label>
    )
  }
}
