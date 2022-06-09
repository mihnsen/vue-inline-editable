import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import VueInlineEditable from './vue-inline-editable'

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

const app = createApp(App);

app.use(VueInlineEditable, {
  handle(value: any, resource: string, pk: any, field: string) {
    return axios.post(`${resource}/${pk}`, {
      [field]: value
    })
  }
})

app.mount('#app')
