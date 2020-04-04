import VueInlineEditable from './components/VueInlineEditable.vue'

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
  VueInlineEditable
}

export default Plugin
