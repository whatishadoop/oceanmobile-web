export default {
  install: function(Vue) {
    // 全局异步注册组件
    Vue.component('my-component', () => import('@/materials/components/my-component/src/index'))
    Vue.component('map-ol', () => import('@/materials/components/map-ol/src/index'))

    Vue.component('echarts-chart', () => import('@/materials/components/echarts-component/src/views/chart'))
    Vue.component('labels', () => import('@/materials/components/labels/src/views/index'))
    Vue.component('labelsTop', () => import('@/materials/components/labels/src/views/labelsTop'))
    Vue.component('leftarrow-title', () => import('@/materials/components/letfarrow-title/src/index'))
    Vue.component('alarm-info', () => import('@/materials/components/alarm-info/src/index'))
    Vue.component('place-holder', () => import('@/materials/components/place-holder/src/index'))
    Vue.component('input-list', () => import('@/materials/components/input-list/src/index'))
    Vue.component('case-list', () => import('@/materials/components/case-list/src/index'))
    Vue.component('tabs-list', () => import('@/materials/components/tabs-list/src/index'))
    Vue.component('main-page', () => import('@/materials/components/mainpage/src/index'))
    Vue.component('personel-info', () => import('@/materials/components/personel-info/src/index'))
    Vue.component('personel-detail', () => import('@/materials/components/personel-detail/src/index'))
    Vue.component('mail', () => import('@/materials/components/mail/src/index'))
    Vue.component('home-page', () => import('@/materials/components/home-page/src/index'))
    Vue.component('change-phone', () => import('@/materials/components/change-phone/src/index'))
    Vue.component('show-list', () => import('@/materials/components/show-list/src/index'))
    Vue.component('revise-username', () => import('@/materials/components/revise-username/src/index'))
    Vue.component('case-detail', () => import('@/materials/components/case-detail/src/index'))
    Vue.component('btn', () => import('@/materials/components/btn/src/index'))
    Vue.component('btn-small', () => import('@/materials/components/btn-small/src/index'))
    Vue.component('my-case', () => import('@/materials/components/my-case/src/index'))
    Vue.component('specific-page', () => import('@/materials/components/specific-page/src/index'))
    Vue.component('filter-page', () => import('@/materials/components/filter-page/src/index'))
    Vue.component('search-page', () => import('@/materials/components/search-page/src/index'))
    Vue.component('echarts-tabs', () => import('@/materials/components/echarts-tabs/src/index'))
    Vue.component('company-node-info', () => import('@/materials/components/my-case/src/drawer/companynodeinfo.vue'))

    // 全局异步注册配置组件
    Vue.component('echarts-config', () => import('@/materials/components/echarts-component/src/editors/echartsConfig'))
    Vue.component('personelInfo-config', () => import('@/materials/components/my-component/src/editors/personelInfoConfig'))
    Vue.component('placehodler-config', () => import('@/materials/components/place-holder/src/editors/placeHolderConfig'))
    Vue.component('leftarrowtitle-config', () => import('@/materials/components/letfarrow-title/src/editors/leftArrowTitleConfig'))
    Vue.component('btn-config', () => import('@/materials/components/btn/src/editors/btnConfig'))
    Vue.component('btnsmall-config', () => import('@/materials/components/btn-small/src/editors/btnSmallConfig'))
    Vue.component('map-config', () => import('@/materials/components/map-ol/src/editors/mapConfig'))
  }
}
