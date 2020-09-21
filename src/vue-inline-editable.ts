import VueInlineEditable from './components/VueInlineEditable.vue'
import BasicField from './components/input-types/Basic.vue'
import TextField from './components/input-types/Text.vue'
import TextareaField from './components/input-types/Textarea.vue'
import ExcelColField from './components/input-types/ExcelCol.vue'

import './assets/scss/_index.scss'

const Plugin = {
  install(Vue: any, options: any = {}) {
    Vue.component('VueInlineEditable', VueInlineEditable)

    Vue.prototype.$inlineEditableOption = {
      ...options
    }
  }
}

export {
  VueInlineEditable,
  BasicField,
  TextField,
  TextareaField,
  ExcelColField
}

export default Plugin
