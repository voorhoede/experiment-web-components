import { Component, Prop, State, Event, EventEmitter, Watch } from '@stencil/core';

function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

@Component({
  tag: 'color-picker-stencil',
  styleUrl: 'color-picker-stencil.css',
  shadow: true
})
export class ColorPickerStencil {
  @Prop({reflectToAttr: true, mutable: true}) hue: string = '180';

  @State() inputValue: number;
  @State() value: string;

  @Event({eventName: 'input'}) inputEvent: EventEmitter;

  handleInput(event) {
    event.stopPropagation()
    this.hue = event.target.value
    this.inputValue = Number(event.target.value)
    const [r, g, b] = hslToRgb(Number(event.target.value) / 360 , 1, 0.5)
    this.value = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    this.inputEvent.emit({ value: this.value })
  }

  componentWillLoad() {
    const [r, g, b] = hslToRgb(Number(this.hue) / 360 , 1, 0.5)
    this.value = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
  }

  @Watch('hue')
  hueUpdated(newValue) {
    const [r, g, b] = hslToRgb(Number(newValue) / 360 , 1, 0.5)
    this.value = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
  }

  render() {
    return (
      <div class="color-picker-stencil">
        <div onInput={(e) => this.handleInput(e)} >
          <slot><input type="range" min="0" max="360" value={`${this.hue}`}/></slot>
        </div>
        <div class="color-picker-stencil__output" style={{backgroundColor: this.value}}/>
      </div>
    );
  }
}
