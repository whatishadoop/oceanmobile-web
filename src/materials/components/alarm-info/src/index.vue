<template>
  <div :cache="cache" :cid="cid" ctype="alarm-info" obj="component" class="alarminfo">
    <ul>
      <li v-for="(value,index) in alarmInfo" :key="index">
        <div class="title"><span :style="'border-color:'+ value.circleColor"></span>{{value.title}}</div>
        <ul>
          <li v-for="(v,i) in value.details" :key="i">
            {{i}}: &nbsp;&nbsp; {{v}}
          </li>
        </ul>
        <div class="footer">
          <span>{{value.footInfo1}}</span>
          <span>{{value.footInfo2}}</span>
        </div>
      </li>
    </ul>
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
        alarmInfo: [{
          title: '群体洞察XXXXXXXX被警告中',
          circleColor: '#FF534A',
          details: {
            '手机号': 19766203418,
            IMSI: 460006234567890,
            IMEI: 109698888877777
          },
          footInfo1: 'new规则5',
          footInfo2: '2018-08-12 20:00'
        }, {
          title: '群体洞察XXXXXXXX被警告中',
          circleColor: '#FF9F3E',
          details: {
            '手机号': 19766203418,
            IMSI: 460006234567890,
            IMEI: 109698888877777
          },
          footInfo1: 'new规则5',
          footInfo2: '2018-08-12 20:00'
        }, {
          title: '群体洞察XXXXXXXX被警告中',
          circleColor: '#3D74FD',
          details: {
            '手机号': 19766203418,
            IMSI: 460006234567890,
            IMEI: 109698888877777
          },
          footInfo1: 'new规则5',
          footInfo2: '2018-08-12 20:00'
        }, {
          title: '群体洞察XXXXXXXX被警告中',
          circleColor: '#3D74FD',
          details: {
            '手机号': 19766203418,
            IMSI: 460006234567890,
            IMEI: 109698888877777
          },
          footInfo1: 'new规则5',
          footInfo2: '2018-08-12 20:00'
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
