<template>
  <div>
    <div class="situationcase-wrapper">
      <div class="situationcase-title">
        <el-tag type="info" class="item">全部 121</el-tag>
        <el-tag type="info" class="item">预警 20</el-tag>
        <el-tag type="info" class="item">收藏 30</el-tag>
        <el-tag type="info" class="item" @click="showCondition" >帅选 <i class="el-icon-search"></i></el-tag>
      </div>
      <ul class="case">
        <li
          v-for="(value,index) in [1,2,3,4]"
          :key="index"
          class="case-item"
          style="height: 148px;">
          <div class="content">
            <div class="name">标题标题标题标题标题标题</div>
            <div class="text" @click="showDetails">
              <span>这里说新闻信息的摘要，可能很长很长很这里说新闻信息的要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要这里说新闻信息的摘要，可能很长很长很这里说新闻信息的要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要这里说新闻信息的摘要，可能很长很长很这里说新闻信息的要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要
              </span>
              <div class="detail">
                <i class="el-icon-arrow-right" style="font-size: 14px;"></i>
              </div>
            </div>
            <div class="desct">
              <span class="source">环球网  张良菊</span>
              <span class="date">2018.04.23 12:00:00</span>
            </div>
            <div class="actions">
              <div class="item"><span><i class="el-icon-delete"></i> 忽略</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 预警</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 收藏</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 更多</span></div>
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
        this.$bus.$emit('on-drawers', '舆情详情', 'case-detail', true)
      },
      showCondition() {
        this.$bus.$emit('on-drawers', '帅选条件', 'sentiment-condition', true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.situationcase-wrapper {
    margin-top: 32px;

    .situationcase-title {
      padding-left: 20px;
      padding-right: 16px;
      display: flex;
      .item {
        margin-right: 10px;
        text-align: center;
        flex: 1;
        &:last-child {
          margin-right: 0px;
          text-align: center;
        }
      }
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

          .text {
            position: relative;
            height: 56px;
            color: #828283;
            font-size: 12px;
            text-align: left;
            font-family: PingFangSC-regular;
            padding-right: 28px;
            /*多行文本溢出*/
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            &:last-child {
              margin-bottom: 13px;
            }
            .detail {
              position: absolute;
              top: 18px;
              right: 1px;
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
            height: 30px;
            line-height: 30px;
            .detail {
              display: inline-block;
              float: right;
            }
            .source {
              width: 80px;
              height: 17px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
            .date {
              width: 118px;
              height: 17px;
              margin-left: 12px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
          }
          .actions {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;
            padding-left: 10px;
            .item {
              flex: 1 0 70px;
              font-size: 14px;
              text-align: left;
              &:after {
                content: " ";
                border-left: 1px solid rgba(174, 174, 178, 100);;
                margin-left: 12px;
              }
              &:last-child {
                &:after{
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
