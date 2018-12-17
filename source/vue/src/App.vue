<template>
  <div class="app">
    <HueSlider></HueSlider>
    <HueSlider :hue="100"></HueSlider>
    <HueSlider>
      Lorem ipsum
    </HueSlider>
  </div>
</template>

<script>
  import HueSlider from './components/HueSlider';

  export default {
    name: 'App',
    components: { HueSlider }
  }
</script>
