<template>
  <div class="mycase">
    <div class="head">舆情管家</div>
    <div ref="sentiments" class="sentiments">
      <div ref="sentiment" class="sentiment">
        <div v-for="index in 5" :key="index" class="sentiment-item">
          <el-tag type="info" style="background-color: #FFFFFF">南京中新</el-tag>
        </div>
      </div>
    </div>
    <div ref="tabs" class="tabs">
      <div ref="tab" class="tab">
        <div v-for="(value,index) in listItem" :key="index" class="tab-item" @click="selectTab(value.comname)">
          <span style="font-size: 14px;" @click="getComponentView(index, $event)">{{value.name}}</span>
        </div>
      </div>
    </div>
    <div class="compDom">
      <div class="tab1">
        <div ref="contentWrapper" class="content">
          <div class="content-wrapper">
            <!-- 舆情列表 -->
            <component :is="currentComponent"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import sentimentlist from './sentimentlist'
  import sentimentlog from './sentimentlog'
  import companydetail from './companydetail'
  import caselist from './caselist'
  export default {
    components: {
      sentimentlog,
      sentimentlist,
      companydetail,
      caselist
    },
    props: {
      passCache:
        {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        currentComponent: 'sentimentlist',
        listItem: [{
          name: '舆情列表',
          comname: 'sentimentlist'
        }, {
          name: '企业详情',
          comname: 'companydetail'
        }, {
          name: '舆情日报',
          comname: 'sentimentlog'
        }, {
          name: '舆情方案',
          comname: 'caselist'
        }, {
          name: '舆情预警',
          comname: ''
        }]
      }
    },
    // beforeMount() {
    //   window.addEventListener('resize', this._refreshScroll)
    // },
    mounted: function() {
      this.$nextTick(() => {
        this._initScroll()
        this._tabsScroll()
        this._sentimentsScroll()
      })
      $('.mycase .tab-item:first-child span').addClass('active')
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      selectTab(comname) {
        this.currentComponent = comname
      },
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.contentWrapper, {
          click: true,
          propTypes: 3
        })
      },
      getComponentView(index, event) {
        if (index === 0) {
          this.forAcceptData = [{
            state: '待接受',
            operation: ['退回', '处理']
          }, {
            state: '待接受',
            operation: ['退回', '处理']
          }, {
            state: '待接受',
            operation: ['退回', '处理']
          }]
        } else if (index === 1) {
          this.forAcceptData = [{
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }, {
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }, {
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }]
        } else if (index === 2) {
          this.forAcceptData = [{
            state: '挂起',
            operation: ['退回', '结案']
          }, {
            state: '挂起',
            operation: ['退回', '结案']
          }, {
            state: '挂起',
            operation: ['退回', '结案']
          }]
        } else if (index === 3) {
          this.forAcceptData = [{
            state: '已退回',
            operation: []
          }, {
            state: '已退回',
            operation: []
          }, {
            state: '已退回',
            operation: []
          }]
        } else if (index === 4) {
          this.forAcceptData = [{
            state: '已结案',
            operation: []
          }, {
            state: '已结案',
            operation: []
          }, {
            state: '已结案',
            operation: []
          }]
        }
        $('.mycase .tab-item span').removeClass('active')
        event.srcElement.classList.add('active')
      },
      _tabsScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        const width = 5 * 80
        this.$refs.tab.style.width = width + 'px'
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.tabs, {
              startX: 0,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: 'vertical'
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      _sentimentsScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        const width = 5 * 80
        this.$refs.sentiment.style.width = width + 'px'
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
          if (!this.sentimentsScroll) {
            this.sentimentsScroll = new BScroll(this.$refs.sentiments, {
              startX: 0,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: 'vertical'
            })
          } else {
            this.sentimentsScroll.refresh()
          }
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "./main.scss";
</style>
