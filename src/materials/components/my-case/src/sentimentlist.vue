<template>
  <div>
    <div class="situationcase-wrapper">
      <div class="situationcase-title">
        <el-tag type="info">全部 121</el-tag><el-tag type="info">预警 20</el-tag><el-tag type="info">收藏 30</el-tag><el-tag type="info">帅选 +</el-tag>
      </div>
      <ul class="case">
        <li
          v-for="(value,index) in [1,2,3,4]"
          :key="index"
          class="case-item"
          style="height: 148px;">
          <div class="content">
            <div class="name">湖南省公安厅</div>
            <div class="text">MSISDN：8613501978189</div>
            <div class="text">IMSI：460006234567890</div>
            <div class="text">IMEI：109698888877777</div>
            <div class="desct">
              <span class="date">2018.04.23</span>
              <span class="detail"><el-button type="primary" size="mini" round @click="showDetails">查看详情</el-button></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      showDetails() {
        this.$bus.$emit('on-drawers', 85, true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.situationcase-wrapper {
    margin-top: 32px;

    .situationcase-title {
      padding-left: 16px;

      .title {
        font-size: 20px;
        line-height: 28px;
        color: #333333;
      }

      .subtitle {
        margin-left: 8px;
        font-size: 15px;
        line-height: 21px;
      }
    }

    .case {
      margin: 0;
      padding-left: 20px;
      padding-right: 16px;

      .case-item {
        display: flex;
        height: 74px;
        margin: 14px 0px 14px 0px;
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
            margin: 2px 0 8px 0;
            height: 25px;
            line-height: 25px;
            font-size: 18px;
            color: #161619;
          }

          .text {
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #161619;

            &:last-child {
              margin-bottom: 13px;
            }
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
            margin-bottom: 8px;
            margin-top: 11px;
            height: 30px;
            line-height: 30px;
            .detail {
              display: inline-block;
              float: right;
            }

            .date {
              line-height: 18px;
              font-size: 13px;
              color: #000000;
              float: left;
              margin-top: 8px;
            }
          }
        }
      }
    }

    .morecase {
      margin: 18px 13px 26px 13px;
      height: 47px;
      line-height: 47px;
      text-align: center;
      background: #F2F3F7;
      font-size: 18px;
      color: #999999;
    }
  }
</style>
