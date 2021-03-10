<template>
  <div :cache="cache" :cid="cid" obj="component" ctype="echarts-chart" class="myinformation">
    <div ref="main" style="height:300px"></div>
    <span v-if="showEdit" class="edit" @click="showEditConfig">编辑</span>
  </div>
</template>

<script>
import base from '@/materials/components/echarts-component/src/common/base.js'
import util from '@/materials/components/echarts-component/src/common/util.js'
import handle from '@/materials/components/echarts-component/src/common/handle.js'
import axios from 'axios'
import { IsPC } from '@/utils/index'
export default {
  components: {},
  props: {
      passCache:
        {
          type: String,
          default: ''
        }
  },
  data() {
    return {
        cid: 'C' + this._uid,
        cache: '',
        columnData: {},
        datas: [],
        // configData: {
        //   type: 'bar',
        //   title: 'Echarts入门示例'
        // },
        option: {
            title: {
              text: 'Echarts入门示例'
            },
            tooltip: {},
            xAxis: {
              type: 'value'
            },
            yAxis: {}
        },
        showEdit: true,
        httpUrl: '/echarts/chartsData1'
    }
  },
  computed: {},
  watch: {
    passCache: {
        handler: function(val) {
          if (val !== '') {
            const passCacheJson = JSON.parse(val)
            this.option = passCacheJson.option
            this.httpUrl = passCacheJson.httpUrl
          }
        },
        immediate: true,
        deep: true
    },
    datas: {
      handler: function(val) {
        if (val.length === 0) {
          return
        }
        /* var series = [
          { type: this.configData.type,
            encode: {
              x: 0,
              y: 1
            }
          }
        ] */
        /* var optionExtend = {
            title: {
              text: this.configData.title
            },
            tooltip: {},
            lengend: {
              data: ['销量']
            },
            xAxis: {
              type: 'value'
            },
            yAxis: {},
            dataset: dataset,
            series: series
        } */
        if (this.option && !this.option.series) {
          this.option.series = [
              { type: 'bar',
                encode: {
                  x: 0,
                  y: 1
                }
              }
            ]
        }
        if (this.option && this.option.series[0].type === 'pie') {
          this.option.series[0].data = val
        } else {
          var dataset = handle.handleDataSet(val)
          this.option.dataset = dataset
        }
        this.setOptions(this.option)
      },
      deep: true
    },
    option: {
      handler: function(val) {
        if (this.httpUrl) {
         this.datas = []
         this.getData()
        }
      },
      deep: true
    }

  },
  created() {},
  mounted() {
      const _this = this
      this.init()
      this.getData()
      this.$bus.$on('on-editEchartsConfig', res => {
        if (_this.cid === res.cid) {
          var httpUrl = res.config.httpUrl
          _this.httpUrl = httpUrl || _this.httpUrl
          var optionExtend = res.config.option
          _this.option = Object.assign(_this.option, optionExtend)
          _this.cache = JSON.stringify(res.config)
        }
      })
      if (IsPC()) {
        $('.myinformation').hover(function() {
          _this.showEdit = true
        }, function() {
          _this.showEdit = false
        })
      }
  },
  beforeDestroy() {
      base.destoryInstance(this.echartsInstance)
  },
  methods: {
      init() {
          var dom = this.$refs.main
          this.echartsInstance = base.createInstance(dom)
      },
      setOptions(optionExtend) {
          var option = util.getOption({ optionExtend: optionExtend })
          this.echartsInstance.setOption(option)
      },
      getData() {
        var _self = this
        axios.get(_self.httpUrl)
        .then(res => {
          _self.datas = res.data
        })
        .catch(err => {
          console.log(err)
        })
      },
       showEditConfig() {
        // this.$bus.$emit('on-personelinfoconfig', this, 'personelInfo-config')
        this.$bus.$emit('on-attraConfig', this, 'echarts-config')
      }
  }
}
</script>
<style lang="scss" scoped>
.myinformation{
  @include zxsk_bg($color-bg-1,$color-bg-2);
  position: relative;
  .edit{
    position:absolute;
    top:5px;
    cursor: pointer;
    z-index: 99;
    left:50%;
  }
}
</style>
