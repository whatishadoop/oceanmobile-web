<template>
  <div>
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
      <div v-show="showFlag" class="detail">
        <div class="main-wrapper">
          <div class="leftarrowtitle" style="background-color: #5584FF;" @click="hide">{{title}}</div>
          <div ref="contentWrapper" class="contentwrapper">
            <div class="condition-wrapper">
              <div class="monitor-word">
                <div class="title">一级行业</div>
                <div class="condition">
                  <div v-for="(item, index) in oneLevel" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectOne(oneLevel, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">二级行业</div>
                <div class="condition">
                  <div v-for="(item, index) in twoLevel" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectTwo(twoLevel, item)">{{item.value}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <el-button style="width: 310px;" type="primary" round>确认</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        title: '所属行业',
        showFlag: false,
        currentOneLevel: '大数据',
        currentTwoLevel: '',
        oneLevel: [
          {
            key: '1',
            value: '大数据',
            isSelect: false
          },
          {
            key: '2',
            value: '人工智能',
            isSelect: false
          },
          {
            key: '3',
            value: '金融',
            isSelect: false
          }
        ],
        twoLevelOne: [
          {
            key: '1_1',
            value: '相关硬件',
            isSelect: false
          },
          {
            key: '1_2',
            value: '基础软件',
            isSelect: false
          },
          {
            key: '1_3',
            value: '智能软件',
            isSelect: false
          },
          {
            key: '1_4',
            value: '数据资产',
            isSelect: false
          },
          {
            key: '1_5',
            value: '云计算',
            isSelect: false
          },
          {
            key: '1_6',
            value: '信息安全',
            isSelect: false
          },
          {
            key: '1_7',
            value: '数据可视化',
            isSelect: false
          },
          {
            key: '1_8',
            value: '智能终端',
            isSelect: false
          },
          {
            key: '1_9',
            value: '包含',
            isSelect: false
          },
          {
            key: '1_10',
            value: '大数据平台',
            isSelect: false
          },
          {
            key: '1_11',
            value: '其它',
            isSelect: false
          }
        ],
        twoLevelTwo: [
          {
            key: '2_1',
            value: '相关硬件',
            isSelect: false
          },
          {
            key: '2_2',
            value: '云计算',
            isSelect: false
          },
          {
            key: '2_3',
            value: '生物识别',
            isSelect: false
          },
          {
            key: '2_4',
            value: '图像识别',
            isSelect: false
          },
          {
            key: '2_5',
            value: '智能制造',
            isSelect: false
          },
          {
            key: '2_6',
            value: '智能机器人',
            isSelect: false
          },
          {
            key: '2_7',
            value: '智慧金融',
            isSelect: false
          },
          {
            key: '2_8',
            value: '智慧医疗',
            isSelect: false
          },
          {
            key: '2_9',
            value: '智能教育',
            isSelect: false
          },
          {
            key: '2_10',
            value: '智能安防',
            isSelect: false
          },
          {
            key: '2_11',
            value: '其它',
            isSelect: false
          }
        ],
        twoLevelThree: [
          {
            key: '3_1',
            value: '银行',
            isSelect: false
          },
          {
            key: '3_2',
            value: '保险',
            isSelect: false
          },
          {
            key: '3_3',
            value: '基金',
            isSelect: false
          },
          {
            key: '3_4',
            value: '证券',
            isSelect: false
          },
          {
            key: '3_5',
            value: '资产管理',
            isSelect: false
          },
          {
            key: '3_6',
            value: '交易所',
            isSelect: false
          },
          {
            key: '3_7',
            value: '融资租赁',
            isSelect: false
          },
          {
            key: '3_8',
            value: '其它',
            isSelect: false
          }
        ]
      }
    },
    computed: {
      twoLevel() {
        if (this.currentOneLevel === '大数据') {
          return this.twoLevelOne
        } else if (this.currentOneLevel === '人工智能') {
          return this.twoLevelTwo
        } else if (this.currentOneLevel === '金融') {
          return this.twoLevelThree
        }
      }
    },
    methods: {
      selectOne(target, item) {
        target.forEach((currentObj, index, array) => {
          if (currentObj.key === item.key) {
            currentObj.isSelect = true
          } else {
            currentObj.isSelect = false
          }
        })
        this.currentOneLevel = item.value
      },
      selectTwo(target, item) {
        target.forEach((currentObj, index, array) => {
          if (currentObj.key === item.key) {
            currentObj.isSelect = true
          } else {
            currentObj.isSelect = false
          }
        })
        this.currentTwoLevel = item.value
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
          height: 100%;
          padding-left: 15px;
          padding-right: 15px;
          .monitor-word {
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
              margin-bottom: 12px;
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
            margin-top: 30px;
            margin-bottom: 10px;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
