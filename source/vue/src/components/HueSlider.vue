<template>
  <label class="hue-slider">
    <input type="range" min="0" max="360" :value="inputValue" @input.stop="onInput" @change.stop="onChange">
    <output :style="`background-color: hsl(${inputValue}, 100%, 50%)`">
      <slot />
    </output>
  </label>
</template>

<script>
  export default {
    name: 'HueSlider',
    props: ['hue'],
    data: () => ({
      inputValue: null,
      value: '0'
    }),
    methods: {
      setValue(val) {
        this.value = val
      },
      onInput(e) {
        this.inputValue = e.target.value
        this.setValue(this.inputValue)
        this.$emit('input')
      },
      onChange(e) {
        this.inputValue = e.target.value
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
