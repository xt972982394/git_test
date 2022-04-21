<template>
  <div class="el-checkbox-wrapper">
    <input type="checkbox" :disabled="disabled" v-model="checkItem" class="input"/>
    <span>{{ label }}</span>
  </div>
</template>
<script>
import { changeCheckItems } from '@/utils/handleCheckBox.js'

export default {
  name: 'ElCheckbox',
  data() {
    return {
      checkItem: false,
    }
  },
  props: {
    label: {
      default: '',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    checked: {
      default: false,
      type: Boolean,
    },
  },
  watch: {
    checkItem(val) {
      changeCheckItems(this.$parent._uid, val, this.label)
    },
  },
  created() {
    if (this.checked) this.checkItem = true
  },
}
</script>
<style lang='less' scoped>
.el-checkbox-wrapper{
    .input{
        margin: 5px;
    }
}
</style>