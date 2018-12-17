<template>
  <div id="app">
    <input type="range" min="0" max="360" v-model="inputValue"/>
    <p>inputValue: {{inputValue}}</p>
    <div class="app__web-components">

      <p>native:</p>
      <hue-slider-native :hue="inputValue" />
      <hue-slider-native>
        <input type="number" />
      </hue-slider-native>

      <p>skate:</p>
      <hue-slider-skate :hue="inputValue" />

      <p>stencil:</p>
      <hue-slider-stencil :hue="inputValue" />
      <hue-slider-stencil>
        <input type="number" />
      </hue-slider-stencil>

      <p>svelte:</p>
      <hue-slider-svelte :hue="inputValue" />
      <hue-slider-svelte>
        <input type="number" />
      </hue-slider-svelte>
    </div>
  </div>
</template>

<script>
  import '../../../build/native/hue-slider-native'
  import '../../../build/skate/hue-slider-skate'
  import '../../../build/svelte/hue-slider-svelte'

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
