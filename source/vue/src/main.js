import Vue from 'vue'
import wrap from "@vue/web-component-wrapper";
import ColorPickerVue from './components/ColorPickerVue'

const CustomElement = wrap(Vue, ColorPickerVue)

window.customElements.define('color-picker-vue', CustomElement)
