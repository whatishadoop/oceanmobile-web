<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.initTheme()
  },
  methods: {
    initTheme: function() {
      localStorage.setItem('theme', 'light')
      this.$store.state.theme = 'light'
      window.document.documentElement.setAttribute('data-theme', 'light')
    }
  }
}
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  /*全局引入字体文件*/
  /*@import "./common/font/font.css";*/
</style>
