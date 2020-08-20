<template lang="pug">
extends Basic.pug
block value
  textarea.vinput-excelcol-value(
    v-model="localValue",
    readonly,
    :placeholder="placeholder",
    :style="styles",
    @dblclick="edit",
  )
block content
  textarea.vinput-excelcol-input(
    ref="input",
    v-model="localValue",
    :placeholder="placeholder",
    :style="styles",
    @keypress.enter="saveExecel",
    @blur="saveExecel",
  )
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Basic from './Basic.vue'

@Component
export default class ExecelCol extends Basic {
  orientation: string = 'vertical'

  @Prop({
    type: Number,
    default: 15
  })
  lineHeight!: number

  @Prop({
    type: Number,
    default: 10
  })
  verticalSpace!: number

  get lineCount() {
    if (this.localValue) {
      return this.localValue.split(/\r*\n/).length
    }

    return 1
  }

  get styles() {
    const height = this.verticalSpace + this.lineHeight * this.lineCount

    return {
      height: `${height}px`
    }
  }

  saveExecel(e) {
    if (e && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()

      return this.save(e)
    }
  }
}
</script>
