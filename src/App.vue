<template lang="pug">
#app
  img(
    alt="Vue logo"
    src="./assets/logo.png"
  )
  div(style="width: 1000px; margin: 20px auto 50px")
    pre {{ name }}
    VueInlineEditable(
      type="text",
      v-model="name",
      resource="user",
      field="username",
      pk="1",
      placement="popup"
    )
    br
    VueInlineEditable(
      type="textarea",
      label="Edit me",
      resource="user",
      field="username",
      pk="1",
      rows="5",
      placement="popup"
      v-model="name",
    )
    br
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueInlineEditable from './components/VueInlineEditable.vue'

@Component({
  components: {
    VueInlineEditable
  }
})
export default class App extends Vue {
  name = 'John Doe'
}
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
