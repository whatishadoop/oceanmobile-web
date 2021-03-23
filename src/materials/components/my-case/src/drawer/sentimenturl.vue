<template>
  <div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-if="showFlag" class="detail">
        <div class="main-wrapper">
          <div class="leftarrowtitle" style="background-color: #5584FF;" @click="hide">{{title}}</div>
          <div ref="contentWrapper" class="contentwrapper">
            <div class="casedetail">
              <div class="content" style="position: relative; top: 0px; width: 100%;height: 100%;bottom: 0px;">
                <iframe
                  :src="url"
                  style="height: 100%;width:100%;
        frameborder=no"
                  frameborder="no"
                  border="0"
                  marginWidth="0"
                  marginHeight="0"></iframe>
              </div>
            </div>
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
        title: '舆情详情',
        showFlag: false,
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml'
      }
    },
    methods: {
      show() {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.contentWrapper, {
              click: true,
              propTypes: 3
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .detail {
    position: fixed;
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
        .casedetail{
          width: 100%;
          height: 100%;
          font-family: NotoSansHans-Regular;
          padding: 0px;
          background: #ffffff;
          h1{
            font-size: 20px;
            @include zxsk-font-color($font-color-1,$font-color-5);
            line-height: 28px;
            padding: 14px 0 10px 0;
          }
          .casestatusbox{
            display: flex;
            font-size: 12px;
            @include zxsk-font-color($font-color-1,$font-color-5);
            line-height: 17px;
            .status{
              color: #EF7340;
            }
          }
          p{
            font-size: 14px;
            color: #333;
            line-height: 30px;
            padding: 8px 0 10px 0;
            text-align: justify;
          }
          h2{
            font-size: 16px;
            color:#333333;
            line-height: 22px;
            font-weight: bold;
            margin-bottom: 2px;
          }
          ul{
            list-style: none;
            li{
              font-size: 14px;
              line-height: 27px;
              padding: 11px 10px 10px 10px;
              margin-top: 10px;
              border-radius: 2px;
              box-shadow: 0 1px 4px #eeeeee;
              .content{
                display: flex;
                justify-content: space-between;
                img{
                  width:27px;
                  height:27px;
                }
                .number{
                  display:  inline-block;
                  flex: 3;
                  text-align: left;
                  padding-left: 12px;
                }
                .place{
                  flex:2;
                  text-align: right;
                  color:#999999;
                }
              }
            }
          }
          .btnbox{
            margin-top: 10px;
            .btncontent{
              display: flex;
              justify-content: space-between;
              input{
                width: 108px;
                height: 40px;
                border-radius: 20px;
                border: none;
                outline: none;
                background: #5584ff;
                font-size: 14px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
</style>
