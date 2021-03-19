<template>
  <div class="myinformation">
    <div class="head">个人中心</div>
    <avatar></avatar>
    <personel-info></personel-info>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
  import avatar from './modules/avatar'
  import personelInfo from './modules/personelinfo'
  export default {
    components: { avatar, personelInfo },
    props: {
      passCache:
        {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        showPersonelinfo: true // 是否展示个人信息组件
      }
    },
    mounted: function() {
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' })
        }).catch(() => {
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .myinformation{
    @include zxsk_bg($color-bg-1,$color-bg-2);
    .head{
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background-color: #5584FF;
      letter-spacing: 0.29px;
      text-align: center;
    }
    button{
      width: 342px;
      height: 47px;
      background: #5584FF;
      border-radius: 23.5px;
      margin: 44.5px calc(50% - 171px) 106px;
      border: 0;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
    }
    span{
      position: absolute;
      right: 10px;
      bottom: 10px;
      opacity: 0.3;
      cursor: pointer;
    }
    &:hover span{
      opacity: 1;
    }
  }
</style>
