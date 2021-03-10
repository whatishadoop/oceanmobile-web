<template>
  <div>
    <el-form :model="personelInfoConfigData" style="height:70px;">
      <el-form-item label="背景色:">
        <el-select v-model="personelInfoConfigData.bgColor" placeholder="请选择模块背景色">
          <el-option label="白色" value="white"></el-option>
          <el-option label="棕色" value="brown"></el-option>
          <el-option label="绿色" value="green"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据源:">
        <el-select v-model="personelInfoConfigData.dataSource" placeholder="请选择数据源">
          <el-option label="个人信息类" value="personelInfo"></el-option>
          <el-option label="商品列表类" value="productList"></el-option>
        </el-select>
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
        personelInfoConfigData: {
          bgColor: 'white',
          dataSource: 'personelInfo'
        }
      }
    },
    mounted: function() {
      this.$bus.$emit('on-editPersonelInfo', this.personelInfoConfigData)
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editPersonelInfo', this.personelInfoConfigData)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
