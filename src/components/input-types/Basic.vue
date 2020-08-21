<template lang="pug">
extends Basic.pug
</template>
<script lang="ts">
import { Component, PropSync, Prop, Vue, Watch } from 'vue-property-decorator'
import PromiseButton from 'vue-promise-button/src/components/PromiseButton.vue'
import Tick from '../../assets/tick.svg'
import Close from '../../assets/close.svg'
import EventBus from '../../services/event-bus'

@Component({
  components: {
    PromiseButton,
    Tick,
    Close
  },
  model: {
    prop: 'value',
    event: 'update:value'
  }
})
export default class Basic extends Vue {
  @Prop()
  value: any

  @Prop({
    type: String,
    default: 'text'
  })
  type!: string

  @Prop({
    type: String,
    default: ''
  })
  placeholder!: string

  @Prop({
    type: String,
    default: ''
  })
  emptyValue!: string

  @Prop({
    type: String,
    default: 'inline'
  })
  placement!: string

  @Prop({
    type: String
  })
  label!: string

  @Prop({
    type: String
  })
  resource!: string

  @Prop({
    type: String
  })
  field!: string

  @Prop()
  pk!: any

  @Prop({
    type: Function
  })
  handleFn!: Function

  @Watch('value')
  onValueChanged() {
    this.localValue = this.value
  }

  localValue: any = this.value
  handle: Function = this.handleFn ? this.handleFn : this.$inlineEditableOption.handle
  isEdit: boolean = false
  isProcessing: boolean = false
  orientation: string = 'horizontal'

  get previewValue() {
    return this.value || this.emptyValue
  }

  get isInline() {
    return this.placement === 'inline'
  }

  get isPopup() {
    return this.placement === 'popup'
  }

  get classes() {
    return [
      `vinput-${this.type}`,
      `vinput-${this.orientation}`
    ]
  }

  get formClasses() {
    return [
      `vinput-form-${this.placement}`
    ]
  }

  mounted(): void {
    document.addEventListener('click', this.handleBodyClick)
    EventBus.$on('open_inline_editable', this.close)
  }

  beforeDestroy(): void {
    document.removeEventListener('click', () => {}, false)
    EventBus.$off('open_inline_editable', this.close)
  }

  handleBodyClick() {
    this.cancel()
  }

  stopClick() {}

  save(e: any) {
    if (this.resource && this.handle) {
      return this.handleSave(e)
    } else {
      return this.basicSave(e)
    }
  }

  cancel() {
    this.close()
    this.localValue = this.value
  }

  close() {
    this.isEdit = false
  }

  edit() {
    EventBus.$emit('open_inline_editable')
    this.isEdit = true

    setTimeout(() => {
      this.focus()
    }, 200)
  }

  focus() {
    if (this.$refs.input) {
      const input = this.$refs.input as HTMLInputElement
      input.focus()
    }
  }

  handleSave(e: any) {
    const value = e ? e.target.value : this.localValue
    this.isProcessing = true

    return this.handle(value, this.resource, this.pk, this.field)
      .then(() => {
        this.basicSave(e)
      })
      .finally(() => {
        this.isProcessing = false
      })
  }

  basicSave(e: any) {
    const value = e ? e.target.value : this.localValue
    this.$emit('update:value', value)
    this.close()

    return Promise.resolve(value)
  }
}
</script>
