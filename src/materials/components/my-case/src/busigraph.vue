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
        nodes: null,
        edges: null,
        selectNodeId: ''
      }
    },
    created() {
      this.$nextTick(() => {
        this.create(JSON.parse(this.$route.params.nodes), JSON.parse(this.$route.params.edges))
      })
    },
    mounted() {
    },
    beforeDestroy() {
      if (network !== null) {
        network.destroy()
        network = null
      }
    },
    methods: {
      create(nodesArray, edgesArray) {
        debugger
        // create an array with nodes
        this.nodes = new DataSet(
          nodesArray
        )

        // create an array with edges
        this.edges = new DataSet(
          edgesArray
        )

        const data = {
          nodes: this.nodes,
          edges: this.edges
        }
        const options = {
          autoResize: true, // 网络将自动检测其容器的大小调整，并相应地重绘自身
          layout: {
            randomSeed: 2, // 布局的随机种子，如果不设置，每次进来布局都是随机的；这个数值可以任意设置，只要是个数字就行
            improvedLayout: true // 使用【 Kamada Kawai】布局算法；如果不用这个算法，会出现很多交叉的线条
          },
          physics: {
            enabled: true // 节点不能重叠,整体图回弹效果
          },
          nodes: {
            widthConstraint: 30, // 设置数字，将节点的最小和最大宽度设为该值,当值设为很小的时候，label会换行，节点会保持一个最小值，里边的内容会换行
            borderWidth: 1, // 节点边框宽度，单位为px
            borderWidthSelected: 3, // 节点被选中时边框的宽度，单位为px
            labelHighlightBold: false, // 确定选择节点时标签是否变为粗体
            size: 46,
            shadow: false,
            color: {
              border: '#5587FF',
              background: '#e4e4e4',
              hover: {
                // 节点鼠标滑过时状态颜色
                border: '#edb430',
                background: '#D2E5FF'
              }
            },
            font: {
              color: '#606c74',
              size: 8
            }
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
            font: {
              size: 8
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
