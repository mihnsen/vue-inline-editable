<template lang="pug">
extends Basic.pug
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import PromiseButton from 'vue-promise-button/src/components/PromiseButton.vue'
import useInput from './useInput';

import Tick from '../../assets/tick.svg'
import Close from '../../assets/close.svg'
// import EventBus from '../../services/event-bus'

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

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  emptyValue: '',
  placement: 'inline',
});
const emits = defineEmits<Emits>();

const {
  localValue,
  handle,
  initialValue,
  isEdit,
  isProcessing,
  input,
  previewValue,
  isInline,
  isPopup,
  classes,
  formClasses,
  stopClick,
  save,
  cancel,
  close,
  edit,
  focus,
  saveToApi,
  saveAndEmit,
} = useInput(props, emits)
</script>
