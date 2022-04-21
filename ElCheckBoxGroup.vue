<template>
  <div class="el-checkBox-group-wrapper">
    <slot />
  </div>
</template>
<script>
import { setCheckItems, getCheckItems } from '@/utils/handleCheckBox.js'
export default {
  name: 'ElCheckBoxGroup',
  data() {
    return {
      checkItems: [],
    }
  },
  model: {
    prop: 'checkedValue',
    event: 'changeCheckedValue',
  },
  props: {
    checkedValue: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    setCheckItems(this._uid)
    this.checkItems = getCheckItems(this._uid).checkItems
  },
  watch: {
    checkItems(val) {
      this.$emit('changeCheckedValue', val)
    },
  },
}
</script>
<style lang='less' scoped>
.el-checkBox-group {
  &-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
  }
}
</style>