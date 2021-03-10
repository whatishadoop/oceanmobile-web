<template>
  <div :cache="cache" :cid="cid" ctype="tabs-list" obj="component" class="tabslist">
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
        id: 79,
        tabsItems: [{
          name: '特定',
          tabId: 79
        }, {
          name: '地区',
          tabId: 79
        }, {
          name: '特征',
          tabId: 79
        }, {
          name: '筛选',
          tabId: 84
        }]
      }
    },
    mounted: function() {
      $('.tabslist .tab-item:first-child span').addClass('active')
    },
    methods: {
      getComponentView(tabId, event) {
        this.id = tabId
        $('.tabslist .tab-item span').removeClass('active')
        event.srcElement.classList.add('active')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
