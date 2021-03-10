<template>
  <div :cache="cache" :cid="cid" obj="component" ctype="labels" class="myLabel">
   <div class="content">
     <div class="title">
        机器档案
     </div>
     <div class="item">
        177
     </div>
   </div>
   <div class="content">
    <div class="title">
        APP档案
     </div>
     <div class="item">
        4
     </div>
   </div>
  </div>
</template>

<script>
import { IsPC } from '@/utils/index'
export default {
  components: {},
  props: {},
  data() {
    return {
        cid: 'C' + this._uid,
        cache: '',
        showEdit: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
      const _this = this
      if (IsPC()) {
        $('.myLabel').hover(function() {
          _this.showEdit = true
        }, function() {
          _this.showEdit = false
        })
      }
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.myLabel{
  display: flex;
  justify-content: space-between;
  .content{
    background-color: aliceblue;
    width: 49%;
    height:50px;
    .title{
      height: 25px;
      opacity: 0.65;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      text-align: left;
      margin-left: 15px;
      margin-bottom: 0;
    }
    .item{
      height: 25px;
      text-align: left;
      font-size: 22px;
      color: #5584FF;
      letter-spacing: 0;
      margin-top: 0;
      line-height: 22px;
      margin-left: 15px;
    }
  }
}
</style>
