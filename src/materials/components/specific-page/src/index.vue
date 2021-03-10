<template>
  <div :cache="cache" :cid="cid" ctype="specific-page" obj="component" class="specificpage">
    <div class="compDom">
      <ul>
        <li v-for="(value, index) in specificData" :key="index">
          <div class="header">
            <span :style="{borderColor: value.logoColor}"></span>
            <span>21CN免费邮箱</span>
          </div>
          <div class="first">MSISDN:&nbsp;&nbsp;{{value.MSISDN}}</div>
          <div class="other">IMSI:&nbsp;&nbsp;{{value.IMSI}}</div>
          <div class="other">IMEI:&nbsp;&nbsp;{{value.IMEI}}</div>
          <div class="other last">
            <span>2018.04.23 12:48</span>
            <span>查看详情</span>
          </div>
        </li>
      </ul>
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
        specificData: [{
          logoColor: '#FF534A',
          MSISDN: '8613501978189',
          IMSI: '460006234567890',
          IMEI: '109698888877777'
        }, {
          logoColor: '#FFB24A',
          MSISDN: '8613501978189',
          IMSI: '460006234567890',
          IMEI: '109698888877777'
        }, {
          logoColor: '#4A6CFF',
          MSISDN: '8613501978189',
          IMSI: '460006234567890',
          IMEI: '109698888877777'
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
