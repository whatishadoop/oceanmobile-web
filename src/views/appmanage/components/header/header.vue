<template>
  <div :cache="cache" :cid="cid" ctype="m-header" obj="component">
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64px" height="64px" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">虾米饭店</span>
          </div>
          <div class="description">
            蜂鸟专送
          </div>
          <div class="support">
            <span class="icon decrease"></span>
            <span class="text">在线满28减5，满50减10</span>
          </div>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="showDetail">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="100%" height="100%">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '@/views/appmanage/components/star/star'

  export default {
    components: {
      star
    },
    data() {
      return {
        cid: 'C' + 0,
        cache: ''
      }
    },
    methods: {
      showDetail() {
        this.$bus.$emit('on-drawers', 'm-detailshow', true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .header {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);
    .content-wrapper {
      position: relative;
      padding: 24px 12px 18px 24px;
      .avatar {
        display: inline-block;
        vertical-align: top;
        img {
          border-radius: 2px; /*角部区域水平和垂直半径都为2px*/
        }
      }
      .content {
        display: inline-block;
        margin-left: 16px;
        .title {
          margin: 2px 0 8px 0;
          text-align: left;
          color: #fff;
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            @include bg-image('brand'); /*背景图片设置必须是块元素*/
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name {
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description {
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              @include  bg-image('decrease_1');
            }
            &.discount {
              @include  bg-image('discount_1');
            }
            &.guarantee {
              @include bg-image('guarantee_1');
            }
            &.invoice {
              @include bg-image('invoice_1');
            }
            &.special {
              @include bg-image('special_1')
            }
          }
          .text {
            display: inline-block;
            line-height: 12px;
            font-size: 10px;
            vertical-align: top;
          }
        }
      }
    }
    .bulletin-wrapper {
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: rgba(7, 17, 27, 0.2);
      .bulletin-title {
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        @include bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text {
        vertical-align: top;
        margin: 0 4px;
        font-size: 10px;
      }
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
  }
</style>
