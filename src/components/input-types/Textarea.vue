<template lang="pug">
extends Basic.pug
block input
  textarea.vinput-form-control(
    ref="input",
    v-model="localValue",
  )
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import Basic from './Basic.vue'

@Component
export default class DateTimeType extends Basic {
  orientation: string = 'vertical'
}
</script>
