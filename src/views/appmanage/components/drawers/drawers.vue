<template>
  <div id="drawers">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="detailShow" class="detail">
          <!--<component :is="comName"></component>-->
        <div class="content-wrapper">
          <div id="mount-pointttt"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { get } from '@/api/appPage'

  export default {
    data() {
      return {
        comName: 'm-detailshow',
        detailShow: false
      }
    },
    mounted() {
      this.$bus.$on('on-drawers', (comName, isdetailShow) => {
        // this.comName = comName
        // this.detailShow = isdetailShow
        // 从后台读取预览区域内容
        this.apppage = {
          id: comName,
          page: 0,
          size: 9999
        }
        get(this.apppage).then(res => {
          console.log('=============返回预览内容==============')
          console.log(res)
          const apppage = res.contentParse
          const htmlContent = `<div>${apppage}</div>`
          // 动态加载页面到手机区域
          var PageComponent = Vue.extend({
            template: htmlContent
          })
          new PageComponent().$mount('#mount-pointttt')

          // 显示右侧弹出框
          this.detailShow = isdetailShow
        }).catch(err => {
          console.log(err.response.date.message)
        })
      })
      this.$bus.$on('on-hideSecondaryPage', () => {
        this.detailShow = false
        $('#drawers .content-wrapper').empty()
        $('#drawers .content-wrapper').append(`<div id="mount-pointttt"></div>`)
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
    }
  }
  .detail::-webkit-scrollbar { width: 0 !important }
</style>
