<template>
  <div>
    <div class="case-wrapper">
      <div class="name">
        <div class="lable">方案名称:</div>
        <div class="input-wrapper">
          <el-input v-model="input" placeholder="请选择方案名称"/>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">企业名称:</div>
          <div class="input-wrapper" @click="showCompanyName">
            <el-input v-model="input" :readonly="true" placeholder="请选择企业名称"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">主要成员:</div>
          <div class="input-wrapper">
            <el-input v-model="input" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">分支机构:</div>
          <div class="input-wrapper">
            <el-input v-model="input" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">竞品公司:</div>
          <div class="input-wrapper" @click="showCompetitiveCompany">
            <el-input v-model="input" :readonly="true" placeholder="请选择竞品公司" />
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">所属行业:</div>
          <div class="input-wrapper" @click="showIndusryInfo">
            <el-input v-model="input" :readonly="true" placeholder="请选择所属行业"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">技术方案:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入技术方案"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">排除词:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">预警方式</div>
        <div class="name">
          <div class="lable">预警词:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">媒体预警:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">作者预警:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <el-button style="width: 310px;" type="primary" round>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods: {
      showCompanyName() {
        this.$bus.$emit('on-drawers', '企业名称', 'competitive-company', true)
      },
      showCompetitiveCompany() {
        this.$bus.$emit('on-drawers', '竞品公司', 'competitive-company', true)
      },
      showIndusryInfo() {
        this.$bus.$emit('on-drawers', '所属行业', 'industry-info', true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.case-wrapper {
  width: 375px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
    .name {
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 100);
      text-align: center;
      padding-left: 10px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .lable {
        width: 70px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        text-align: left;
      }
      .input-wrapper {
        width: 250px;
      }
    }
    .monitor-word {
      background-color: rgba(247, 247, 247, 100);
      .title {
        height: 45px;
        width: 100%;
        padding-top: 4px;
        padding-left: 10px;
        margin-bottom: 0px;
        line-height: 40px;
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }
      .name {
        display: flex;
        height: 45px;
        align-items: center;
        background-color: rgba(255, 255, 255, 100);
        text-align: center;
        padding-left: 10px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .lable {
          width: 70px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(0,0,0,0.80);
          text-align: left;
        }
        .input-wrapper {
          width: 250px;
        }
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
      padding-left: 10px;
    }
  }
  /*修改输入框样式*/
  .input-wrapper /deep/ .el-input__inner {
    border-radius: 0px;
    border: 0;
    padding: 0;
  }
</style>
