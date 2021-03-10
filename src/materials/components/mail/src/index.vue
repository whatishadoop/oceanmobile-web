<template>
  <div :cache="cache" :cid="cid" ctype="mail" obj="component" class="mail">
    <ul>
      <li v-for="(value,index) in mail" :key="index">
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
        mail: [{
          name: '邮箱',
          item: '更改邮箱账号'
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
