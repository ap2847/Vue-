<template>
<div class="ui dimmer modals page " :class="{'active':isShow}">
      <div class="ui standard modal " style="top: 60px;" :class="{'active':isShow}">
        <i class="close icon" @click="hClose"></i>
        <div class="header">
             头部
        </div>
        <div class="content">
          <div class="description">
           内容
          </div>
        </div>
        <div class="actions">
          <div class="ui black button">Nope</div>
          <div class="ui positive right labeled icon button">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      // 由于后期要修改显示/隐藏，我们不能直接在prop中修改，所以这里添加一个数据项 isSHow
      isShow: this.value
    }
  },
  methods: {
    hClose () {
      // 关闭弹出框
      this.isShow = false
      // 修改父组件中v-model的值
      this.$emit('input', this.isShow)
    }
  },
  watch: {
    value () {
      // console.log('value变了', this.value)
      this.isShow = this.value
    }
  }
}
</script>

<style>

</style>
