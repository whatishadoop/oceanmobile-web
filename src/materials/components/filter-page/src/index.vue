<template>
  <div :cache="cache" :cid="cid" ctype="filter-page" obj="component" class="filterpage">
    <ul>
      <li v-for="(value, index) in filterData" :key="index">
        <div class="title">{{value.title}}</div>
        <div class="content">
          <span v-for="(v, i) in value.items" :key="i" :style="{backgroundColor: v.background, color: v.fontColor}">{{v.name}}</span>
        </div>
      </li>
    </ul>
    <div class="btns">
      <span>确定</span>
      <span>确定</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      passCache:
        {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        cid: 'C' + 0,
        cache: '',
        filterData: [{
          title: '特定VPN',
          items: [{
            name: '百度VIP',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: 'SuperVPN',
            background: '#5584FF',
            fontColor: '#FFFFFF'
          }, {
            name: 'AirgoVpn',
            background: '#5584FF',
            fontColor: '#FFFFFF'
          }, {
            name: '加速精灵',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: 'TOP浏览色',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: 'AirgoVpn',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: 'AirgoVpn',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '更多',
            background: '#F2F3F7',
            fontColor: '#333333'
          }]
        }, {
          title: '特定语种',
          items: [{
            name: '藏文',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '维文/阿拉伯',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '朝文',
            background: '#5584FF',
            fontColor: '#FFFFFF'
          }, {
            name: '蒙文',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '缅甸',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '柬埔寨',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '老挝',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: '更多',
            background: '#F2F3F7',
            fontColor: '#333333'
          }]
        }, {
          title: '特定网站',
          items: [{
            name: 'baidu',
            background: '#F2F3F7',
            fontColor: '#333333'
          }, {
            name: 'google',
            background: '#F2F3F7',
            fontColor: '#333333'
          }]
        }]
      }
    },
    mounted: function() {

    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {

    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
