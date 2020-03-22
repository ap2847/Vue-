<template>
  <div class="ui divider horizontal header">
    <i v-if="icon" class="icon" :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="less" scoped>

</style>
