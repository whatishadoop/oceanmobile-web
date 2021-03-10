<template>
  <div :cache="cache" :cid="cid" ctype="my-component" obj="component" class="myinformation">
    <avatar></avatar>
    <personel-info :edit-personelinfo="editPersonelInfo"></personel-info>
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
        cid: 'C' + 0,
        cache: '',
        showPersonelinfo: true, // 是否展示个人信息组件
        editPersonelInfo: {
          bgColor: '',
          dataSource: 'personelInfo'
        } // 编辑个人信息组件数据
      }
    },
    mounted: function() {
      if (this.passCache !== '') {
        const passCacheJson = JSON.parse(this.passCache)
        this.showPersonelinfo = passCacheJson.showPersonelinfo ? passCacheJson.showPersonelinfo : this.showPersonelinfo
        this.editPersonelInfo = passCacheJson.editPersonelInfo ? passCacheJson.editPersonelInfo : this.editPersonelInfo
      }
      const newObj = {}
      this.$bus.$on('on-showPersonelinfo', res => {
        this.showPersonelinfo = res
        newObj.showPersonelinfo = this.showPersonelinfo
        this.cache = JSON.stringify(newObj)
      })

      this.$bus.$on('on-editPersonelInfo', res => {
        this.editPersonelInfo = res
        newObj.editPersonelInfo = this.editPersonelInfo
        this.cache = JSON.stringify(newObj)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/mlogin' })
        }).catch(() => {
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
