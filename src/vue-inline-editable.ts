import type { App, Component } from 'vue'

import VueInlineEditable from './components/VueInlineEditable.vue'
import BasicField from './components/input-types/Basic.vue'
import TextField from './components/input-types/TextField.vue'
// import TextareaField from './components/input-types/Textarea.vue'
// import ExcelColField from './components/input-types/ExcelCol.vue'

import './assets/scss/_index.scss'

const Plugin = {
  install(Vue: App, options: any = {}) {
    // Vue.component('VueInlineEditable', VueInlineEditable)

    Vue.provide('$inlineEditable', options)
  }
}

export {
  VueInlineEditable,
  BasicField,
  TextField,
  // TextareaField,
  // ExcelColField
}

export default Plugin
