<template>
  <div class="casedetail">
    <div class="content" style="position: relative; top: 0px; width: 100%;height: 100%;bottom: 0px;">
      <iframe :src="url" style="height: 100%;width:100%; frameborder=no" frameborder="no" border="0" marginWidth=0
              marginHeight=0></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://www.baidu.com/'
      }
    },
    mounted: function() {

    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {

    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
