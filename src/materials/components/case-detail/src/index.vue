<template>
  <div :cache="cache" :cid="cid" ctype="case-detail" obj="component" class="casedetail">
    <h1>{{casename}}</h1>
    <div class="casestatusbox">
      <span class="status">{{statusinfo}}</span>
      <span class="unit">{{unitinfo}}</span>
    </div>
    <img :src="caseimg" class="caseimg" alt="">
    <p>案件描述：{{casedes}}</p>
    <h2>{{relatedper}}</h2>
    <ul>
      <li v-for="(value,index) in caseperson" :key="index">
        <div class="content">
          <img :src="value.img" alt="">
          <span class="number">{{value.number}}</span>
          <span class="place">所在地：{{value.place}}</span>
        </div>
      </li>
    </ul>
    <div class="btnbox">
      <div class="btncontent">
        <input type="button" value="挂起">
        <input type="button" value="退回">
        <input type="button" value="结案">
      </div>
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
        casename: 'ADSAKD0012990331',
        statusinfo: '开展中',
        unitinfo: '长沙市公安厅',
        caseimg: require('./images/case.png'),
        casedes: '案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述案件描述',
        relatedper: '关联人员',
        caseperson: [
          {
            'img': require('./images/head_grxx.svg'),
            'number': '172386237192',
            'place': '南京'
          },
          {
            'img': require('./images/head_grxx.svg'),
            'number': '172386237192',
            'place': '南京'
          }
        ]
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
