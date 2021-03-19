export default {
  install: function(Vue) {
    // 全局异步注册组件
    Vue.component('my-case', () => import('@/materials/components/my-case/src/index'))
    Vue.component('sentimentlog', () => import('@/materials/components/my-case/src/sentimentlog.vue'))
    Vue.component('my-component', () => import('@/materials/components/my-component/src/index'))

    Vue.component('main-page', () => import('@/materials/components/mainpage/src/index'))
    Vue.component('home-page', () => import('@/materials/components/home-page/src/index'))
    Vue.component('case-detail', () => import('@/materials/components/case-detail/src/index'))
    Vue.component('company-node-info', () => import('@/materials/components/my-case/src/drawer/companynodeinfo.vue'))
    Vue.component('sentiment-condition', () => import('@/materials/components/my-case/src/drawer/sentimentcondition.vue'))
    Vue.component('competitive-company', () => import('@/materials/components/my-case/src/drawer/competitivecompany.vue'))
    Vue.component('industry-info', () => import('@/materials/components/my-case/src/drawer/industryinfo.vue'))
  }
}
