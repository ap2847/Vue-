// 注意，只引入css
import 'semantic-ui-css/semantic.css'

// 引入定义好的组件
import MyButton from './button/button.vue'

// 整体向外导出一个对象
export default {

  install (Vue) {
    console.log('install ....')
    Vue.component('MyButton', MyButton)
  }
}
