<template>
  <div>
    <div class="home">
      <div class="comp">
        <router-view keep-alive></router-view>
      </div>
      <div class="tabs">
        <div class="tab">
          <div class="tab-item" @click="changeView('my-case')">
            <div><svg-icon :icon-class="icon_qtts" class="icon"/></div>
            <p class="name">监控</p>
          </div>
          <div class="tab-item">
            <div><svg-icon :icon-class="icon_case" class="icon"/></div>
            <p class="name">报告</p>
          </div>
          <div class="tab-item" @click="changeView('my-component')">
            <div><svg-icon :icon-class="icon_me" class="icon"/></div>
            <p class="name">我的</p>
          </div>
        </div>
      </div>
      <!--右侧弹出框-->
      <m-drawers></m-drawers>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: 47,
        name: 'my-case',
        icon_home: 'icon_home_new_pre',
        icon_qtts: 'icon_map_new_normal',
        icon_case: 'icon_case_new_normal',
        icon_me: 'icon_me_new_normal'
      }
    },
    mounted() {
      this.changeView('my-case')
    },
    methods: {
      changeView(val) {
        this.name = val
        if (val === 'home-page') {
          this.icon_home = 'icon_home_new_pre'
          this.icon_qtts = 'icon_map_new_normal'
          this.icon_case = 'icon_case_new_normal'
          this.icon_me = 'icon_me_new_normal'
        } else if (val === 'my-case') {
          this.$router.push({ name: 'my-case' })
          this.icon_home = 'icon_home_new_normal'
          this.icon_qtts = 'icon_map_new_pre'
          this.icon_case = 'icon_case_new_normal'
          this.icon_me = 'icon_me_new_normal'
        } else if (val === 'sentimentlog') {
          this.$router.push({ name: 'sentimentlog' })
          this.icon_home = 'icon_home_new_normal'
          this.icon_qtts = 'icon_map_new_normal'
          this.icon_case = 'icon_case_new_pre'
          this.icon_me = 'icon_me_new_normal'
        } else if (val === 'my-component') {
          this.$router.push({ name: 'my-component' })
          this.icon_home = 'icon_home_new_normal'
          this.icon_qtts = 'icon_map_new_normal'
          this.icon_case = 'icon_case_new_normal'
          this.icon_me = 'icon_me_new_pre'
        }
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .home {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 667px;

    .comp{
      height: calc(100vh - 58px);
      overflow: hidden;
    }

    .tabs {
      position: fixed;
      left: 0px;
      bottom: 0px;
      z-index: 100;
      width: 100%;
      line-height: 58px;
      height: 58px;
      text-align: center;
      overflow: hidden;
      background: #F2F3F7;
      .tab {
        display: flex;
        width: 100%;
        height: 55px;
        .tab-item {
          flex: 1;
          text-align: center;
          font-size: 14px;

          .icon {
            width: 30px;
            height: 30px;
            margin-top: 0px;
          }

          .name {
            margin-top: -42px;
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
