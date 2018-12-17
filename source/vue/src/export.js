import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import HueSlider from './components/HueSlider';

const CustomElement = wrap(Vue, HueSlider);

window.customElements.define('hue-slider-vue', CustomElement);