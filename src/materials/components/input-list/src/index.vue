<template>
  <div :cache="cache" :cid="cid" ctype="input-list" obj="component" class="inputlist">
    <ul>
      <li v-for="(value,index) in listItem" :key="index">
        <span>{{value.name}}</span>
        <input :placeholder="value.item" type="text">
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
        listItem: [{
          name: '原密码',
          item: '请输入原始密码'
        }, {
            name: '新密码',
            item: '请设置6-12位数字、字母密码'
          }, {
            name: '确认密码',
            item: '请输入您的密码'
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
