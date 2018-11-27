<template>
  <div class="color-picker-vue">
    <div @input.stop="onInput" @change.stop="onChange">
      <slot>
        <input type="range" min="0" max="360" :value="inputValue">
      </slot>
    </div>
    <span
      class="color-picker-vue__output"
      :style="`background-color: hsl(${inputValue}, 100%, 50%)`"
    >{{value}}</span>
  </div>
</template>

<script>
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
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

export default {
  props: ['hue'],
  data: () => ({
    inputValue: null,
    value: 0
  }),
  methods: {
    setValue(val) {
      const [r, g, b] = hslToRgb(Number(val) / 360 , 1, 0.5)
      this.value = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    },
    onInput(event) {
      this.inputValue = event.target.value
      this.setValue(this.inputValue)
      this.$emit('input')
    },
    onChange(event) {
      this.inputValue = event.target.value
      this.setValue(this.inputValue)
      this.$emit('change')
    }
  },
  mounted() {
    this.inputValue = this.hue
      ? this.hue
      : this.$el.querySelector('input').value

    this.setValue(this.inputValue)
  },
  watch: {
    hue(newValue) {
      this.inputValue = newValue
    }
  }
}
</script>

<style>
.color-picker-vue {
  display: inline-flex;
}

.color-picker-vue__output {
  display: block;
  width: 2em;
  height: 2em;
  color: transparent;
  margin-left: 0.5em;
}
</style>
