<template>
  <div>
    <div class="case-wrapper">
      <div class="name">
        <div class="lable">方案名称:</div>
        <div class="input-wrapper">
          <el-input v-model="input" placeholder="请选择方案名称"/>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">企业名称:</div>
          <div class="input-wrapper">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              style="width:100%"
              @select="handleSelect"
            ></el-autocomplete>
          </div>
        </div>
        <div class="name">
          <div class="lable">主要成员:</div>
          <div class="input-wrapper">
            <el-input v-model="input" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">分支机构:</div>
          <div class="input-wrapper">
            <el-input v-model="input" :readonly="true"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">竞品公司:</div>
          <div class="input-wrapper">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              style="width:100%"
              @select="handleSelect"
            ></el-autocomplete>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">所属行业:</div>
          <div class="input-wrapper" @click="showIndusryInfo">
            <el-input v-model="input" :readonly="true" placeholder="请选择所属行业"/>
          </div>
          <i class="el-icon-arrow-right" style="font-size: 14px"></i>
        </div>
        <div class="name">
          <div class="lable">技术方案:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入技术方案"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">检测词设置</div>
        <div class="name">
          <div class="lable">排除词:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
      </div>
      <div class="monitor-word">
        <div class="title">预警方式</div>
        <div class="name">
          <div class="lable">预警词:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">媒体预警:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割"/>
          </div>
        </div>
        <div class="name">
          <div class="lable">作者预警:</div>
          <div class="input-wrapper">
            <el-input v-model="input" placeholder="请输入, 支持批量添加用、分割" @blur="gotoView" @focus="gotoView"/>
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
  export default {
    data() {
      return {
        input: '',
        restaurants: [],
        state: '',
        timeout: null
      }
    },
    mounted() {
      this.restaurants = this.loadAll()
    },
    methods: {
      showCompanyName() {
        this.$bus.$emit('on-drawers', '企业名称', 'competitive-company', true)
      },
      showCompetitiveCompany() {
        this.$bus.$emit('on-drawers', '竞品公司', 'competitive-company', true)
      },
      showIndusryInfo() {
        this.$bus.$emit('on-drawers', '所属行业', 'industry-info', true)
      },
      loadAll() {
        return [
          { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
          { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
          { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
          { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
          { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
          { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
          { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
          { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
          { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
          { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
          { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
          { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
          { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
          { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
          { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
          { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
          { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
          { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
          { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
          { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
          { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
          { 'value': '钱记', 'address': '上海市长宁区天山西路' },
          { 'value': '壹杯加', 'address': '上海市长宁区通协路' },
          { 'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
          { 'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室' },
          { 'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' }
        ]
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect(item) {
        console.log(item)
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
