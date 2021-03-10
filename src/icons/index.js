import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// 自定义标签组件，并进行全局注册
Vue.component('svg-icon', SvgIcon)

// import './icon/svg/xxx.svg';每用一个都要重复一遍这个流程，太麻烦，那么我们就让 src/assets/svg/ 下的 svg 文件都自动导入,使用如下方法，以后新增svg只要放入指定svg目录下变可以自动解析并使用
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
