<template>
  <div>
    <el-form :model="labelConfigData" style="height:70px;">
      {{cid}}
      <el-form-item label="标题:">
        <el-input v-model="labelConfigData.title" placeholder="请选择类型">
        </el-input>
      </el-form-item>
      <el-form-item label="数值:">
       <el-input v-model="labelConfigData.value" placeholder="请选择类型">
        </el-input>
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
    props: {
      componentObj: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        cid: this.componentObj.cid,
        echartsConfigData: {
          title: '',
          type: 'bar'
        }
      }
    },
    mounted: function() {
      // this.$bus.$emit('on-editPersonelInfo', this.personelInfoConfigData)
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editLabelConfig', this)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
