<template>
  <div class="mycase">
    <div class="head">舆情管家</div>
    <div ref="sentiments" class="sentiments">
      <div ref="sentiment" class="sentiment">
        <div v-for="(item, index) in allMonitorCase" ref="sliderGroup" :key="index" class="sentiment-item">
          <el-tag :type="isSelectCaseId === index ? '' : 'info'" closable style="background-color: #FFFFFF;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" @click="queryMoniterCase(item.id, index)" @close="delMonitorCase(index, item.id)">
            <span style="font-size: 14px;"> {{item.name}}</span>
          </el-tag>
        </div>
        <div ref="addTag" class="sentiment-item">
          <el-tag :type=" isshow ? '' : 'info'" style="background-color: #FFFFFF;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" @click="newMoniterCase" >
            <span style="font-size: 14px;"><i class="el-icon-s-tools"></i> 新建方案</span>
          </el-tag>
        </div>
      </div>
    </div>
    <div ref="tabs" class="tabs">
      <div ref="tab" class="tab">
        <div v-for="(value,index) in listItem" :key="index" class="tab-item" @click="selectTab(value.comname,index)">
          <span :class="{active: isActived === index}" style="font-size: 14px;">{{value.name}}</span>
        </div>
      </div>
    </div>
    <div class="compDom">
      <div class="tab1">
        <div ref="contentWrapper" class="content">
          <div class="content-wrapper">
            <router-view v-if="isRouterAlive" ref="subcompoent" @showdetail="showdetail" @getAllMonitorCase="getAllMonitorCase" @refreshInitScroll="refreshInitScroll"></router-view>
          </div>
        </div>
      </div>
    </div>
    <sentimentcondition ref="sentimentcondition"></sentimentcondition>
    <sentimenturl ref="sentimenturl"></sentimenturl>
    <industryinfo ref="industryinfo"></industryinfo>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import sentimentcondition from './drawer/sentimentcondition'
  import sentimenturl from './drawer/sentimenturl'
  import industryinfo from './drawer/industryinfo'
  import { getAllMonitorCase, delMonitorCase } from '@/api/app'
  export default {
    components: {
      sentimentcondition,
      sentimenturl,
      industryinfo
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
        isRouterAlive: true,
        isshow: false,
        currentCaseId: '',
        isSelectCaseId: 0,
        isActived: 0,
        currentComponent: 'sentimentlist',
        listItem: [{
          name: '舆情列表',
          comname: 'sentimentlist'
        }, {
          name: '企业详情',
          comname: 'companydetail'
        }, {
          name: '舆情方案',
          comname: 'caselist'
        }],
        allMonitorCase: []
      }
    },
    // watch: {
    //   '$route.path': {
    //     handler: function(newPath, oldPath) {
    //       debugger
    //       if (newPath === '/my-case') {
    //         this.isActived = 0
    //         this.$router.push({ name: 'sentimentlist', query: { currentCaseId: this.currentCaseId } })
    //       }
    //     },
    //     immediate: true // 最初绑定值的时候也执行函数
    //   }
    // },
    created() {
      debugger
      this.$nextTick(() => {
        // 获取所有方案列表信息
        this.getAllMonitorCase()
      })
    },
    mounted: function() {
      debugger
      this.$nextTick(() => {
        // this._tabsScroll()
        this._initScroll()
      })
      // 根据帅选条件进行查询
      this.$bus.$on('refreshIndustryInfo', () => {
        this.refreshInitScroll()
      })
      // 根据帅选条件进行查询
      this.$bus.$on('showdetail', (compNames, param) => {
        this.showdetail(compNames, param)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      getAllMonitorCase() {
        debugger
        const data = {
          data: {
            userid: this.$store.state.user.user.userId,
            conditions: {
              content: ''
            }
          }
        }
        getAllMonitorCase(data).then(res => {
          this.allMonitorCase = res.data.caseinfo
          if (this.allMonitorCase.length > 0) {
            this.queryMoniterCase(this.allMonitorCase[0].id, 0)
            this.selectTab('sentimentlist', 0)
          }
          this.$nextTick(() => {
            this._sentimentsScroll()
          })
        }).catch(err => {
          console.log(err)
        })
      },
      addMonitorCase(item) {
        this.allMonitorCase.push(item)
        this.$nextTick(() => {
          this._sentimentsScroll()
        })
      },
      delMonitorCase(tag, caseid) {
        const data = {
          data: {
            userid: this.$store.state.user.user.userId,
            id: caseid + ''
          }
        }
        delMonitorCase(data).then(res => {
          debugger
          this.allMonitorCase.splice(tag, 1)
          if (this.allMonitorCase.length === 0) {
            this.newMoniterCase()
          } else {
            if (this.allMonitorCase[0] !== undefined) {
              const tmpCaseId = this.allMonitorCase[0].id
              this.queryMoniterCase(tmpCaseId, 0)
            }
          }
          this.$nextTick(() => {
            this._sentimentsScroll()
          })
        }).catch(err => {
          console.log(err)
        })
      },
      newMoniterCase() {
        this.isSelectCaseId = -1
        this.isshow = true
        if (this.allMonitorCase.length === 3) {
          this.$notify({
            title: '提示',
            message: '目前只能创建三个方案！',
            duration: 1500,
            offset: 100,
            showClose: false
          })
          return
        }
        this.currentCaseId = ''
        this.selectTab('caselist', 2)
        // 调用caselist对象的初始化方法
        this.$nextTick(() => {
          this.$refs.subcompoent.setReadOnly(false)
          this.$refs.subcompoent.getMonitorCase('')
        })
      },
      queryMoniterCase(caseId, index) {
        this.isshow = false
        this.isSelectCaseId = index
        this.currentCaseId = caseId
        if (this.currentComponent === 'caselist') {
          // 调用caselist对象的根据caseid查询对应详情
          this.$nextTick(() => {
            this.$refs.subcompoent.setReadOnly(true)
            this.$refs.subcompoent.getMonitorCase(caseId + '')
          })
        } else {
          this.isRouterAlive = false
          this.$nextTick(() => {
            this.isRouterAlive = true
            this.selectTab('sentimentlist', 0)
          })
        }
      },
      refreshInitScroll() {
        // 数据加载完渲染列表后再执行如下刷新
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scroll.finishPullUp()
          console.log('====数据加载完渲染列表后再执行如下刷新====')
        })
      },
      showdetail(compNames, param) {
        if (compNames === 'sentimentcondition') {
          this.$refs.sentimenturl.settitle('舆情详情')
          this.$refs.sentimentcondition.show()
        } else if (compNames === 'sentimenturl') {
          this.$refs.sentimenturl.settitle('舆情详情')
          this.$refs.sentimenturl.seturl(param.url)
          this.$refs.sentimenturl.show()
        } else if (compNames === 'industryinfo') {
          this.$refs.sentimenturl.settitle('行业咨询')
          this.$refs.sentimenturl.seturl(param.url)
          this.$refs.sentimenturl.show()
        } else if (compNames === 'industrytype') {
          this.$refs.industryinfo.show()
        }
      },
      selectTab(comname, index) {
        debugger
        this.isActived = index
        this.currentComponent = comname
        this.$router.push({ name: comname, query: { currentCaseId: this.currentCaseId }})
      },
      _initScroll() {
        const _this = this
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.contentWrapper, {
            click: true,
            propTypes: 3,
            pullUpLoad: true
          })
          this.scroll.on('pullingUp', () => {
            debugger
            if (_this.currentComponent === 'sentimentlist') {
              this.$nextTick(() => {
                this.$refs.subcompoent.updateDataDetailByCondition()
              })
            } else if (_this.currentComponent === 'companydetail') {
              this.$refs.subcompoent.updateDetailInfo()
            }
          })
        } else {
          this.scroll.refresh()
          this.scroll.finishPullUp()
        }
      },
      _tabsScroll() {
        // 默认有六个li子元素，每个子元素的宽度为120px
        const width = 5 * 80
        this.$refs.tab.style.width = width + 'px'
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
          if (!this.tabscroll) {
            this.tabscroll = new BScroll(this.$refs.tabs, {
              startX: 0,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: 'vertical'
            })
          } else {
            this.tabscroll.refresh()
          }
        })
      },
      _sentimentsScroll() {
        // 动态计算父亲总长度
        let width = 8 + this.$refs.addTag.clientWidth
        this.$refs.sliderGroup.forEach(item => {
          width += item.clientWidth
        })

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
  .mycase{
    .head{
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: #5584FF;
      letter-spacing: 0.29px;
      text-align: center;
    }
    .sentiments {
      position: relative;
      overflow: hidden;
      background-color: #F2F3F7;
      .sentiment {
        width: 100%;
        height: 36.5px;
        line-height: 43.5px;
        padding-left: 4px;
        padding-right: 8px;
        margin-top: 5px;
        overflow: hidden;
        white-space: nowrap;
        .sentiment-item {
          display: inline-block;
          text-align: left;
          font-size: 16px;
          color: #333333;
          &:last-child {
            margin: 0
          }
          .active{
            height: 100%;
            padding-bottom: 10px;
            color: #5584FF;
            border-bottom: 2px solid #5584FF;
          }
          & > a {
            display: block;
            font-size: 14px;
            color: rgb(77, 85, 93);
            &.active {
              color: rgb(240, 20, 20);
            }
          }
        }
      }
    }
    .tabs {
      position: relative;
      border-bottom: 2px solid #e4e7ed;
      overflow: hidden;
      .tab {
        display: flex;
        justify-content: space-around;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        height: 43.5px;
        line-height: 43.5px;
        .tab-item {
          display: inline-block;
          width: 100px;
          text-align: center;
          font-size: 16px;
          color: #333333;
          &:last-child {
            margin: 0
          }
          .active{
            height: 100%;
            padding-bottom: 10px;
            color: #5584FF;
            border-bottom: 2px solid #5584FF;
          }
          & > a {
            display: block;
            font-size: 14px;
            color: rgb(77, 85, 93);
            &.active {
              color: rgb(240, 20, 20);
            }
          }
        }
      }
    }
    .compDom{
      position: relative;
      margin-top: 10px;
      .tab1{
        .content {
          position: relative;
          top: 0px;
          bottom: 60px;
          width: 100%;
          height: calc(100vh - 186px);
          overflow: hidden;

          .classify-wrapper {
            background: #fff;

            .classify {
              overflow: hidden;
              padding: 0;
              margin: 0;

              .classify-item {
                float: left;
                width: 25%;
                text-align: center;
                list-style: none;

                .icon {
                  display: inline-block;
                  width: 60px;
                  height: 60px;
                  line-height: 45px;
                  text-align: center;
                  border-radius: 50%;
                  font-size: 18px;
                  color: #fff;
                }

                .list {
                  color: #333333;
                  margin: 0;
                  font-size: 14px;
                }
              }
            }
          }

          .bulletin-wrapper {
            position: relative;
            height: 20px;
            line-height: 20px;
            margin-top: 32px;
            padding: 0 20px 0 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background: #fff;
            .bulletin-title {
              display: inline-block;
              vertical-align: top;
              width: 50px;
              height: 50px;
              /* @include bg-image('bulletin');*/
              background-size: 22px 12px;
              background-repeat: no-repeat;
              .icon {
                vertical-align: top;
                width: 48px;
                height: 24px;
              }
            }

            .bulletin-text {
              display: inline-block;
              margin-top: 2px;
              height: 20px;
              line-height: 20px;
              vertical-align: top;
              font-size: 14px;
            }
          }
        }
        ul{
          list-style: none;
          margin: 0 14px;
          li{
            height: 170px;
            cursor: pointer;
            .header{
              height: 20px;
              span:nth-child(1){
                font-size: 14px;
                color: #161619;
                letter-spacing: 0;
                float: left;
              }
              span:nth-child(2){
                font-size: 16px;
                color: #EF7340;
                letter-spacing: 0;
                float: right;
              }
            }
            .police{
              height: 25px;
              margin-top: 10px;
              font-size: 18px;
              color: #161619;
              letter-spacing: 0;
            }
            .footer{
              margin-top: 6px;
              font-size: 16px;
              color: #161619;
              letter-spacing: 0;
            }
            .operation{
              margin-top: 30px;
              height: 30px;
              text-align: right;
              span{
                width: 65px;
                height: 27px;
                background-color: #5584FF;
                display: inline-block;
                border-radius: 14px;
                margin-left: 8px;
                text-align: center;
                font-size: 13px;
                color: #FFFFFF;
                letter-spacing: -0.43px;
                line-height: 27px;
              }
            }
          }
        }
      }
    }
  }
</style>
