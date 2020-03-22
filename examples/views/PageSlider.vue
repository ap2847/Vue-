<template>
  <my-slider
  :curIdx="curIdx"
  :auto='auto'
  :list="list"
  @click="hClick"
  style="width:400px;height:500px"></my-slider>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      curIdx: 5,
      list: [{ url: require('../views/img/1.The Shawshank Redemption.jpg'), alt: '1.肖申克的救赎' },
        { url: require('../views/img/2.Forrest Gump.jpg'), alt: '2.阿甘正传' },
        { url: require('../views/img/3.The Pursuit of Happyness.jpg'), alt: '3.幸福来敲门' },
        { url: require('../views/img/4.这个杀手不太冷.jpg'), alt: '4.这个杀手不太冷' },
        { url: require('../views/img/5.WALL_E.jpg'), alt: '5.机器人总动员' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584438531340&di=0c69fbc0d55171aa8a1d2d107c3f7c87&imgtype=0&src=http%3A%2F%2Fimg21.mtime.cn%2Fpi%2F2011%2F01%2F12%2F134106.88324738_1000X1000.jpg', alt: '5.机器人总动员' }],
      auto: 3000
    }
  },
  methods: {
    hClick (idx) {
      console.log('子组件slider中, 第' + idx + '张图被点了')
    }
  }
}
</script>

<style>

</style>
