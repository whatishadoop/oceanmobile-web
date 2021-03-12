<template>
  <div class="casedetail">
    <h1>{{casename}}</h1>
    <div class="casestatusbox">
      <span class="status">{{statusinfo}}</span>
      <span style="display: inline-block;margin-left: 10px;"></span>
      <span class="unit">{{unitinfo}}</span>
    </div>
    <p>案件描述：{{casedes}}</p>
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
        casename: '标题标题标题标题标题标题',
        statusinfo: '环球网  张良菊',
        unitinfo: '2018.04.23 12:00:00',
        casedes: '案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述'
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
