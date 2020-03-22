
  <!-- <div>
    <h1 v-if="level===1" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header"><slot name="sub"></slot></div>
      </div>
    </h1> -->

    <!-- <h2 v-if="level===2" class="ui header" :class="size">
      <i v-if="icon" class="icon" :class="icon"></i>
      <div class="content">
        <slot></slot>
        <div class="sub header"><slot name="sub"></slot></div>
      </div>
    </h2>
  </div> -->

<!-- // </template -->

<script>
export default {
  name: 'MyHeadline',
  // 定义属性来收集用户的输入
  props: {
    level: {
      type: Number, // h1,h2,h3...
      default: 1,
      required: false
    },
    icon: {
      type: String, // 图标
      default: '', // 默认没有图标
      required: false
    },
    size: {
      type: String, // 大小
      default: 'mini', // 默认为mini
      required: false
    }
  },
  data () {
    return {

    }
  },
  render (h) {
    // 判断是否有icon
    let icon = null
    let content = null
    if (this.icon) {
      icon = h('i', { class: 'icon ' + this.icon })
    }

    if (this.$slots.sub) {
      // 有副标题的
      // 创建副标题
      const subContent = h('div', { class: 'sub header' }, [this.$slots.sub])
      content = h('div', { class: 'content' }, [this.$slots.default, subContent])
    } else {
      content = h('div', { class: 'content' }, [this.$slots.default])
    }

    return h('h' + this.level, { class: 'ui header' + this.size }, [icon, content])
  }
}
</script>

<style>

</style>
