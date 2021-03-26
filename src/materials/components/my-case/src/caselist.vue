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
            <el-input v-model="conditionstrs.monitorwords.staffs" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">分支机构:</div>
          <div class="input-wrapper">
            <el-input v-model="conditionstrs.monitorwords.sub_companies" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">选择竞品:</div>
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
            <el-input v-model="conditionstrs.monitorwords.technologies" placeholder="请输入技术方案"/>
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
            <el-input v-model="conditionstrs.alarmmode.authors" placeholder="请输入, 支持批量添加用;分割"/>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <el-button style="width: 310px;background-color: #5584FF;color: #FFFFFF;font-size: 16px;" round @click="savemonitor">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getCompanyFullName, getCompanySimpleInfoWithName, saveMonitorCase, getMonitorCase } from '@/api/app'
  export default {
    data() {
      return {
        companys: [],
        timeout: null,
        conditionstrs: {
          monitorwords: {
            company_name: '',
            company_id: '',
            staffs: '',
            sub_companies: '',
            competitor_select: '',
            competitor_company: '',
            competitor_ids: '',
            industry_names: '',
            industry_ids: '',
            technologies: ''
          },
          excludewords: {
            words: ''
          },
          alarmmode: {
            words: '',
            mediawords: '',
            authors: ''
          }
        },
        conditons: {
          data: {
            userid: this.$store.state.user.user.userId,
            caseid: '', // 若为空表示新建，不是''表示修改
            name: '',
            monitorwords: {
              company_name: '南京中新赛克有限责任有限公司',
              company_id: '',
              staffs: [],
              sub_companies: [],
              competitor_info: [],
              industry_info: [],
              technologies: []
            },
            excludewords: {
              words: []
            },
            alarmmode: {
              words: [],
              mediawords: [],
              authors: []
            }
          }
        }
      }
    },
    mounted() {
      // 根据帅选条件进行查询
      this.$bus.$on('setIndustry', (params) => {
        this.conditionstrs.monitorwords.industry_ids = params.id
        this.conditionstrs.monitorwords.industry_names = params.name
      })
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
      // 选择公司
      selectCompany(item) {
        debugger
        const _this = this
        const data = {
          company_name: item.value
        }
        // 1.组装公司名
        _this.conditionstrs.monitorwords.company_name = item.value
        getCompanySimpleInfoWithName(data).then(res => {
          debugger
          // 2.组装公司id
          _this.conditionstrs.monitorwords.company_id = res.data.id
          // 3. 组装组织人员
          res.data.leading_member.forEach(item => {
            _this.conditionstrs.monitorwords.staffs += item + ';'
          })
          // 4. 组装子机构
          res.data.sub_companies.forEach(item => {
            _this.conditionstrs.monitorwords.sub_companies += item + ';'
          })
        }).catch(err => {
          console.log(err)
        })
      },
      // 选择竞品公司
      selectCompetitor(item) {
        const _this = this
        const data = {
          company_name: item.value
        }
        // 5.组装竞品公司
        _this.conditionstrs.monitorwords.competitor_company += item.value + ';'
        getCompanySimpleInfoWithName(data).then(res => {
          debugger
          // 2.组装竞品公司id
          _this.conditionstrs.monitorwords.competitor_ids += res.data.id + ';'
        }).catch(err => {
          console.log(err)
        })
      },
      setIndustry(params) {
        this.industry_names = params.name
      },
      savemonitor() {
        debugger
        console.log(this.conditionstrs)
        this.conditons.data.monitorwords.company_name = this.conditionstrs.monitorwords.company_name
        this.conditons.data.monitorwords.company_id = this.conditionstrs.monitorwords.company_id + ''
        this.conditons.data.monitorwords.staffs = this.conditionstrs.monitorwords.staffs.split(';').filter(item => item !== '')
        this.conditons.data.monitorwords.sub_companies = this.conditionstrs.monitorwords.sub_companies.split(';').filter(item => item !== '')
        const competitor_ids = this.conditionstrs.monitorwords.competitor_ids.split(';').filter(item => item !== '')
        // 组装竞品公司{id,name}
        const competitor_companys = this.conditionstrs.monitorwords.competitor_company.split(';').filter(item => item !== '')
        const competitor_info = competitor_ids.map((date, i) => ({ id: date, name: competitor_companys[i] }))
        this.conditons.data.monitorwords.competitor_info = competitor_info

        // 组装行业信息
        this.conditons.data.monitorwords.industy_info = {
          id: this.conditionstrs.monitorwords.industry_ids,
          name: this.conditionstrs.monitorwords.industry_names
        }
        this.conditons.data.monitorwords.technologies = this.conditionstrs.monitorwords.technologies.split(';')

        this.conditons.data.excludewords.words = this.conditionstrs.excludewords.words.split(';')

        this.conditons.data.alarmmode.words = this.conditionstrs.alarmmode.words.split(';')
        this.conditons.data.alarmmode.mediawords = this.conditionstrs.alarmmode.mediawords.split(';')
        this.conditons.data.alarmmode.authors = this.conditionstrs.alarmmode.authors.split(';')
        console.log(this.conditons)
        // 保存监控方案
        saveMonitorCase(this.conditons).then(res => {
          debugger
          console.log(res)
          // 保存成功后，往横向滚动区域添加一个方案
          const item = {
            id: 100,
            name: this.conditons.data.name,
            company_id: this.conditionstrs.monitorwords.company_id
          }
          this.$emit('addMonitorCase', item)
        }).catch(err => {
          console.log(err)
        })
      },
      getMonitorCase(caseId) {
        debugger
        if (caseId !== '') {
          const data = {
            case_id: caseId,
            user_id: this.$store.state.user.user.userId
          }
          getMonitorCase(data).then(res => {
            // 根据caseid加载详情
            this.conditons.data.userid = this.$store.state.user.user.userId
            this.conditons.data.caseid = caseId
            this.conditons.data.name = res.data.name

            this.conditons.data.monitorwords.company_name = res.data.monitorwords.company_name
            this.conditons.data.monitorwords.company_id = res.data.monitorwords.company_id + ''
            this.conditons.data.monitorwords.staffs = res.data.monitorwords.staffs
            this.conditons.data.monitorwords.sub_companies = res.data.monitorwords.sub_companies
            this.conditons.data.monitorwords.competitor_info = res.data.monitorwords.competitor_info
            this.conditons.data.monitorwords.industry_info = res.data.monitorwords.industry_info
            this.conditons.data.monitorwords.technologies = res.data.monitorwords.technologies

            this.conditons.data.excludewords.words = res.data.excludewords.words

            this.conditons.data.alarmmode.words = res.data.alarmmode.words
            this.conditons.data.alarmmode.mediawords = res.data.alarmmode.mediawords
            this.conditons.data.alarmmode.authors = res.data.alarmmode.authors

            // 处理字符串显示
            this.conditionstrs.monitorwords.company_name = res.data.monitorwords.company_name
            this.conditionstrs.monitorwords.company_id = res.data.monitorwords.company_id + ''
            this.conditionstrs.monitorwords.staffs = res.data.monitorwords.staffs.join(';')
            this.conditionstrs.monitorwords.sub_companies = res.data.monitorwords.sub_companies.join(';')
            this.conditionstrs.monitorwords.competitor_select = ''

            // 拼接字符串
            this.conditionstrs.monitorwords.competitor_company = ''
            this.conditionstrs.monitorwords.competitor_ids = ''
            res.data.monitorwords.competitor_info.forEach(item => {
              this.conditionstrs.monitorwords.competitor_company += item.name + ';'
              this.conditionstrs.monitorwords.competitor_ids += item.id + ';'
            })

            this.conditionstrs.monitorwords.industry_names = ''
            this.conditionstrs.monitorwords.industry_ids = ''
            res.data.monitorwords.competitor_info.forEach(item => {
              this.conditionstrs.monitorwords.industry_names += item.name + ';'
              this.conditionstrs.monitorwords.industry_ids += item.id + ';'
            })

            this.conditionstrs.monitorwords.technologies = res.data.monitorwords.technologies.join(';')

            this.conditionstrs.excludewords.words = res.data.excludewords.words.join(';')
            this.conditionstrs.alarmmode.words = res.data.alarmmode.words.join(';')
            this.conditionstrs.alarmmode.mediawords = res.data.alarmmode.mediawords.join(';')
            this.conditionstrs.alarmmode.authors = res.data.alarmmode.authors.join(';')
          }).catch(err => {
            console.log(err)
          })
        } else {
          // 新建时清空数据
          this.conditons.data.userid = ''
          this.conditons.data.caseid = ''
          this.conditons.data.name = ''

          this.conditons.data.monitorwords.company_name = ''
          this.conditons.data.monitorwords.company_id = ''
          this.conditons.data.monitorwords.staffs = []
          this.conditons.data.monitorwords.sub_company = []
          this.conditons.data.monitorwords.competitor_info = []
          this.conditons.data.monitorwords.industy_info = []
          this.conditons.data.monitorwords.technologies = []

          this.conditons.data.excludewords.words = []

          this.conditons.data.alarmmode.words = []
          this.conditons.data.alarmmode.mediawords = []
          this.conditons.data.alarmmode.authors = []

          this.conditionstrs.monitorwords.company_name = ''
          this.conditionstrs.monitorwords.company_id = ''
          this.conditionstrs.monitorwords.staffs = ''
          this.conditionstrs.monitorwords.competitor_select = ''
          this.conditionstrs.monitorwords.competitor_company = ''
          this.conditionstrs.monitorwords.competitor_ids = ''
          this.conditionstrs.monitorwords.industry_names = ''
          this.conditionstrs.monitorwords.industry_ids = ''
          this.conditionstrs.monitorwords.technologies = ''

          this.conditionstrs.excludewords.words = ''
          this.conditionstrs.alarmmode.words = ''
          this.conditionstrs.alarmmode.mediawords = ''
          this.conditionstrs.alarmmode.authors = ''
        }
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
