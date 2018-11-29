<template>
  <div id="app">
    <input type="range" min="0" max="360" v-model="inputValue"/>
    <p>inputValue: {{inputValue}}</p>
    <div class="app__web-components">

      <p>native:</p>
      <color-picker-native :hue="inputValue" />
      <color-picker-native>
        <input type="number" />
      </color-picker-native>

      <p>skate:</p>
      <color-picker-skate :hue="inputValue" />

      <p>stencil:</p>
      <color-picker-stencil :hue="inputValue" />
      <color-picker-stencil>
        <input type="number" />
      </color-picker-stencil>

      <p>svelte:</p>
      <color-picker-svelte :hue="inputValue" />
      <color-picker-svelte>
        <input type="number" />
      </color-picker-svelte>
    </div>
  </div>
</template>

<script>
import '../../../build/native/color-picker-native'
import '../../../build/skate/color-picker-skate'
import '../../../build/svelte/color-picker-svelte'

export default {
  name: 'app',
  data() {
    return {
      inputValue: 0
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__web-components {
  display: flex;
  flex-direction: column;
}
</style>
