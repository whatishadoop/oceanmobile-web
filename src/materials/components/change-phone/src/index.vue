<template>

  <div :cache="cache" :cid="cid" ctype="change-phone" obj="component" class="changephone">
    <ul>
      <li v-for="(value,index) in listItem" :key="index">
        <span>{{value.name}}</span>
        <input :placeholder="value.item" type="text">
      </li>
    </ul>
    <button @click="logout">保存</button>
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
          name: '手机号',
          item: '输入新手机号'
        }, {
          name: '验证码',
          item: '输入验证码'
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
