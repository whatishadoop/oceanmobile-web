export default {
  install: function(Vue) {
    // 全局异步注册组件
    Vue.component('m-drawers', () => import('@/views/appmanage/components/drawers/drawers'))
  }
}
