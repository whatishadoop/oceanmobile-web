<template>
  <div :cache="cache" :cid="cid" obj="component" ctype="echarts-pie" class="myinformation">
    <div ref="main" style="height:300px">

    </div>
  </div>
</template>

<script>
import base from '@/materials/components/echarts-component/src/common/base.js'
import util from '@/materials/components/echarts-component/src/common/util.js'
import handle from '@/materials/components/echarts-component/src/common/handle.js'
import axios from 'axios'
export default {
  components: {},
  props: {},
  data() {
    return {
        cid: 'C' + 0,
        cache: '',
        columnData: {},
        datas: [],
        chartType: 'pie'
    }
  },
  computed: {},
  watch: {
    datas: {
      handler: function(val) {
        var dataset = handle.handleDataSet(val)
        var series = [
          { type: this.chartType
          }
        ]
        var optionExtend = {
          title: {
              text: 'Echarts入门示例'
            },
            tooltip: {},
            lengend: {
              data: ['销量']
            },
            dataset: dataset,
            series: series
        }
        this.setOptions(optionExtend)
      }
    }
  },
  created() {},
  mounted() {
      this.init()
      this.getData()
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
          this.option = util.getOption({ optionExtend: optionExtend })
          this.echartsInstance.setOption(this.option)
      },
      getData() {
        var _self = this
        axios.get('/echarts/chartsData1')
        .then(res => {
          _self.datas = res.data
        })
        .catch(err => {
          console.log(err)
        })
      }
  }
}
</script>
<style lang="scss" scoped>
</style>
