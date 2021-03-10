<template>
  <div :cache="cache" :cid="cid" ctype="show-list" obj="component" class="showlist">
    <ul>
      <li v-for="(value,index) in itemList" :key="index">
        <span>{{value.item}}</span>
        <span>{{value.num}}</span>
      </li>
    </ul>

    <ul>
      <li v-for="(value,index) in itemList1" :key="index">
        <span>{{value.item}}</span>
        <span>{{value.num}}</span>
      </li>
    </ul>

    <ul>
      <li v-for="(value,index) in itemList2" :key="index">
        <span>{{value.item}}</span>
        <span>{{value.num}}</span>
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
        itemList: [{
          item: 'IMSI',
          num: '460006234567890'
        }, {
          item: 'MSISDN',
          num: '8613501978189'
        }, {
          item: 'IMEI',
          num: '109698888877777'
        }],
        itemList1: [{
          item: '手机号',
          num: '13525300452'
        }, {
          item: '证件信息',
          num: '320722199724286483'
        }, {
          item: '工作单位',
          num: '果农'
        }, {
          item: '政治面貌',
          num: '中共党员'
        }],
        itemList2: [{
          item: '国籍',
          num: '中国'
        }, {
          item: '出生地',
          num: '南京市'
        }, {
          item: '婚姻状况',
          num: '已婚'
        }, {
          item: '宗教信仰',
          num: '佛教'
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
