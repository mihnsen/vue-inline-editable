<template lang="pug">
extends Basic.pug
</template>
<script lang="ts">
import { Component, PropSync, Prop, Vue } from 'vue-property-decorator'
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

  @Prop({
    type: String
  })
  pk!: string

  localValue: any = this.value
  handle: Function = this.$inlineEditableOption.handle
  isEdit: boolean = false
  isProcessing: boolean = false

  get isInline() {
    return this.placement === 'inline'
  }

  get isPopup() {
    return this.placement === 'popup'
  }

  get classes() {
    return [
      `vinput-${this.type}`
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

  save() {
    if (this.resource && this.handle) {
      return this.handleSave()
    } else {
      return this.basicSave()
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
    this.focus()
  }

  focus() {
    if (this.$refs.input) {
      const input = this.$refs.input as HTMLInputElement
      input.focus()
    }
  }

  handleSave() {
    this.isProcessing = true
    return this.handle(this.localValue, this.resource, this.pk, this.field)
      .then(() => {
        this.basicSave()
      })
      .finally(() => {
        this.isProcessing = false
      })
  }

  basicSave() {
    this.$emit('update:value', this.localValue)
    this.close()

    return Promise.resolve(this.localValue)
  }
}
</script>
