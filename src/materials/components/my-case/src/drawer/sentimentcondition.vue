<template>
  <div>
    <div class="condition-wrapper">
      <div class="monitor-word">
        <div class="title">时间</div>
        <div class="condition">
          <div v-for="o in 7" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">数据来源</div>
        <div class="condition">
          <div v-for="o in 9" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">情感倾向性</div>
        <div class="condition">
          <div v-for="o in 3" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">噪音过滤</div>
        <div class="condition">
          <div v-for="o in 3" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">重复信息</div>
        <div class="condition">
          <div v-for="o in 2" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">重大事件</div>
        <div class="condition">
          <div v-for="o in 3" :key="o" class="item">
            <el-button size="mini" style="padding-left: 10px;padding-right: 10px;">超小按钮</el-button>
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
      showDetails() {
        this.$bus.$emit('on-drawers', '案件详情22', 'case-detail', true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .condition-wrapper {
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
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
      .condition {
        padding-left: 8px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        background-color: rgba(255, 255, 255, 100);
        margin-bottom: 12px;
        .item {
          flex: none;
          margin-right: 14px;
          margin-top: 10px;
        }
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 10px;
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
