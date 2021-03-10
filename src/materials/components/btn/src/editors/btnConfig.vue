<template>
  <div class="btnconfig">
    <el-form :model="btnconfigData" style="height:70px;" label-width="80px">
      <el-form-item label="背景色:">
        <el-select v-model="btnconfigData.bgColor" placeholder="请选择模块背景色">
          <el-option label="白色" value="white"></el-option>
          <el-option label="蓝色" value="#5584FF"></el-option>
          <el-option label="红色" value="#f00"></el-option>
          <el-option label="淘宝红" value="#c40"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文字:">
        <el-input v-model="btnconfigData.title" placeholder="请输入控件高度"></el-input>
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
        btnconfigData: {
          bgColor: 'white',
          title: '确定'
        }
      }
    },
    mounted: function() {
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editBtnTitle', this.btnconfigData)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .btnconfig{
    .el-input{
      width: 217px;
    }
  }
</style>
