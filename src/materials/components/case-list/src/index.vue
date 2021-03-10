<template>
  <div :cache="cache" :cid="cid" ctype="case-list" obj="component" class="caselist">
    <ul>
      <li v-for="(value,index) in caseList" :key="index">
        <div class="title"><span :style="'border-color:'+ value.circleColor"></span>{{value.station}}</div>
        <div class="details">
          <span>{{value.footInfo1}}&nbsp;&nbsp;{{value.footInfo2}}</span>
          <span>{{value.footInfo3}}</span>
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
        caseList: [{
          station: '湖南省公安厅',
          circleColor: '#FF534A',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.23'
        }, {
          station: '湖南省公安厅',
          circleColor: '#FF9F3E',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.22'
        }, {
          station: '湖南省公安厅',
          circleColor: '#3D74FD',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.21'
        }, {
          station: '湖南省公安厅',
          circleColor: '#3D74FD',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.20'
        }, {
          station: '湖南省公安厅',
          circleColor: '#3D74FD',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.19'
        }, {
          station: '湖南省公安厅',
          circleColor: '#3D74FD',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.18'
        }, {
          station: '湖南省公安厅',
          circleColor: '#3D74FD',
          footInfo1: '案件号',
          footInfo2: '9A757DGJK34V5JDG',
          footInfo3: '2018.04.17'
        }]
      }
    },
    mounted: function() {

    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {}
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
