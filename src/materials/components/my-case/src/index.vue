<template>
  <div :cache="cache" :cid="cid" ctype="my-case" obj="component" class="mycase">
    <div class="head">舆情管家</div>
    <div ref="tabs" class="tabs">
      <div ref="tab" class="tab">
        <div v-for="(value,index) in listItem" :key="index" class="tab-item">
          <span @click="getComponentView(index, $event)">{{value.name}}</span>
        </div>
      </div>
    </div>
    <div class="compDom">
      <div class="tab1">
        <div ref="contentWrapper" class="content">
          <div class="content-wrapper">
            <!-- 态势案件 -->
            <div class="situationcase-wrapper">
              <div class="situationcase-title">
                <span class="title">态势案件</span>
                <span class="subtitle">群体案件</span>
              </div>
              <ul class="case">
                <li v-for="(value,index) in [1,2,3]" :key="index" class="case-item">
                  <div><svg-icon icon-class="q1" class="icon"/></div>
                  <div class="content">
                    <div class="name">湖南省公安厅</div>
                    <div class="desc">
                      <span class="count">案件号 9A757DGJK34V5JDG</span>
                      <span class="date">2018.04.23</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="morecase" @click="showMoreCase">
                查看更多
              </div>
            </div>

            <!-- 态势感知 -->
            <div class="situationcase-wrapper">
              <div class="situationcase-title">
                <span class="title">态势感知</span>
                <span class="subtitle">群体洞察</span>
              </div>
              <ul class="case">
                <li
                  v-for="(value,index) in [1,2,3]"
                  :key="index"
                  class="case-item"
                  style="height: 148px;">
                  <div><svg-icon icon-class="q2" class="icon"/></div>
                  <div class="content">
                    <div class="name">湖南省公安厅</div>
                    <div class="text">MSISDN：8613501978189</div>
                    <div class="text">IMSI：460006234567890</div>
                    <div class="text">IMEI：109698888877777</div>
                    <div class="desct">
                      <span class="date">2018.04.23</span>
                      <span class="detail"><el-button type="primary" size="mini" round @click="showPersonelDetail">查看详情</el-button></span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="morecase">
                查看更多
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      passCache:
        {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        cid: 'C' + 0,
        cache: '',
        id: 47,
        listItem: [{
          name: '舆情列表'
        }, {
          name: '企业详情'
        }, {
          name: '舆情日报'
        }, {
          name: '舆情方案'
        }, {
          name: '舆情预警'
        }],
        forAcceptData: [{
          state: '待接受',
          operation: ['退回', '处理']
        }, {
          state: '待接受',
          operation: ['退回', '处理']
        }, {
          state: '待接受',
          operation: ['退回', '处理']
        }]
      }
    },
    mounted: function() {
      this.$nextTick(() => {
        this._initScroll()
        this.personScroll()
      })
      $('.mycase .tab-item:first-child span').addClass('active')
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
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
      showDetails() {
        this.$bus.$emit('on-drawers', 85, true)
      },
      personScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        let width = 5 * 80
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
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "./main.scss";
</style>
