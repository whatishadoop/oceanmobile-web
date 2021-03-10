<template>
  <div class="map-config">
    <el-form :model="mapConfigData" style="height:70px;">
      <!-- 默认底图 -->
      <el-form-item label="默认底图:">
        <el-select v-model="mapConfigData.mapType" placeholder="请选择底图类型">
          <el-option label="普通地图" value="map"></el-option>
          <el-option label="卫星地图" value="mapSate"></el-option>
          <el-option label="夜景地图" value="mapNight"></el-option>
        </el-select>
      </el-form-item>
      <!-- 地图层级 -->
      <el-form-item label="地图层级:">
        <el-input-number v-model.number="mapConfigData.zoom" :min="1" :max="10" controls-position="right"/>
      </el-form-item>
      <!-- 编辑按钮 -->
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
        mapConfigData: {
          mapType: 'map',
          zoom: 6
        }
      }
    },
    mounted: function() {
      this.$bus.$emit('on-editMapConfig', this.mapConfigData)
    },
    methods: {
      submit() {
        this.$bus.$emit('on-editMapConfig', this.mapConfigData)
      },
      cancel() {
        this.$emit('showEditDialog', false)
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .map-config {
    .el-input-number {
      width: 217px;
    }
  }
</style>
