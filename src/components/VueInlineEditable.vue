<script lang="ts">
import Vue from 'vue'

import Basic from './input-types/Basic.vue'
import Text from './input-types/Text.vue'
import Textarea from './input-types/Textarea.vue'
import DateTime from './input-types/DateTime.vue'
import Timestamp from './input-types/Timestamp.vue'
import ExcelCol from './input-types/ExcelCol.vue'
import Custom from './input-types/Custom.vue'

export default Vue.extend({
  name: 'VueInlineEditable',
  functional: true,
  props: {
    value: {
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    resource: {
      type: String
    },
    pk: {
    },
    placeholder: {
      type: String
    },
    rows: {
      type: String
    },
    handleFn: {
      type: Function
    }
  },
  render: (createElement, context) => {
    const appropriateTypeComponent = () => {
      const { type } = context.props
      let columnLayout = Basic

      switch (type) {
        case 'text':
          columnLayout = Text
          break
        case 'textarea':
          columnLayout = Textarea
          break
        case 'datetime':
          columnLayout = DateTime
          break
        case 'timestamp':
          columnLayout = Timestamp
          break
        case 'custom':
          columnLayout = Custom
          break
        case 'excelcol':
          columnLayout = ExcelCol
          break
        default:
          break
      }

      return columnLayout
    }

    return createElement(
      appropriateTypeComponent(),
      {
        ...context.data,
        props: context.props
      },
      context.children
    )
  }
})
</script>
