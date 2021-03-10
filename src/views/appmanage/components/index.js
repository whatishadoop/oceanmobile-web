export default {
  install: function(Vue) {
    // 全局异步注册组件
    Vue.component('barchart', () => import('@/views/appmanage/components/chart/barchart'))
    Vue.component('m-header', () => import('@/views/appmanage/components/header/header'))
    Vue.component('m-tabs', () => import('@/views/appmanage/components/tabs/tabs'))
    Vue.component('m-goods', () => import('@/views/appmanage/components/goods/goods'))
    Vue.component('m-seller', () => import('@/views/appmanage/components/seller/seller'))
    Vue.component('m-ratings', () => import('@/views/appmanage/components/ratings/ratings'))
    Vue.component('m-shopcart', () => import('@/views/appmanage/components/shopcart/shopcart'))
    Vue.component('m-detailshow', () => import('@/views/appmanage/components/detailshow/detailshow'))
    Vue.component('m-drawers', () => import('@/views/appmanage/components/drawers/drawers'))

    // 全局异步注册配置组件
    Vue.component('barchartconfig', () => import('@/views/appmanage/components/chart/barchartconfig'))
    Vue.component('barchartconfig02', () => import('@/views/appmanage/components/chart/barchartconfig02'))
  }
}
