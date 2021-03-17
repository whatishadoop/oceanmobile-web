<template>
  <div>
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
        <div class="title">噪音过滤</div>
        <div class="condition">
          <div v-for="(item, index) in filterType" :key="index" class="item">
            <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(filterType, item)">{{item.value}}</el-tag>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">重复信息</div>
        <div class="condition">
          <div v-for="(item, index) in repeatType" :key="index" class="item">
            <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(repeatType, item)">{{item.value}}</el-tag>
          </div>
        </div>
      </div>
      <div class="monitor-word" style="height: 100px;">
        <div class="title">重大事件</div>
        <div class="condition">
          <div v-for="(item, index) in eventType" :key="index" class="item">
            <el-tag :class="{'active':item.isSelect}" style="width: 70px;text-align: center" size="medium" type="info" @click="selectdata(eventType, item)">{{item.value}}</el-tag>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <el-button style="width: 310px;" type="primary" round>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        dataType: [
          {
            key: 'today',
            value: '今天',
            isSelect: false
          },
          {
            key: 'oneday',
            value: '24小时',
            isSelect: false
          },
          {
            key: 'threeday',
            value: '3天',
            isSelect: false
          },
          {
            key: 'sevenday',
            value: '7天',
            isSelect: false
          },
          {
            key: 'fifteenday',
            value: '15天',
            isSelect: false
          },
          {
            key: 'threemonth',
            value: '近三个月',
            isSelect: false
          },
          {
            key: 'onemonth',
            value: '近一个月',
            isSelect: false
          }
        ],
        sourceType: [
          {
            key: '1',
            value: '全部',
            isSelect: false
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
            value: '媒体1',
            isSelect: false
          },
          {
            key: '5',
            value: '媒体2',
            isSelect: false
          },
          {
            key: '6',
            value: '媒体3',
            isSelect: false
          },
          {
            key: '7',
            value: '媒体4',
            isSelect: false
          },
          {
            key: '8',
            value: '媒体5',
            isSelect: false
          },
          {
            key: '9',
            value: '媒体6',
            isSelect: false
          }
        ],
        motionType: [
          {
            key: '1',
            value: '全部',
            isSelect: false
          },
          {
            key: '2',
            value: '正向',
            isSelect: false
          },
          {
            key: '3',
            value: '中性',
            isSelect: false
          }
        ],
        filterType: [
          {
            key: '1',
            value: '全部',
            isSelect: false
          },
          {
            key: '2',
            value: '正向',
            isSelect: false
          },
          {
            key: '3',
            value: '中性',
            isSelect: false
          }
        ],
        repeatType: [
          {
            key: '1',
            value: '去重',
            isSelect: false
          },
          {
            key: '2',
            value: '不去重',
            isSelect: false
          }
        ],
        eventType: [
          {
            key: '1',
            value: '全部',
            isSelect: false
          },
          {
            key: '2',
            value: '包含',
            isSelect: false
          },
          {
            key: '3',
            value: '不包含',
            isSelect: false
          }
        ]
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
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .condition-wrapper {
    height: 100%;
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
</style>
