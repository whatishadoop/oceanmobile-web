<template>
  <div :cache="cache" :cid="cid" ctype="search-page" obj="component" class="searchpage">
    <div class="searchShodow">
      <div class="searchDiv">
        <input v-model="searchInputInfo" type="text" class="search-input" placeholder="请输入内容检索" clearable/>
        <!--<i class="icon-search"></i>-->
        <svg-icon icon-class="search-light" class="icon-search"/>
        <span>搜索</span>
        <div class="clickBtn" @click="hideDetail"></div>
      </div>
    </div>
    <div class="history">
      <span>历史搜素</span>
      <span @click="clear">
        <svg-icon icon-class="icon_delete" class="icon-delete"/>
      </span>
    </div>
    <div class="historySearch">
      <span v-for="(value, index) in historyData" :key="index">{{value}}</span>
    </div>
    <!--<div class="line"></div>-->
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
        searchInputInfo: '',
        historyData: ['昼夜浮出', '15告警', '1762656']
      }
    },
    mounted: function() {

    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      clear() {
        this.historyData = []
      },
      hideDetail() {
        this.$bus.$emit('on-hideSecondaryPage')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
