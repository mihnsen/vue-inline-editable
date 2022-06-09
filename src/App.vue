<template lang="pug">
#app
  img(
    alt="Vue logo"
    src="./assets/logo.png"
  )
  div(style="width: 1000px; margin: 20px auto 50px")
    pre {{ name }}
    pre text
    VueInlineEditable(
      type="text",
      v-model="name",
      resource="user",
      field="username",
      pk="1",
      placement="popup"
    )
    br
    pre textarea
    VueInlineEditable(
      type="textarea",
      label="Edit me",
      resource="user",
      field="username",
      pk="1",
      :rows="5",
      placement="popup"
      v-model="name",
    )
    br
    pre excelcol
    VueInlineEditable(
      type="excelcol",
      label="Edit me",
      resource="user",
      field="username",
      :vertical-space="6",
      pk="1",
      v-model="name",
    )
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import VueInlineEditable from './components/VueInlineEditable.vue'

const name = ref('John Doe')
watch(
  () => name.value,
  (newVal) => {
    console.log('value change', newVal)
  }
)
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
