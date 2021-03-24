<template>
  <div>
    <div class="main-content">
      <div class="content-wrapper">
        <div class="desc">
          <div class="logo">

          </div>
          <div class="detail">
            <div class="name">公司名称公司名称</div>
            <div class="info"><span>法人:凌东胜 </span><span>成立日期:2020-09-19</span></div>
          </div>
        </div>
        <div class="profile-wrapper">
          <span class="profile">经营范围:软件及通讯产品(不含卫星广播电视地面接收设施)经营范围:软件及通讯产品(不含卫星广播电视地面接收设施)</span>
        </div>
        <div class="lastdate">
          <span>截止日期: </span><span>2020-01-07 14:13:14</span>
        </div>
      </div>
      <div class="detailcotent-wrapper">
        <div class="tabs">
          <div v-for="(value, index) in tabs" :key="value.id" :class="['tab-item', isSelect === index ? 'active' : '']" @click="selectTab(index, value.key)">
            <div class="icon"><i class="el-icon-document"/></div>
            <div :class="['text', isSelect === index ? 'active' : '']"><span>{{value.name}}</span></div>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <router-view keep-alive></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import busidetail from './busidetail'
  import busigraph from './busigraph'
  import industrydetail from './industrydetail'
  export default {
    components: {
      busidetail,
      industrydetail,
      busigraph
    },
    data() {
      return {
        currentComponent: 'busigraph',
        isSelect: 0,
        tabs: [{ id: 0, key: 'busigraph', name: '商业图谱' }, { id: 1, key: 'industrydetail', name: '行业资讯' }, { id: 2, key: 'busidetail', name: '商业资讯' }]
      }
    },
    // watch: {
    //   '$route.path': {
    //     handler: function(newPath, oldPath) {
    //       if (newPath === '/busigraph') {
    //         this.isActived = 0
    //         this.$router.push({ name: 'busigraph' })
    //       }
    //     },
    //     immediate: true // 最初绑定值的时候也执行函数
    //   }
    // },
    mounted() {
      this.$router.push({ name: 'busigraph' })
    },
    methods: {
      showdetail(compNames) {
        if (compNames === 'sentimentcondition') {
          this.$refs.sentimentcondition.show()
        } else if (compNames === 'sentimenturl') {
          this.$refs.sentimenturl.show()
        } else if (compNames === 'companynodeinfo') {
          this.$refs.companynodeinfo.show()
        }
      },
      selectTab(index, name) {
        this.isSelect = index
        this.$router.push({ name: name })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-content {
    padding-left: 15px;
    padding-right: 15px;
    .content-wrapper {
      height: 146px;
      background: #FFFFFF;
      box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12);
      border-radius: 4px;
      .desc {
        display: flex;
        height: 75px;
        .logo {
          flex: 0 1 56px;
          margin: 10px;
          background-color: #e2e1e1;
        }
        .detail {
          margin: 12px 10px 10px 10px;
          .name {
            text-align: left;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: rgba(0,0,0,0.80);
          }
          .info {
            margin-top: 10px;
            text-align: left;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(0,0,0,0.40);
          }
        }
      }
      .profile-wrapper {
        height: 38px;
        padding: 2px 10px 8px 10px;
        .profile {
          /*多行文本溢出*/
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: rgba(0,0,0,0.60);
        }
      }
      .lastdate {
        padding: 6px 10px 0px 10px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0,0,0,0.40);
      }
    }
    .detailcotent-wrapper {
      height: 55px;
      padding-left: 12px;
      padding-right: 12px;
      margin-top: 14px;
      border-bottom: 2px solid #e4e7ed;
      .tabs {
        display: flex;
        justify-content: space-between;
        .tab-item {
          width: 48px;
          flex: 0 0 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &.active {
            color: #5584FF;
            border-bottom: 2px solid #5584FF;
          }
          .icon {
            flex: 1;
            font-size: 25px;
          }
          .text {
            margin-top: 6px;
            padding-bottom: 4px;
            flex: 1;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(0,0,0,0.40);
            text-align: center;
            &.active {
              color: #5584FF;
            }
          }
        }
      }
    }
    .tab-content {
      width: 100%;
      height: 700px;
    }
  }
</style>
