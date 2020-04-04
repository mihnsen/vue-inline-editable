<template lang="pug">
extends Basic.pug
block input
  input.vinput-form-control(
    ref="input",
    v-model="localValue",
    @keyup.enter="save"
  )
  a.vinput-clear(
    v-if="value",
    href="javascript:;",
    @click.stop="clear",
  ) &times;
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import Basic from './Basic.vue'

@Component
export default class DateTimeType extends Basic {
  clear() {
    this.localValue = ''
    this.focus()
  }
}
</script>
