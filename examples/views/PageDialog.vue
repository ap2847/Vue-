<template>
  <div>
    <h1>测试dialog</h1>
    <button type="primary" @click="isShow = !isShow">切换</button>
    <my-dialog  v-model="isShow"></my-dialog>
  </div>
</template>

<script>
export default {
  name: 'pageDialog',
  data () {
    return {
      isShow: false
    }
  }

}
</script>

<style>

</style>
