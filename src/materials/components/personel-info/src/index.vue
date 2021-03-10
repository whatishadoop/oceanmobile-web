<template>
  <div :cache="cache" :cid="cid" ctype="personel-info" obj="component" class="personelinfo">
    <div class="personelphoto">
      <span>{{photoname}}</span>
      <div class="photoimg"><img :src="imgurl" alt=""></div>
    </div>
    <ul>
      <li v-for="(value,index) in personelinfo" :key="index">
        <div class="content">
          <span>{{value.name}}</span>
          <span>{{value.info}}</span>
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
        photoname: '头像',
        imgurl: require('./images/head_grxx.svg'),
        personelinfo: [
           {
            'name': '用户名',
            'info': '请输入昵称'
          },
          {
            'name': '手机号',
            'info': '请输入手机号'
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
