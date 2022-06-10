<template lang="pug">
component(
  :is="generateFieldByType(type)",
  v-bind="props"
)
</template>
<script setup lang="ts">
import Basic from './input-types/Basic.vue'
import TextField from './input-types/TextField.vue'
import Textarea from './input-types/Textarea.vue'
import ExcelCol from './input-types/ExcelCol.vue'
// import DateTime from './input-types/DateTime.vue'
// import Timestamp from './input-types/Timestamp.vue'
// import Custom from './input-types/Custom.vue'

interface Props {
  type?: string;
  // placeholder?: string;
  // emptyValue?: string;
  // placement?: string;
  // label?: string;
  // resource?: string;
  // field?: string;
  // pk?: string;
  // handleFn?: any;
  // rows?: number;
  // lineHeight?: number;
  // verticalSpace?: number;
}

const props = defineProps<Props>()

const generateFieldByType: any = (ftype: any) => {
  let inputEl = Basic

  switch (ftype) {
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
}
</script>
