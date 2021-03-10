<template>
    <div>
      <div>seller</div>
      <span>{{num}}</span>
      <button @click="add">测试动态缓存组件</button>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          num: 0
        }
      },
      methods: {
        add() {
          this.num++
        }
      }
    }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>

</style>
