<template>
  <div>
    <el-form :model="btnsmallConfigData" style="height:70px;">
      <el-form-item label="背景色:">
        <el-select v-model="btnsmallConfigData.bgColor" placeholder="请选择模块背景色">
          <el-option label="白色" value="white"></el-option>
          <el-option label="蓝色" value="#5584FF"></el-option>
          <el-option label="绿色" value="green"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="边框:">
        <el-select v-model="btnsmallConfigData.border" placeholder="请选择模块边框">
          <el-option label="白色" value="1px solid white"></el-option>
          <el-option label="蓝色" value="1px solid #5584FF"></el-option>
          <el-option label="绿色" value="1px solid green"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="字体颜色:">
        <el-select v-model="btnsmallConfigData.color" placeholder="请选择字体颜色">
          <el-option label="白色" value="1px solid white"></el-option>
          <el-option label="黑色" value="#333333"></el-option>
          <el-option label="蓝色" value="#5584FF"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题:">
        <el-input v-model="btnsmallConfigData.title" placeholder="请输入控件高度"></el-input>
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
        btnsmallConfigData: {
          bgColor: '#5584FF',
          title: '确定',
          border: '1px solid #5584FF',
          color: '#333333'
        }
      }
    },
    mounted: function() {
      this.$bus.$emit('on-editBtnSmall', this.btnsmallConfigData)
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editBtnSmall', this.btnsmallConfigData)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
