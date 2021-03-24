<template>
  <div>
    <div class="case-wrapper">
      <div class="name">
        <div class="lable">方案名称:</div>
        <div class="input-wrapper">
          <el-input v-model="conditons.data.name" placeholder="请选择方案名称" clearable/>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">企业名称:</div>
          <div class="input-wrapper">
            <el-autocomplete
              v-model="conditionstrs.monitorwords.company_name"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              style="width:100%"
              @select="selectCompany"
            ></el-autocomplete>
          </div>
        </div>
        <div class="name">
          <div class="lable">主要成员:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.monitorwords.staff" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">分支机构:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.monitorwords.sub_company" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">竞品选择:</div>
          <div class="input-wrapper">
            <el-autocomplete
              v-model="conditionstrs.monitorwords.competitor_select"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              style="width:100%"
              @select="selectCompetitor"
            ></el-autocomplete>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">竞品公司:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.monitorwords.competitor_company" clearable placeholder="请选择所属竞品公司"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">所属行业:</div>
          <div class="input-wrapper" @click="showIndusryInfo">
            <el-input v-model="conditionstrs.monitorwords.industry_names" :readonly="true" placeholder="请选择所属行业"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">技术方案:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.monitorwords.technology" placeholder="请输入技术方案"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">排除词:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.excludewords.words" placeholder="请输入, 支持批量添加用;分割"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">预警方式</div>
        <div class="name">
          <div class="lable">预警词:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.alarmmode.words" placeholder="请输入, 支持批量添加用;分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">媒体预警:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.alarmmode.mediawords" placeholder="请输入, 支持批量添加用;分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">作者预警:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.alarmmode.author" placeholder="请输入, 支持批量添加用;分割" @blur="gotoView" @focus="gotoView"/>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <el-button style="width: 310px;background-color: #5584FF;color: #FFFFFF;font-size: 16px;" round>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCompanyFullName, getCompanySimpleInfoWithName } from '@/api/app'
  export default {
    data() {
      return {
        companys: [],
        timeout: null,
        conditionstrs: {
          monitorwords: {
            company_name: '',
            company_id: '1234',
            staff: '',
            sub_company: '',
            competitor_select: '',
            competitor_company: '',
            competitor_company_id: '',
            industry_names: '计算机软件',
            industry_ids: '',
            technology: 'java;c++'
          },
          excludewords: {
            words: '排除词1'
          },
          alarmmode: {
            words: '冻结;处罚',
            mediawords: '新浪微博',
            author: '李嘉诚'
          }
        },
        conditons: {
          data: {
            userid: 'test_3',
            caseid: '',
            name: '中新赛克11332',
            monitorwords: {
              company_name: '南京中新赛克有限责任有限公司',
              company_id: '1234',
              staff: ['凌东胜', '王明意'],
              sub_company: ['南京中新赛克有限责任公司北京分公司', '南京中新赛克有限责任北京分公司'],
              competitor_company: ['凯申物流股份有限公司'],
              competitor_company_id: ['1'],
              industry_names: ['计算机软件'],
              industry_ids: ['1'],
              technology: ['java', 'c++']
            },
            excludewords: {
              words: ['排除词1']
            },
            alarmmode: {
              words: ['冻结', '处罚'],
              mediawords: ['新浪微博'],
              author: ['李嘉诚']
            }
          }
        }
      }
    },
    mounted() {
    },
    methods: {
      showIndusryInfo() {
        this.$emit('showdetail', 'industryinfo')
      },
      querySearchAsync(queryString, cb) {
        const _this = this
        const data = {
          text: queryString
        }
        getCompanyFullName(data).then(res => {
          res.data.forEach(item => {
            _this.companys.push({ 'value': item })
          })
          console.log(_this.companys)
          cb(_this.companys)
        }).catch(err => {
          console.log(err)
        })
        console.log(this.companys)
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      selectCompany(item) {
        const _this = this
        const data = {
          company_name: item.value
        }
        getCompanySimpleInfoWithName(data).then(res => {
          debugger
          res.data.leading_member.forEach(item => {
            _this.conditionstrs.monitorwords.staff += item + ';'
          })
          res.data.sub_companies.forEach(item => {
            _this.conditionstrs.monitorwords.sub_company += item + ';'
          })
        }).catch(err => {
          console.log(err)
        })
      },
      selectCompetitor(item) {
        this.conditionstrs.monitorwords.competitor_company += item.value + ';'
      },
      gotoView(event) {
        const This = event.currentTarget
        setTimeout(() => {
          This.scrollIntoView({
            block: 'end',
            behavior: 'smooth'
          })
        }, 500)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.case-wrapper {
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
    .name {
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 100);
      text-align: center;
      padding-left: 10px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .lable {
        width: 70px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(0,0,0,0.80);
        text-align: left;
      }
      .input-wrapper {
        width: 250px;
      }
    }
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
      .name {
        display: flex;
        height: 45px;
        align-items: center;
        background-color: rgba(255, 255, 255, 100);
        text-align: center;
        padding-left: 10px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .lable {
          width: 70px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(0,0,0,0.80);
          text-align: left;
        }
        .input-wrapper {
          width: 250px;
        }
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 10px;
    }
  }
  /*修改输入框样式*/
  .input-wrapper /deep/ .el-input__inner {
    border-radius: 0px;
    border: 0;
    padding: 0;
  }
</style>
