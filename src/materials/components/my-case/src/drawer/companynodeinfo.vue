<template>
  <div>
    <div v-if="!isShowUrl" class="main-content">
      <div class="content-wrapper">
        <div class="desc">
          <div class="logo">
            <img :src="companyData.logo" class="img"/>
          </div>
          <div class="detail">
            <div class="name">{{companyData.company_name}}</div>
            <div class="info"><span>成立日期: {{companyData.start_date}}</span></div>
          </div>
        </div>
        <div class="profile-wrapper">
          <span class="profile">{{companyData.company_profile}}</span>
        </div>
        <div class="tabs">
          <div class="tab-item">
            <div class="text-one"><span>注册号</span></div>
            <div class="text-two"><span>{{companyData.registration_number}}</span></div>
          </div>
          <div class="tab-item">
            <div class="text-one"><span>社会统一信用代码</span></div>
            <div class="text-two"><span>{{companyData.credit_code}}</span></div>
          </div>
          <div class="tab-item" style="padding-left: 30px;">
            <div class="text-one"><span>法人</span></div>
            <div class="text-two"><span>{{companyData.legal_person}}</span></div>
          </div>
        </div>
        <div class="lastdate">
          <span>数据更新: </span><span>{{companyData.data_update_time}}</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="company-info-wrapper">
        <div class="company-info">企业信息</div>
        <div class="attrs-wrapper">
          <div v-for="index in 3" :key="index" class="attrs">
            <div v-for="index2 in 2" :key="index2" class="attr-item">
              <div class="text-one"><span>{{attrsOne[index * index2]}}</span></div>
              <div class="text-two"><span>{{valueOne[index * index2]}}</span></div>
            </div>
          </div>
        </div>
        <div v-show="isShow" class="attrs-wrapper">
          <div v-for="index in 3" :key="index" class="attrs">
            <div v-for="index2 in 2" :key="index2" class="attr-item">
              <div class="text-one"><span>{{attrsTwo[index * index2]}}</span></div>
              <div class="text-two"><span>{{valueTwo[index * index2]}}</span></div>
            </div>
          </div>
        </div>
        <div v-show="isShow" class="attrs-wrapper">
          <div v-for="index in 5" :key="index" class="attrs">
            <div class="attr-item">
              <div class="text-one"><span>{{attrsThree[index]}}</span></div>
              <div class="text-two"><span>{{valueThree[index]}}</span></div>
            </div>
          </div>
          <div class="attrs" style="height: 120px;">
            <div class="attr-item">
              <div class="text-one"><span>{{attrsThree[6]}}</span></div>
              <div class="extra-text-two"><span>{{companyData.scope}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="extramorecase" @click="showMoreInfos">
        查看更多信息 <i :class="[isShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
      </div>
      <div class="event-info-wrapper">
        <div class="event-info">重大事件</div>
        <div class="event-type-one">
          <el-tag class="item">全部({{eventsTotal[0]}})</el-tag>
          <el-tag class="item">投融资({{eventsTotal[1]}})</el-tag>
          <el-tag class="item">招投标({{eventsTotal[2]}})</el-tag>
        </div>
        <div class="event-type-one">
          <el-tag class="item">战略合作({{eventsTotal[3]}})</el-tag>
          <el-tag class="item">新品发布({{eventsTotal[4]}})</el-tag>
          <el-tag class="item">其它事件({{eventsTotal[5]}})</el-tag>
        </div>
        <div class="timeline-wrapper">
          <el-timeline :reverse="false" style="padding-left: 0px;">
            <template v-for="(value, index) in eventsData">
              <el-timeline-item :timestamp="value.date" :key="index" placement="top">
                <el-card>
                  <div class="title"><el-tag size="mini">{{value.important_events_type}}</el-tag><span style="margin-left: 8px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{value.title}}</span></div>
                  <div class="query-more" @click="showDetails(value.url)">查看<i class="el-icon-arrow-right"></i></div>
                </el-card>
              </el-timeline-item>
            </template>
          </el-timeline>
        </div>
      </div>
      <div class="morecase" @click="showMoreEvents">
        查看更多事件 <i class="el-icon-arrow-down"></i>
      </div>
      <div style="height: 100px"></div>
    </div>
    <div v-if="isShowUrl" class="main-urlcontent">
      <iframe
        :src="url"
        style="height: 100%;width:100%;
        frameborder=no"
        frameborder="no"
        border="0"
        marginWidth="0"
        marginHeight="0"></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCompanyInfoById, getImportantEvents } from '@/api/app'
  export default {
    props: {
      companyId:
        {
          type: String,
          default: '82'
        }
    },
    data() {
      return {
        page: 1,
        isShow: false,
        isShowUrl: false,
        url: '',
        attrsOne: ['登记状态', '所属行业', '注册资本', '实缴资本', '参保人数', '人员规模'],
        attrsTwo: ['统一社会信用代码', '纳税人识别号', '工商注册号', '进出口企业代码', '组织机构代码', '核准日期', '经营期限'],
        attrsThree: ['企业地址', '企业类型', '英文名', '曾用名', '登记机关', '主要成员', '经营范围'],
        valueOne: [],
        valueTwo: [],
        valueThree: [],
        companyData: {},
        eventsData: [],
        eventsTotal: []
      }
    },
    created() {
      this.$nextTick(() => {
        // 获取所有方案列表信息
        this.getCompanyInfoById()
        this.getImportantEvents()
      })
    },
    mounted() {
    },
    methods: {
      showMoreInfos() {
        this.isShow = !this.isShow
      },
      showMoreEvents() {
        this.page += 1
        this.getImportantEvents()
      },
      getCompanyInfoById() {
        debugger
        const data = {
          data: {
            id: this.companyId,
            user_id: this.$store.state.user.user.userId
          }
        }
        getCompanyInfoById(data).then(res => {
          debugger
          this.companyData = res.data
          // attrsOne: ['登记状态', '所属行业', '注册资本', '实缴资本', '参保人数', '人员规模'],
          this.valueOne.push(res.data.status)
          this.valueOne.push(res.data.industries.join(','))
          this.valueOne.push(res.data.regist_capital)
          this.valueOne.push(res.data.paid_capital)
          this.valueOne.push(res.data.insured_persons_number)
          this.valueOne.push(res.data.staff_number)

          // ['统一社会信用代码', '纳税人识别号', '工商注册号', '进出口企业代码', '组织机构代码', '核准日期', '经营期限']
          this.valueTwo.push(res.data.credit_code)
          this.valueTwo.push(res.data.taxpayer_identification_number)
          this.valueTwo.push(res.data.registration_number)
          this.valueTwo.push(res.data.import_and_export_enterprise_code)
          this.valueTwo.push(res.data.org_code)
          this.valueTwo.push(res.data.check_date)
          this.valueTwo.push(res.data.term_start_end)

          // ['企业地址', '企业类型', '英文名', '曾用名', '登记机关', '主要成员', '经营范围'],
          this.valueThree.push(res.data.addr)
          this.valueThree.push(res.data.company_kind)
          this.valueThree.push(res.data.company_en_name)
          this.valueThree.push(res.data.company_origin_name.join(','))
          this.valueThree.push(res.data.belong_org)
          let staffs = ''
          res.data.leading_member.forEach(item => {
            staffs += item.name + ','
          })
          this.valueThree.push(staffs)
        }).catch(err => {
          console.log(err)
        })
      },
      getImportantEvents() {
        debugger
        const data = {
          data: {
            page: this.page,
            rows: 8,
            user_id: this.$store.state.user.user.userId,
            company_id: this.companyId,
            important_events_type: '全部'
          }
        }
        getImportantEvents(data).then(res => {
          debugger
          this.eventsTotal = res.data.total
          this.eventsData = [...this.eventsData, ...res.data.rows]
        }).catch(err => {
          console.log(err)
        })
      },
      showDetails(url) {
        this.url = url
        this.isShowUrl = !this.isShowUrl
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .main-urlcontent{
    width: 100%;
    height: calc(100vh - 44px);
  }
  .main-content {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    .content-wrapper {
      width: 345px;
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
        height: 40px;
        padding: 2px 10px 0px 0px;
        .profile {
          height: 32px;
          /*多行文本溢出*/
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-family: PingFangSC-Regular;
          line-height: 16px;
          font-size: 12px;
          color: rgba(0,0,0,0.60);
        }
      }
      .tabs {
        display: flex;
        justify-content: space-between;
        height: 45px;
        .tab-item {
          width: 110px;
          flex: 0 0 110px;
          display: flex;
          flex-direction: column;
          align-items: left;
          .text-one {
            flex: 1;
            padding-top: 5px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(179, 179, 179, 100);
          }
          .text-two {
            flex: 1;
            margin-top: -5px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: rgba(49, 49, 49, 100);
          }
        }
      }
      .lastdate {
        padding: 6px 10px 0px 0;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0,0,0,0.40);
      }
    }
    .divider {
      height: 10px;
      line-height: 20px;
      margin-top: 10px;
      background-color: rgba(242, 242, 242, 100);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 100);
    }
    .company-info-wrapper {
      .company-info {
        width: 57px;
        height: 19px;
        margin-top: 16px;
        display: inline-block;
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
      }
      .attrs-wrapper {
        padding-top: 10px;
        padding-bottom: 6px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .attrs {
          display: flex;
          height: 45px;
          padding-left: 10px;
          .attr-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: left;
            .text-one {
              flex: 1;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: rgba(179, 179, 179, 100);
            }
            .extra-text-two {
              margin-top: 5px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 6;
              overflow: hidden;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              line-height: 16px;
              color: #313131;
            }
            .text-two {
              flex: 1;
              margin-top: -5px;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: rgba(49, 49, 49, 100);
            }
          }
        }
      }
    }
    .extramorecase{
      margin: 10px 13px 0 13px;
      height: 47px;
      line-height: 47px;
      text-align: center;
      background: rgba(48,122,255,0.08);
      font-size: 18px;
      color: #306DFE;
    }
    .morecase {
      margin: 10px 13px 0 13px;
      height: 47px;
      line-height: 47px;
      text-align: center;
      background: rgba(48,122,255,0.08);
      font-size: 18px;
      color: #306DFE;
    }
    .event-info-wrapper {
      .event-info {
        width: 57px;
        height: 19px;
        margin-top: 16px;
        display: inline-block;
        color: rgba(16, 16, 16, 100);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
      }
      .event-type-one {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        .item {
          width: 100px;
          flex: 0 0 100px;
          background-color: rgba(208, 232, 244, 100);
          color: rgba(0, 122, 255, 100);
          text-align: center;
        }
      }
      .timeline-wrapper {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 15px;
        .title {
          width: 250px;
          display: flex;
          align-items: center;
          margin-bottom: 0px;
          color: rgba(16, 16, 16, 100);
          font-size: 12px;
        }
        .query-more {
          margin-left: 2px;
          margin-top: 5px;
          color: #BDBCBC;
          font-size: 12px;
        }
      }
      .morecase {
        margin: 10px 13px 0 13px;
        height: 47px;
        line-height: 47px;
        text-align: center;
        background: rgba(48,122,255,0.08);
        font-size: 18px;
        color: #306DFE;
      }
    }
  }
</style>
