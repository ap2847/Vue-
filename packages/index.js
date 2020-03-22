// 注意，只引入css
import 'semantic-ui-css/semantic.css'

// 引入定义好的组件
import MyButton from './button/button.vue'

import MyDivider from './divider/divider.vue'

import MySlider from './slider/slider.vue'

import MyHeadline from './headline/headline.vue'

import MyDialog from './dialog/dialog.vue'

// 整体向外导出一个对象
export default {

  install (Vue) {
    console.log('install ....')
    Vue.component('MyButton', MyButton)
    Vue.component('MyDivider', MyDivider)
    Vue.component('MySlider', MySlider)
    Vue.component('MyHeadline', MyHeadline)
    Vue.component('MyDialog', MyDialog)
  }
}
