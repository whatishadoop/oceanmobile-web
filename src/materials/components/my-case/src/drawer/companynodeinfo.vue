<template>
  <div>
    <div class="main-content">
      <div class="content-wrapper">
        <div class="desc">
          <div class="logo">

          </div>
          <div class="detail">
            <div class="name">公司名称公司名称</div>
            <div class="info"><span>成立日期:2020-09-19</span></div>
          </div>
        </div>
        <div class="profile-wrapper">
          <span class="profile">经营范围:软件及通讯产品(不含卫星广播电视地面接收设施)经营范围:软件及通讯产品(不含卫星广播电视地面接收设施)</span>
        </div>
        <div class="tabs">
          <div v-for="index in 3" :key="index" class="tab-item">
            <div class="text-one"><span>社会统一信用代码</span></div>
            <div class="text-two"><span>91320114663</span></div>
          </div>
        </div>
        <div class="lastdate">
          <span>数据更新: </span><span>2020-01-07 14:13:14</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="company-info-wrapper">
        <div class="company-info">企业信息</div>
        <div class="attrs-wrapper">
          <div v-for="index in 3" :key="index" class="attrs">
            <div v-for="index in 2" :key="index" class="attr-item">
              <div class="text-one"><span>社会统一信用代码</span></div>
              <div class="text-two"><span>91320114663</span></div>
            </div>
          </div>
        </div>
        <div v-show="isShow" class="attrs-wrapper">
          <div v-for="index in 3" :key="index" class="attrs">
            <div v-for="index in 2" :key="index" class="attr-item">
              <div class="text-one"><span>社会统一信用代码</span></div>
              <div class="text-two"><span>91320114663</span></div>
            </div>
          </div>
        </div>
        <div v-show="isShow" class="attrs-wrapper">
          <div v-for="index in 6" :key="index" class="attrs">
            <div class="attr-item">
              <div class="text-one"><span>社会统一信用代码</span></div>
              <div class="text-two"><span>91320114663</span></div>
            </div>
          </div>
        </div>
        <div class="morecase" @click="showMoreInfos">
          查看更多信息 <i class="el-icon-arrow-down"></i>
        </div>
      </div>
      <div class="event-info-wrapper">
        <div class="event-info">重大事件</div>
        <div class="event-type-one">
          <el-tag class="item">全部(34)</el-tag>
          <el-tag class="item">投融资(5)</el-tag>
          <el-tag class="item">招投标(6)</el-tag>
        </div>
        <div class="event-type-one">
          <el-tag class="item">战略合作(2)</el-tag>
          <el-tag class="item">新品发布(3)</el-tag>
          <el-tag class="item">其它事件(12)</el-tag>
        </div>
        <div class="timeline-wrapper">
          <el-timeline>
            <el-timeline-item v-for="index in 6" :key="index" timestamp="2021-02-07 11:00:00" placement="top">
              <el-card>
                <div class="title"><el-tag size="mini">投融资</el-tag><span style="margin-left: 8px;">投融资商业座谈会</span></div>
                <div class="query-more">查看<i class="el-icon-arrow-right"></i></div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="morecase" @click="showMoreEvents">
          查看更多事件 <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getDataDetailByCondition } from '@/api/app'
  export default {
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
    },
    methods: {
      showMoreInfos() {
        this.isShow = true
      },
      showMoreEvents() {
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .main-content {
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    .content-wrapper {
      width: 345px;
      .desc {
        display: flex;
        height: 75px;
        .logo {
          flex: 0 1 56px;
          margin: 10px 10px 10px 0px;
          background-color: #e2e1e1;
        }
        .detail {
          margin: 10px;
          .name {
            text-align: left;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: rgba(0,0,0,0.80);
          }
          .info {
            margin-top: 10px;
            text-align: left;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(0,0,0,0.40);
          }
        }
      }
      .profile-wrapper {
        height: 40px;
        padding: 2px 10px 0px 0px;
        .profile {
          /*多行文本溢出*/
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: rgba(0,0,0,0.60);
        }
      }
      .tabs {
        display: flex;
        justify-content: space-between;
        height: 45px;
        .tab-item {
          width: 110px;
          flex: 0 0 110px;
          display: flex;
          flex-direction: column;
          align-items: left;
          .text-one {
            flex: 1;
            padding-top: 5px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(179, 179, 179, 100);
          }
          .text-two {
            flex: 1;
            margin-top: -5px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(49, 49, 49, 100);
          }
        }
      }
      .lastdate {
        padding: 6px 10px 0px 0;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0,0,0,0.40);
      }
    }
    .divider {
      height: 10px;
      line-height: 20px;
      margin-top: 10px;
      background-color: rgba(242, 242, 242, 100);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 100);
    }
    .company-info-wrapper {
      .company-info {
        width: 57px;
        height: 19px;
        margin-top: 16px;
        display: inline-block;
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
      }
      .attrs-wrapper {
        padding-top: 10px;
        padding-bottom: 6px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .attrs {
          display: flex;
          height: 45px;
          padding-left: 10px;
          .attr-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: left;
            .text-one {
              flex: 1;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: rgba(179, 179, 179, 100);
            }
            .text-two {
              flex: 1;
              margin-top: -5px;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: rgba(49, 49, 49, 100);
            }
          }
        }
      }
      .morecase {
        margin: 10px 13px 0 13px;
        height: 47px;
        line-height: 47px;
        text-align: center;
        background: rgba(48,122,255,0.08);
        font-size: 18px;
        color: #306DFE;
      }
    }
    .event-info-wrapper {
      .event-info {
        width: 57px;
        height: 19px;
        margin-top: 16px;
        display: inline-block;
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
      }
      .event-type-one {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        .item {
          width: 100px;
          flex: 0 0 100px;
          background-color: rgba(208, 232, 244, 100);
          color: rgba(0, 122, 255, 100);
          text-align: center;
        }
      }
      .timeline-wrapper {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 15px;
        .title {
          display: flex;
          align-items: center;
          margin-bottom: 0px;
          color: rgba(16, 16, 16, 100);
          font-size: 12px;
        }
        .query-more {
          margin-left: 2px;
          margin-top: 5px;
          color: #BDBCBC;
          font-size: 12px;
        }
      }
      .morecase {
        margin: 10px 13px 0 13px;
        height: 47px;
        line-height: 47px;
        text-align: center;
        background: rgba(48,122,255,0.08);
        font-size: 18px;
        color: #306DFE;
      }
    }
  }
</style>
