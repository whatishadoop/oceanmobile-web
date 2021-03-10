<template>
  <div class="leftarrowtitleconfig">
    <el-form :model="leftarrowtitleconfigData" style="height:70px;" label-width="80px">
      <el-form-item label="背景色:">
        <el-select v-model="leftarrowtitleconfigData.bgColor" placeholder="请选择模块背景色">
          <el-option label="白色" value="white"></el-option>
          <el-option label="棕色" value="brown"></el-option>
          <el-option label="绿色" value="green"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题:">
        <el-input v-model="leftarrowtitleconfigData.title" placeholder="请输入控件高度"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button plain type="primary" @click="submit">提交</el-button>
        <el-button plain type="primary" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        leftarrowtitleconfigData: {
          bgColor: 'white',
          title: '标题'

        }
      }
    },
    mounted: function() {
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editLeftarrowTitle', this.leftarrowtitleconfigData)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .leftarrowtitleconfig{
    .el-input{
      width: 217px;
    }
  }
</style>
