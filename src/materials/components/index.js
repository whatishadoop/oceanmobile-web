export default {
  install: function(Vue) {
    // 全局异步注册组件
    Vue.component('home-page', () => import('@/materials/components/home-page/src/index'))
    Vue.component('case-detail', () => import('@/materials/components/case-detail/src/index'))
    Vue.component('company-node-info', () => import('@/materials/components/my-case/src/drawer/companynodeinfo.vue'))
    Vue.component('sentiment-condition', () => import('@/materials/components/my-case/src/drawer/sentimentcondition.vue'))
    Vue.component('industry-info', () => import('@/materials/components/my-case/src/drawer/industryinfo.vue'))
  }
}
