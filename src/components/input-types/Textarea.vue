<template lang="pug">
extends Basic.pug
block input
  textarea.vinput-form-control(
    ref="input",
    v-model="localValue",
    :rows="rows",
    :placeholder="placeholder",
  )
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Basic from './Basic.vue'

@Component
export default class DateTimeType extends Basic {
  @Prop({
    type: String,
    default: '3'
  })
  rows!: string

  orientation: string = 'vertical'
}
</script>
