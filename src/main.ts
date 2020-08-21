import Vue from 'vue'
import App from './App.vue'
import VueInlineEditable from './vue-inline-editable'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://reqres.in/api'
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  // Do something with response error
  if (error.response && error.response.status === 401) {
    // TODO logout
  }

  console.log('error', error)
  return Promise.reject(error.response)
})

Vue.use(VueInlineEditable, {
  handle(value: any, resource: string, pk: any, field: string) {
    return axios.post(`${resource}/${pk}`, {
      [field]: value
    })
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
