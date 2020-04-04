<template lang="pug">
extends Basic.pug
block content
  span {{ localValue }}
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import Basic from './Basic.vue'

@Component
export default class DateTimeType extends Basic {
}
</script>
