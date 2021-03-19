<template>
  <div>
    <div class="situationcase-wrapper">
      <div class="head">舆情日报</div>
      <div ref="contentWrapper" class="content">
        <ul class="case">
          <li
            v-for="(value,index) in [1,2,3,4,7,8,9,10,11,12,13,14]"
            :key="index"
            class="case-item"
            @click="showDetails"
          >
            <div class="content">
              <div class="name">标题标题标题标题标题标题</div>
              <div class="desct">
                <span class="date">2018.04.23 12:00:00</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted: function() {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      showDetails() {
        this.$bus.$emit('on-drawers', '日报详情', 'case-detail', true)
      },
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.contentWrapper, {
          click: true,
          propTypes: 3
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.situationcase-wrapper {
    .head{
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: #5584FF;
      letter-spacing: 0.29px;
      text-align: center;
    }
    .content {
      position: relative;
      top: 5px;
      bottom: 60px;
      width: 100%;
      height: calc(100vh - 102px);
      padding-left: 10px;
      overflow: hidden;
      .case {
        padding-left: 20px;
        padding-right: 16px;
        .case-item {
          display: flex;
          height: 60px;
          margin: 0px 0px 14px 0px;
          list-style: none;
          overflow: hidden;
          @include border-1px(rgba(7, 17, 27, 0.1));

          .icon {
            display: inline-block;
            vertical-align: top;
            margin-top: 10px;
            margin-right: 9px;
            width: 10px;
            height: 10px;
            /*背景图片设置必须是块元素*/
            background-size: 10px 10px;
            background-repeat: no-repeat;
          }

          .content {
            flex: 1;
            margin-top: 0;

            .name {
              margin: 2px 0 0 0;
              left: 19px;
              top: 139px;
              width: 180px;
              height: 20px;
              color: rgba(16, 16, 16, 100);
              font-size: 14px;
              text-align: left;
              font-family: PingFangSC-bold;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .desc {
              margin-bottom: 8px;
              margin-top: 11px;

              .count {
                /*margin-right: 59px;*/
                line-height: 14px;
                font-size: 14px;
                color: #161619;
                float: left;
              }

              .date {
                line-height: 18px;
                font-size: 13px;
                color: #000000;
                float: right;
              }
            }
            .desct {
              height: 30px;
              line-height: 30px;
              .detail {
                display: inline-block;
                float: right;
              }
              .date {
                width: 118px;
                height: 17px;
                color: rgba(174, 174, 174, 100);
                font-size: 12px;
                text-align: left;
                font-family: PingFangSC-regular;
                float: left;
              }
            }
          }
        }
      }
    }
  }
</style>
