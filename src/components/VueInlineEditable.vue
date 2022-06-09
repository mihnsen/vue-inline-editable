<template lang="pug">
component(
  v-model="localValue",
  :is="fieldType"
  v-bind="props"
)
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useLocalValue } from '@/utilities/hooks';
import Basic from './input-types/Basic.vue'
import TextField from './input-types/TextField.vue'
import Textarea from './input-types/Textarea.vue'
// import DateTime from './input-types/DateTime.vue'
// import Timestamp from './input-types/Timestamp.vue'
import ExcelCol from './input-types/ExcelCol.vue'
// import Custom from './input-types/Custom.vue'

interface Props {
  modelValue?: any;
  type?: string;
  placeholder?: string;
  emptyValue?: string;
  placement?: string;
  label?: string;
  resource?: string;
  field?: string;
  pk?: string;
  handleFn?: any;
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const emits = defineEmits<Emits>();
const props = defineProps<Props>()
const localValue = useLocalValue(props, emits);

const fieldType = computed(() => {
  let inputEl = Basic

  switch (props.type) {
    case 'text':
      inputEl = TextField
      break
    case 'textarea':
      inputEl = Textarea
      break
    // case 'datetime':
    //   inputEl = DateTime
    //   break
    // case 'timestamp':
    //   inputEl = Timestamp
    //   break
    // case 'custom':
    //   inputEl = Custom
    //   break
    case 'excelcol':
      inputEl = ExcelCol
      break
    default:
      break
  }

  return inputEl
})
</script>
