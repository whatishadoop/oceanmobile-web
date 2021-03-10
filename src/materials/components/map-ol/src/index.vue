<template>
  <div :cache="cache" :cid="cid" ctype="map-ol" obj="component" class="column map-div" @dblclick="showEditDialog">
    <div id="map"></div>
    <!--<div class="btn-chart"><img class="img-middle" src="./images/qunt_sj.svg" alt="图片不存在"></div>-->
    <el-dropdown class="btn-chart">
      <div class="avatar-wrapper">
        <img src="./images/qunt_sj.svg" class="img-middle">
      </div>
      <el-dropdown-menu slot="dropdown">
        <span style="display:block;" @click="toggleTileLayer('map')">
          <el-dropdown-item>加载点</el-dropdown-item>
        </span>
        <span style="display:block;" @click="toggleTileLayer('mapNight')">
          <el-dropdown-item>加载热力图</el-dropdown-item>
        </span>
        <span style="display:block;" @click="drawClusterData()">
          <el-dropdown-item>加载聚合图</el-dropdown-item>
        </span>
        <span style="display:block;" @click="toggleTileLayer('mapNight')">
          <el-dropdown-item>清除</el-dropdown-item>
        </span>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="btn-maps">
      <div class="btn-map-common" @click="toggleTileLayer('map')"><img class="img-middle" src="./images/common.png" alt="图片不存在"></div>
      <div class="btn-map-sate" @click="toggleTileLayer('mapSate')"><img class="img-middle" src="./images/sate.png" alt="图片不存在"></div>
      <div class="btn-map-night" @click="toggleTileLayer('mapNight')"><img class="img-middle" src="./images/night.png" alt="图片不存在"></div>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js'
import { Cluster, XYZ, Vector as VectorSource } from 'ol/source.js'
import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon as IconStyle } from 'ol/style.js'
import Point from 'ol/geom/Point.js'
import Feature from 'ol/Feature.js'
import axios from 'axios'

export default {
  props: {
    passCache: {
        type: String,
        default: ''
      }
  },
  data() {
    return {
      cid: 'C' + 0,
      cache: '',
      editMapConfig: {
        mapType: 'map',
        zoom: 6
      },
      map: null,
      tileLayer: null,
      pointData: {},
      styleCache: {},
      clusterSource: null,
      clusterLayer: null
    }
  },
  watch: {
    passCache: {
      handler: function(val) {
        if (val !== '') {
          const passCacheJson = JSON.parse(val)
          this.editMapConfig = passCacheJson.editMapConfig || this.editMapConfig
        } else {
          this.editMapConfig = {
            mapType: 'map',
            zoom: 6
          }
        }
      },
      immediate: true,
      deep: true
    },
    'editMapConfig.zoom'(value) {
      this.map.getView().setZoom(value)
    },
    'editMapConfig.mapType'(value) {
      this.toggleTileLayer(value)
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    if (this.passCache !== '') {
      const passCacheJson = JSON.parse(this.passCache)
      this.editMapConfig = passCacheJson.editMapConfig || this.editMapConfig
    }
    const newObj = {}
    this.$bus.$on('on-editMapConfig', res => {
      this.editMapConfig = res
      newObj.editMapConfig = this.editMapConfig
      this.cache = JSON.stringify(newObj)
    })
    var $this = this
    $this.tileLayer = new TileLayer({
      source: new XYZ({
        tileUrlFunction: $this.createTile($this, $this.editMapConfig.mapType)
      })
    })
    $this.map = new Map({
      target: 'map',
      layers: [$this.tileLayer],
      view: new View({
        center: [118.81, 32.01],
        projection: 'EPSG:4326',
        zoom: $this.editMapConfig.zoom,
        minZoom: 1,
        maxZoom: 15
      })
    })
    // 直接放在 scss 中不生效
    $('#map .ol-control').css({
      top: '30px' // '194px',
      // right: 'calc(27.5px - 0.6875em)',
      // left: 'auto'
    })
    $this.getPointData()
  },
  destroyed() {
    console.log('地图组件已经删除.')
  },
  methods: {
    zeroPad(num) {
      var len = num.toString().length
      while (len < 6) {
        num = '0' + num
        len++
      }
      return num
    },
    createTile(self, type) {
      return function(coord) {
        var zoom = coord[0]
        var newy = -coord[2] - 1
        if (('' + zoom).length === 1) {
          zoom = '0' + zoom
        }
        var yy = self.zeroPad(newy)
        var xx = self.zeroPad(coord[1])
        if (process.env.NODE_ENV === 'development') {
          return 'http://10.45.150.60:9080/' + type + '/' + zoom + '/' + yy + '/' + yy + '-' + xx + '.jpg'
        }
        return '/apis/' + type + '/' + zoom + '/' + yy + '/' + yy + '-' + xx + '.jpg'
      }
    },
    toggleTileLayer(type) {
      const self = this
      self.tileLayer.setSource(
        new XYZ({
          tileUrlFunction: self.createTile(self, type)
        })
      )
    },
    getPointData() {
      var $this = this
      axios.get('/map/point')
        .then(res => {
          $this.pointData = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    t_ImagePointStyle(imageSrc, anchor, scale) {
      return new Style({
        image: new IconStyle({
          anchor: (anchor instanceof Array && anchor.length === 1) ? anchor : [0.5, 0.5],
          scale: scale || 1,
          src: imageSrc
        })
      })
    },
    t_ClusterStyle(size) {
      var color = size > 100 ? '192,0,0' : size > 10 ? '255,128,0' : '0,128,0'
      var radius = Math.max(8, Math.min(size * 0.75, 20))
      var dash = 2 * Math.PI * radius / 6
      var dashTwo = [0, dash, dash, dash, dash, dash, dash]

      var style = new Style({
        image: new CircleStyle({
          radius: radius,
          stroke: new Stroke({
            color: 'rgba(' + color + ',0.5)',
            width: 15,
            lineDash: dashTwo,
            lineCap: 'butt'
          }),
          fill: new Fill({
            color: 'rgba(' + color + ',1)'
          })
        }),
        text: new Text({
          text: size.toString(),
          fill: new Fill({
            color: '#fff'
          })
        })
      })
      return style
    },
    getStyle(feature) {
      var size = feature.get('features').length
      var style = this.styleCache[size]
      if (!style) {
        if (size > 1) {
          style = this.t_ClusterStyle(size)
        } else {
          style = this.t_ImagePointStyle('/static/images/map/point.png', null, 0.5)
        }
        this.styleCache[size] = style
      }
      return style
    },
    drawClusterData() {
      var $this = this
      var features = []
      $this.pointData.forEach(function(item) {
        var feature = new Feature(new Point([Number(item['lng']), Number(item['lat'])]))
        feature.set('uuid', Number(item['uuid']))
        feature.set('name', item['name'])
        features.push(feature)
      })
      console.log(features)
      $this.clusterSource = new Cluster({
        distance: 40,
        source: new VectorSource({
          features: features
        })
      })
      $this.clusterLayer = new VectorLayer({
        layerName: 'clusterLayer',
        source: $this.clusterSource,
        style: function(feature) {
          return $this.getStyle(feature)
        }
      })
      $this.map.addLayer($this.clusterLayer)
    },
    resizeHandler() {
      if (!document.hidden) {
        this.map && this.map.updateSize()
      }
      this.map && this.map.updateSize()
    },
    showEditDialog() {
      this.$bus.$emit('on-attraConfig', this, 'map-config')
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
