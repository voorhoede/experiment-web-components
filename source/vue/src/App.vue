<template>
  <div class="app">
    <color-picker-vue />
    <color-picker-vue :hue="100"/>
    <color-picker-vue>
      <input type="number" max="360">
    </color-picker-vue>
  </div>
</template>

<script>
import ColorPickerVue from "./components/ColorPickerVue";
export default {
  components: {
    ColorPickerVue
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
}

.app > * {
  margin-bottom: 1rem
}
</style>
