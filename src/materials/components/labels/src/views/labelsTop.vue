<template>
  <div :cache="cache" :cid="cid" obj="component" ctype="labelsTop" class="myLabel">
     <div>
        特定VPN
     </div>
     <div>
        专题描述
     </div>
     <div>
       <el-input :autosize="{minRows:2}" type="textarea" placeholder="请输入内容"></el-input>
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
<style lang="scss" scoped></style>
