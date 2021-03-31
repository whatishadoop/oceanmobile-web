<template>
  <div>
    <div class="main-content">
      <div v-if="hasData">
        <div class="content-wrapper">
          <div class="desc">
            <div class="logo">
              <img :src="imageUrl" class="img"/>
            </div>
            <div class="detail">
              <div class="name">{{company_name}}</div>
              <div class="info"><span style="display: inline-block;width: 100px;">法人: {{legal_person}} </span><span> </span><span>成立日期: {{create_date}}</span></div>
            </div>
          </div>
          <div class="profile-wrapper">
            <span class="profile">{{company_profile}}</span>
          </div>
          <div class="lastdate">
            <span>截止日期: </span><span>{{data_update_time}}</span>
          </div>
        </div>
        <div class="detailcotent-wrapper">
          <div class="tabs">
            <div v-for="(value, index) in tabs" :key="value.id" :class="['tab-item', isSelect === index ? 'active' : '']" @click="selectTab(index, value.key)">
              <div class="icon"><i :class="value.icon"/></div>
              <div :class="['text', isSelect === index ? 'active' : '']"><span>{{value.name}}</span></div>
            </div>
          </div>
        </div>
        <div class="tab-content">
          <keep-alive>
            <router-view ref="subcompoent2"></router-view>
          </keep-alive>
        </div>
      </div>
      <div v-if="!hasData" class="nodata">
        <img :src="backgroundImage" class="image-size">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import busidetail from './busidetail'
  import busigraph from './busigraph'
  import industrydetail from './industrydetail'
  import { getCompanyDetail } from '@/api/app'
  import backgroundImage from '@/assets/image/shuju.png'
  export default {
    components: {
      busidetail,
      industrydetail,
      busigraph
    },
    data() {
      return {
        hasData: false,
        backgroundImage: backgroundImage,
        currentCaseId: this.$route.query.currentCaseId,
        imageUrl: '',
        company_name: '',
        legal_person: '',
        company_profile: '',
        create_date: '',
        data_update_time: '',
        nodesArray: [],
        edgesArray: [],
        currentComponent: 'busigraph',
        isSelect: 0,
        tabs: [{ id: 0, key: 'busigraph', name: '商业图谱', icon: 'el-icon-share' }, { id: 1, key: 'industrydetail', name: '行业资讯', icon: 'el-icon-tickets' }, { id: 2, key: 'busidetail', name: '商业资讯', icon: 'el-icon-data-line' }]
      }
    },
    created() {
      this.$nextTick(() => {
        this.getCompanyDetail()
      })
    },
    methods: {
      getCompanyDetail() {
        debugger
        const data = {
          data: {
            userid: this.$store.state.user.user.userId,
            case_id: this.currentCaseId
          }
        }
        getCompanyDetail(data).then(res => {
          debugger
          if (res.data !== null && res.data.company_name !== '' && res.data.company_name !== null) {
            this.hasData = true
            this.imageUrl = res.data.imageUrl
            this.company_name = res.data.company_name
            this.create_date = res.data.create_date
            this.legal_person = res.data.legal_person
            this.company_profile = res.data.company_profile
            this.data_update_time = res.data.data_update_time
            this.nodesArray = [...this.nodesArray, ...res.data.business_graph.node_array]
            this.edgesArray = [...this.nodesArray, ...res.data.business_graph.edge_array]
            this.$router.push({ name: 'busigraph', params: { nodes: JSON.stringify(res.data.business_graph.node_array), edges: JSON.stringify(res.data.business_graph.edge_array) }})
          }
        }).catch(err => {
          console.log(err)
        })
      },
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
        debugger
        this.isSelect = index
        if (index === 0) {
          this.$router.push({ name: name, params: { nodes: JSON.stringify(this.nodesArray), edges: JSON.stringify(this.edgesArray) }})
        } else {
          debugger
          this.$router.push({ name: name, query: { currentCaseId: this.currentCaseId }})
          this.$bus.$emit('refreshIndustryInfo')
        }
      },
      updateDetailInfo() {
        if (this.isSelect === 1 || this.isSelect === 2) {
          this.$refs.subcompoent2.updateDataDetailByCondition()
        }
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-content {
    padding-left: 15px;
    padding-right: 15px;
    .nodata {
      height: calc(100vh - 300px);
      display: flex;
      align-items: center;
      .image-size {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
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
          img {
            position: relative;
            width: 56px;
            height: 55px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
            &::after {
              content: "";
              position: absolute;
              z-index: 2;
              top: 0;
              left: 0;
              width: 56px;
              height: 55px;
              /*background: url("../../../../assets/images/defaultImg.png") no-repeat;*/
              background-size: 100% 100%;
              background-color: #fff;
            }
          }
        }
        .detail {
          margin: 12px 10px 10px 10px;
          .name {
            height: 18px;
            width: 226px;
            text-align: left;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: rgba(0,0,0,0.80);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .info {
            width: 224px;
            height: 14px;
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
          line-height: 16px;
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
    }
  }
</style>
