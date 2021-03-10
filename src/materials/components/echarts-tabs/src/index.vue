<template>
  <div :cache="cache" :cid="cid" ctype="echarts-tabs" obj="component" class="echartstabs">
    <div class="tabs">
      <div class="tab">
        <div v-for="(value,index) in tabsItems" :key="index" class="tab-item">
          <span @click="getComponentView(value.tabId, $event)">{{value.name}}</span>
        </div>
      </div>
    </div>
    <is-components :id="id"></is-components>
  </div>
</template>

<script type="text/ecmascript-6">
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
        id: 97,
        tabsItems: [{
          name: '统计',
          tabId: 97
        }, {
          name: '系统',
          tabId: 98
        }, {
          name: '专题',
          tabId: 99
        }]
      }
    },
    mounted: function() {
      $('.echartstabs .tab-item:first-child span').addClass('active')
    },
    methods: {
      getComponentView(tabId, event) {
        this.id = tabId
        $('.echartstabs .tab-item span').removeClass('active')
        event.srcElement.classList.add('active')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
