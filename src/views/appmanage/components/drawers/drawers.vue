<template>
  <div id="drawers">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="detailShow" class="detail">
        <div class="main-wrapper">
          <div class="leftarrowtitle" style="background-color: #007AFF;" @click="hideDetail">
            {{title}}
          </div>
          <div ref="contentWrapper" class="contentwrapper">
            <component :is="comName"></component>
            <!--<company-node-info></company-node-info>-->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        title: '',
        comName: 'company-node-info',
        detailShow: false
      }
    },
    mounted() {
      this.$bus.$on('on-drawers', (title, comName, isdetailShow) => {
        // 显示右侧弹出框
        this.title = title
        this.comName = comName
        this.detailShow = isdetailShow
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.contentWrapper, {
            click: true,
            propTypes: 3
          })
        })
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
    .main-wrapper {
      position: relative;
      left: 0px;
      width: 100%;
      height: 100%;
      .leftarrowtitle {
        height: 44px;
        background: url("./images/wleftarrow.png") no-repeat 15.1px center;
        text-align: center;
        color: rgba(242, 242, 247, 100);
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.29px;
        line-height: 44px;
        position: relative;
      }
      .contentwrapper {
        position: relative;
        top: 0px;
        bottom: 60px;
        width: 100%;
        height: calc(100vh - 44px);
        overflow: hidden;
      }
    }
  }
  /*.detail::-webkit-scrollbar { width: 0 !important }*/
</style>
