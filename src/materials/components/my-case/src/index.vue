<template>
  <div :cache="cache" :cid="cid" ctype="my-case" obj="component" class="mycase">
    <div class="head">我的案件</div>
    <div class="tabs">
      <div class="tab">
        <div v-for="(value,index) in listItem" :key="index" class="tab-item">
          <span @click="getComponentView(index, $event)">{{value.name}}</span>
        </div>
      </div>
      <!--<keep-alive v-for="(v,i) in componentView" :key="i">
        <div>
          <component :is="v" :pass-cache="sss" obj="subComponent"></component>
          <component :is="v" :pass-cache="sss" obj="subComponent"></component>
        </div>
      </keep-alive>-->
    </div>
    <div class="compDom">
      <!--<is-components :id="id"></is-components>-->
      <div class="tab1">
        <ul>
          <li v-for="(value, index) in forAcceptData" :key="index" @click="showDetails">
            <div class="header">
              <span>案件号&nbsp;&nbsp;9A757DGJK34V5JDG</span>
              <span>{{value.state}}</span>
            </div>
            <div class="police">湖南省公安厅</div>
            <div class="footer">张三山&nbsp;&nbsp;13166568687</div>
            <div class="operation">
              <span v-for="(v, i) in value.operation" :key="i">{{v}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      passCache:
        {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        cid: 'C' + 0,
        cache: '',
        id: 47,
        listItem: [{
          name: '待接受'
        }, {
          name: '执行中'
        }, {
          name: '挂起'
        }, {
          name: '已退回'
        }, {
          name: '已结案'
        }],
        forAcceptData: [{
          state: '待接受',
          operation: ['退回', '处理']
        }, {
          state: '待接受',
          operation: ['退回', '处理']
        }, {
          state: '待接受',
          operation: ['退回', '处理']
        }]
      }
    },
    mounted: function() {
      $('.mycase .tab-item:first-child span').addClass('active')
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      getComponentView(index, event) {
        if (index === 0) {
          this.forAcceptData = [{
            state: '待接受',
            operation: ['退回', '处理']
          }, {
            state: '待接受',
            operation: ['退回', '处理']
          }, {
            state: '待接受',
            operation: ['退回', '处理']
          }]
        } else if (index === 1) {
          this.forAcceptData = [{
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }, {
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }, {
            state: '执行中',
            operation: ['挂起', '退回', '结案']
          }]
        } else if (index === 2) {
          this.forAcceptData = [{
            state: '挂起',
            operation: ['退回', '结案']
          }, {
            state: '挂起',
            operation: ['退回', '结案']
          }, {
            state: '挂起',
            operation: ['退回', '结案']
          }]
        } else if (index === 3) {
          this.forAcceptData = [{
            state: '已退回',
            operation: []
          }, {
            state: '已退回',
            operation: []
          }, {
            state: '已退回',
            operation: []
          }]
        } else if (index === 4) {
          this.forAcceptData = [{
            state: '已结案',
            operation: []
          }, {
            state: '已结案',
            operation: []
          }, {
            state: '已结案',
            operation: []
          }]
        }
        $('.mycase .tab-item span').removeClass('active')
        event.srcElement.classList.add('active')
      },
      showDetails() {
        this.$bus.$emit('on-drawers', 85, true)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
