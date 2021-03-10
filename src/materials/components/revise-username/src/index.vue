<template>
  <div :cache="cache" :cid="cid" ctype="revise-username" obj="component" class="reviseusername">
    <div class="revise-box">
      <span>{{username}}</span>
      <input type="text" placeholder="请输入用户名">
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
        username: '用户名'
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
