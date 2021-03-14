<template>
  <div id="drawers">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="detailShow" class="detail">
        <div class="content-wrapper">
          <div class="leftarrowtitle" style="background-color: white;" @click="hideDetail">
            {{title}}
          </div>
          <component :is="comName"></component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        title: '',
        comName: '',
        detailShow: false
      }
    },
    mounted() {
      this.$bus.$on('on-drawers', (title ,comName, isdetailShow) => {
        // 显示右侧弹出框
        this.title = title
        this.comName = comName
        this.detailShow = isdetailShow
      })
      this.$bus.$on('on-hideSecondaryPage', () => {
        this.detailShow = false
      })
    },
    methods: {
      hideDetail() {
        this.detailShow = false
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 100;
    color: #fff;
    transition: all 0.5s;
    /*background: rgba(7, 17, 27, 0.8);*/
    background-color: #fff;
    .back {
      position: relative;
      left: 0;
      top: 0;
      height: 30px;
      width: 100%;
      background: #fff;
      .icon-svg {
        height: 30px;
        width: 30px;
        color: #0f0f0f
      }
    }
    .content-wrapper {
      position: relative;
      left: 0px;
      width: 100%;
      height: 100%;
      .leftarrowtitle {
        height: 44px;
        background: url("./images/leftarrow.png") no-repeat 15.1px center;
        text-align: center;
        font-size: 18px;
        color: #333333;
        letter-spacing: 0.29px;
        line-height: 44px;
        position: relative;
      }
    }
  }
  .detail::-webkit-scrollbar { width: 0 !important }
</style>
