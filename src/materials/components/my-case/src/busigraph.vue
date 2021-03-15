<template>
    <div>
      <div ref="visualization" style="width: 100%;height: 500px" />
    </div>
</template>

<script type="text/ecmascript-6">
  import 'vis/dist/vis.css'
  import { DataSet, Network } from 'vis'
  let network = null
  export default {
    data() {
      return {
        nodesArray: [
          { id: 1, shape: 'circle', label: '公司名称' },
          { id: 2, shape: 'circle', label: '公司名称' },
          { id: 3, shape: 'circle', label: '公司名称' },
          {
            id: 4,
            shape: 'circle',
            label: '公司名称'
          },
          { id: 5, shape: 'circle', label: '公司名称' },
          { id: 6, shape: 'circle', label: '公司名称' },
          { id: 7, shape: 'circle', label: '公司名称' },
          { id: 8, shape: 'circle', label: '公司名称' },
          { id: 9, shape: 'circle', label: '公司名称' },
          { id: 10, shape: 'circle', label: '公司名称' },
          { id: 11, shape: 'circle', label: '公司名称' },
          { id: 12, shape: 'circle', label: '公司名称' },
          { id: 13, shape: 'circle', label: '公司名称' },
          { id: 14, shape: 'circle', label: '公司名称' }
        ],
        edgesArray: [
          { from: 1, to: 2, label: '关系' },
          { from: 2, to: 3, label: '关系' },
          { from: 2, to: 4, label: '关系' },
          { from: 4, to: 5, label: '关系' },
          { from: 4, to: 10, label: '关系' },
          { from: 4, to: 6, label: '关系' },
          { from: 6, to: 7, label: '关系' },
          { from: 7, to: 8, label: '关系' },
          { from: 8, to: 9, label: '关系' },
          { from: 8, to: 10, label: '关系' },
          { from: 10, to: 11, label: '关系' },
          { from: 11, to: 12, label: '关系' },
          { from: 12, to: 13, label: '关系' },
          { from: 13, to: 14, label: '关系' }
        ],
        nodes: null,
        edges: null,
        selectNodeId: '',
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: ['上海', '北京', '广州', '深圳'],
        isIndeterminate: true
      }
    },
    mounted() {
      this.create()
    },
    beforeDestroy() {
      if (network !== null) {
        network.destroy()
        network = null
      }
    },
    methods: {
      create(type) {
        // create an array with nodes
        this.nodes = new DataSet(
          this.nodesArray
        )

        // create an array with edges
        this.edges = new DataSet(
          this.edgesArray
        )

        const data = {
          nodes: this.nodes,
          edges: this.edges
        }
        const options = {
          layout: {
            randomSeed: 2, // 布局的随机种子，如果不设置，每次进来布局都是随机的；这个数值可以任意设置，只要是个数字就行
            improvedLayout: true // 使用【 Kamada Kawai】布局算法；如果不用这个算法，会出现很多交叉的线条
          },
          physics: {
            enabled: true // 节点不能重叠,整体图回弹效果
          },
          nodes: {
            borderWidth: 2,
            size: 30,
            color: {
              border: '#5587FF',
              background: '#e4e4e4',
              hover: {
                // 节点鼠标滑过时状态颜色
                border: '#edb430',
                background: '#D2E5FF'
              }
            },
            font: { color: '#606c74' }
          },
          edges: {
            width: 1,
            length: 180,
            color: {
              color: '#848484',
              highlight: '#848484',
              hover: '#848484',
              inherit: 'from',
              opacity: 1.0
            },
            shadow: true,
            smooth: {
              // 设置两个节点之前的连线的状态
              enabled: true // 默认是true，设置为false之后，两个节点之前的连线始终为直线，不会出现贝塞尔曲线
            },
            arrows: { to: true } // 箭头指向to
          },
          interaction: {
            dragNodes: true,
            tooltipDelay: 0,
            navigationButtons: false,
            keyboard: true,
            hover: false, // 鼠标移过后加粗该节点和连接线
            // multiselect: true, // 按 ctrl 多选
            selectable: true, // 是否可以点击选择
            selectConnectedEdges: false, // 选择节点后是否显示连接线
            hoverConnectedEdges: true // 鼠标滑动节点后是否显示连接线
          }
        }

        // initialize your network!
        network = new Network(this.$refs.visualization, data, options)

        // add event listeners
        network.on('selectNode', e => {
          this.showDetails()
        })
        network.on('selectEdge', params => {
          // 简化写法，上述逻辑在对话框点击确定后进行回调
          console.log('selectEdge Event:', params)
        })
      },
      destroy() {
        if (network !== null) {
          network.destroy()
          network = null
        }
      },
      showDetails() {
        this.$bus.$emit('on-drawers', '公司详情', 'company-node-info', true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
