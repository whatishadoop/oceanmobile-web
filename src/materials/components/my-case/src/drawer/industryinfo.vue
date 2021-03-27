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
                    <el-tag :class="{'active':item.isSelect}" style="width: 80px;text-align: center" size="medium" type="info" @click="selectOne(oneLevel, item)">{{item.name}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="monitor-word">
                <div class="title">二级行业</div>
                <div class="condition">
                  <div v-for="(item, index) in twoLevel" :key="index" class="item">
                    <el-tag :class="{'active':item.isSelect}" style="width: 80px;text-align: center" size="medium" type="info" @click="selectTwo(twoLevel, item)">{{item.name}}</el-tag>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <el-button style="width: 310px;background-color: #5584FF;" type="primary" round @click="addIndustry">确认</el-button>
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
        currentOneLevel: {
          id: '1',
          name: '大数据',
          isSelect: false
        },
        currentTwoLevel: '',
        oneLevel: [
          {
            id: '1',
            name: '大数据',
            isSelect: false
          },
          {
            id: '2',
            name: '人工智能',
            isSelect: false
          },
          {
            id: '3',
            name: '金融',
            isSelect: false
          }
        ],
        twoLevelOne: [
          {
            id: '1_1',
            name: '相关硬件',
            isSelect: false
          },
          {
            id: '1_2',
            name: '基础软件',
            isSelect: false
          },
          {
            id: '1_3',
            name: '智能软件',
            isSelect: false
          },
          {
            id: '1_4',
            name: '数据资产',
            isSelect: false
          },
          {
            id: '1_5',
            name: '云计算',
            isSelect: false
          },
          {
            id: '1_6',
            name: '信息安全',
            isSelect: false
          },
          {
            id: '1_7',
            name: '数据可视化',
            isSelect: false
          },
          {
            id: '1_8',
            name: '智能终端',
            isSelect: false
          },
          {
            id: '1_9',
            name: '包含',
            isSelect: false
          },
          {
            id: '1_10',
            name: '大数据平台',
            isSelect: false
          },
          {
            id: '1_11',
            name: '其它',
            isSelect: false
          }
        ],
        twoLevelTwo: [
          {
            id: '2_1',
            name: '相关硬件',
            isSelect: false
          },
          {
            id: '2_2',
            name: '云计算',
            isSelect: false
          },
          {
            id: '2_3',
            name: '生物识别',
            isSelect: false
          },
          {
            id: '2_4',
            name: '图像识别',
            isSelect: false
          },
          {
            id: '2_5',
            name: '智能制造',
            isSelect: false
          },
          {
            id: '2_6',
            name: '智能机器人',
            isSelect: false
          },
          {
            id: '2_7',
            name: '智慧金融',
            isSelect: false
          },
          {
            id: '2_8',
            name: '智慧医疗',
            isSelect: false
          },
          {
            id: '2_9',
            name: '智能教育',
            isSelect: false
          },
          {
            id: '2_10',
            name: '智能安防',
            isSelect: false
          },
          {
            id: '2_11',
            name: '其它',
            isSelect: false
          }
        ],
        twoLevelThree: [
          {
            id: '3_1',
            name: '银行',
            isSelect: false
          },
          {
            id: '3_2',
            name: '保险',
            isSelect: false
          },
          {
            id: '3_3',
            name: '基金',
            isSelect: false
          },
          {
            id: '3_4',
            name: '证券',
            isSelect: false
          },
          {
            id: '3_5',
            name: '资产管理',
            isSelect: false
          },
          {
            id: '3_6',
            name: '交易所',
            isSelect: false
          },
          {
            id: '3_7',
            name: '融资租赁',
            isSelect: false
          },
          {
            id: '3_8',
            name: '其它',
            isSelect: false
          }
        ]
      }
    },
    computed: {
      twoLevel() {
        if (this.currentOneLevel.name === '大数据') {
          return this.twoLevelOne
        } else if (this.currentOneLevel.name === '人工智能') {
          return this.twoLevelTwo
        } else if (this.currentOneLevel.name === '金融') {
          return this.twoLevelThree
        }
      }
    },
    methods: {
      selectOne(target, item) {
        target.forEach((currentObj, index, array) => {
          if (currentObj.id === item.id) {
            currentObj.isSelect = true
          } else {
            currentObj.isSelect = false
          }
        })
        this.currentOneLevel = item
      },
      selectTwo(target, item) {
        target.forEach((currentObj, index, array) => {
          if (currentObj.id === item.id) {
            currentObj.isSelect = true
          } else {
            currentObj.isSelect = false
          }
        })
        this.currentTwoLevel = item.name
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
      addIndustry() {
        // 通过总线向caselist.vue传递查询参数条件对象,todo
        this.$bus.$emit('setIndustry', this.currentOneLevel)
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
              padding-left: 20px;
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
