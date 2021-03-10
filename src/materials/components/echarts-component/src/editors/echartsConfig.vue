<template>
  <div>
    <el-form :model="configOld" style="height:70px;">
      {{cid}}
      <el-form-item label="数据接口:">
        <el-input v-model="configOld.httpUrl" placeholder="请输入数据接口">
        </el-input>
      </el-form-item>
      <el-form-item label="配置:">
        <el-input v-model="configOld.option" :autosize="{minRows:2}" placeholder="请输入配置" type="textarea"></el-input>
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
        configOld: {
          option: '',
          httpUrl: '/echarts/chartsData1'
        },
        config: {
          httpUrl: '',
          option: {}
        }
      }
    },
    mounted: function() {
      // this.$bus.$emit('on-editPersonelInfo', this.personelInfoConfigData)
    },
    methods: {
      submit() {
        this.config.httpUrl = this.configOld.httpUrl
        this.config.option = JSON.parse(this.configOld.option.replace(/"/g, '\"'))
        this.$bus.$emit('on-editEchartsConfig', this)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
