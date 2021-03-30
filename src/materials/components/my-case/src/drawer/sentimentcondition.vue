<template>
  <div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="showFlag" class="detail">
        <div class="main-wrapper">
          <div class="leftarrowtitle" style="background-color: #5584FF;" @click="hide">{{title}}</div>
          <div ref="contentWrapper" class="contentwrapper">
            <div class="condition-wrapper">
              <div class="monitor-word">
                <div class="title">时间</div>
                <div class="condition">
                  <div v-for="(item, index) in dataType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(dataType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">数据来源</div>
                <div class="condition">
                  <div v-for="(item, index) in sourceType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;height: 28px;text-align: center" size="medium" type="info" @click="selectdata(sourceType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">情感倾向性</div>
                <div class="condition">
                  <div v-for="(item, index) in motionType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(motionType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">精确关联</div>
                <div class="condition">
                  <div v-for="(item, index) in relevantType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(relevantType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">重大事件</div>
                <div class="condition">
                  <div v-for="(item, index) in eventType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(eventType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">是否重复</div>
                <div class="condition">
                  <div v-for="(item, index) in repeatType" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(repeatType, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <el-button style="width: 310px;background-color: #5584FF;" type="primary" round @click="queryByConditons" >确认</el-button>
              </div>#5584FF
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { getTimestamp } from '@/utils/date'
  export default {
    data() {
      return {
        title: '筛选条件',
        comName: 'company-node-info',
        showFlag: false,
        dataType: [
          {
            key: 'today',
            value: '今天',
            isSelect: false
          },
          {
            key: '24hours',
            value: '24小时',
            isSelect: false
          },
          {
            key: 'threeday',
            value: '三天',
            isSelect: false
          },
          {
            key: 'sevenday',
            value: '七天',
            isSelect: true
          }
        ],
        sourceType: [
          {
            key: '1',
            value: '全部',
            isSelect: true
          },
          {
            key: '2',
            value: '报刊',
            isSelect: false
          },
          {
            key: '3',
            value: '微信',
            isSelect: false
          },
          {
            key: '4',
            value: '网媒',
            isSelect: false
          },
          {
            key: '5',
            value: '微博',
            isSelect: false
          },
          {
            key: '6',
            value: '论坛',
            isSelect: false
          },
          {
            key: '8',
            value: '其它',
            isSelect: false
          }
        ],
        motionType: [
          {
            key: '1',
            value: '全部',
            isSelect: true
          },
          {
            key: '2',
            value: '正向',
            isSelect: false
          },
          {
            key: '3',
            value: '负面',
            isSelect: false
          },
          {
            key: '4',
            value: '中立',
            isSelect: false
          }
        ],
        relevantType: [
          {
            key: '1',
            value: '精确',
            isSelect: true
          },
          {
            key: '2',
            value: '关联',
            isSelect: false
          }
        ],
        repeatType: [
          {
            key: 0,
            value: '去重',
            isSelect: true
          },
          {
            key: 1,
            value: '不去重',
            isSelect: false
          }
        ],
        eventType: [
          {
            key: 0,
            value: '全部',
            isSelect: true
          },
          {
            key: 1,
            value: '包含',
            isSelect: false
          },
          {
            key: 2,
            value: '不包含',
            isSelect: false
          }
        ],
        conditions: {
          date: {
            start_date: Math.floor(getTimestamp(-7) / 1000),
            end_date: Math.floor(new Date().getTime() / 1000)
          },
          media_type: '全部',
          relevant_or_precise: '全部',
          is_contain_important_events: 0,
          sentiment_type: '全部',
          is_repeat: 1,
          time_order_type: 'desc'
        }
      }
    },
    methods: {
      selectdata(target, item) {
        target.forEach((currentObj, index, array) => {
          if (currentObj.key === item.key) {
            currentObj.isSelect = true
          } else {
            currentObj.isSelect = false
          }
        })
      },
      show() {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.contentWrapper, {
              click: true,
              propTypes: 3
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      },
      queryByConditons() {
        debugger
        const dataTypeItem = this.dataType.find(value => value.isSelect === true)
        const sourceTypeItem = this.sourceType.find(value => value.isSelect === true)
        const motionTypeItem = this.motionType.find(value => value.isSelect === true)
        const repeatTypeItem = this.repeatType.find(value => value.isSelect === true)
        const eventTypeItem = this.eventType.find(value => value.isSelect === true)
        const relevantTypeItem = this.relevantType.find(value => value.isSelect === true)
        this._getDate(dataTypeItem.value)
        this.conditions.media_type = sourceTypeItem.value
        this.conditions.relevant_or_precise = relevantTypeItem.value
        this.conditions.is_contain_important_events = eventTypeItem.key
        this.conditions.sentiment_type = motionTypeItem.value
        this.conditions.is_repeat = repeatTypeItem.key
        this.hide()
        // 通过总线向sentimentlist.vue传递查询参数条件对象
        this.$bus.$emit('updateDataByConditons', this.conditions)
      },
      _getDate(type) {
        if (type === '今天') {
          const today = new Date()
          this.conditions.date.start_date = Math.floor(getTimestamp(-1) / 1000)
          this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
        } else if (type === '24小时') {
          const today = new Date()
          // 计算24小时前时间
          this.conditions.date.start_date = Math.floor(getTimestamp(-1) / 1000)
          this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
        } else if (type === '三天') {
          const today = new Date()
          // 计算24小时前时间
          this.conditions.date.start_date = Math.floor(getTimestamp(-3) / 1000)
          this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
        } else if (type === '七天') {
          const today = new Date()
          // 计算24小时前时间
          this.conditions.date.start_date = Math.floor(getTimestamp(-7) / 1000)
          this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
        }
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 100;
    color: #fff;
    transition: all 0.5s;
    /*background: rgba(7, 17, 27, 0.8);*/
    background-color: #fff;
    .back {
      position: relative;
      left: 0;
      top: 0;
      height: 30px;
      width: 100%;
      background: #fff;
      .icon-svg {
        height: 30px;
        width: 30px;
        color: #0f0f0f
      }
    }
    .main-wrapper {
      position: relative;
      left: 0px;
      width: 100%;
      height: 100%;
      .leftarrowtitle {
        height: 44px;
        background: url("./images/wleftarrow.png") no-repeat 15.1px center;
        text-align: center;
        color: rgba(242, 242, 247, 100);
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.29px;
        line-height: 44px;
        position: relative;
      }
      .contentwrapper {
        position: relative;
        top: 0px;
        bottom: 60px;
        width: 100%;
        height: calc(100vh - 44px);
        overflow: hidden;
        .condition-wrapper {
          height: calc(100% + 130px);
          padding-left: 15px;
          padding-right: 15px;
          .monitor-word {
            background-color: rgba(247, 247, 247, 100);
            .title {
              height: 45px;
              width: 100%;
              padding-top: 4px;
              padding-left: 10px;
              margin-bottom: 0px;
              line-height: 40px;
              color: rgba(16, 16, 16, 100);
              font-size: 14px;
              font-weight: bold;
              text-align: left;
            }
            .condition {
              padding-left: 8px;
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              background-color: rgba(255, 255, 255, 100);
              margin-bottom: 12px;
              &.last-child {
                margin-bottom: 0px;
              }
              .item {
                flex: none;
                margin-right: 14px;
                margin-top: 10px;
                .active {
                  color: rgb(64, 158, 255);
                  background: rgb(236, 245, 255);
                  border-color: rgb(179, 216, 255);
                }
              }
            }
          }
          .btn-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
            padding-top: 15px;
            padding-bottom: 60px;
            margin-bottom: 10px;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
