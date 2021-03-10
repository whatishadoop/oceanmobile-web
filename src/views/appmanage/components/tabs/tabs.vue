<template>
    <div :cache="cache" :cid="cid" ctype="m-tabs" obj="component">
      <div class="tabs">
        <div class="tab border-1px">
          <div class="tab-item">
            <span @click="getComponentView('m-goods')">商品</span>
          </div>
          <div class="tab-item">
            <span @click="getComponentView('m-ratings')">评论</span>
          </div>
          <div class="tab-item">
            <span @click="getComponentView('m-seller')">商家</span>
          </div>
        </div>
        <keep-alive><component :is="componentView"></component></keep-alive>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data() {
      return {
        cid: 'C' + 0,
        cache: '',
        componentView: 'm-goods'
      }
    },
    methods: {
      getComponentView(name) {
        this.componentView = name
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .tabs {
    position: relative;
    overflow: hidden;
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .tab-item {
        flex: 1;
        text-align: center;
        & > a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
</style>
