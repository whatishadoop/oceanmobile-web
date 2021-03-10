<template>
  <div :cache="cache" :cid="cid" ctype="btn-small" obj="component" class="btnsmall" @dblclick="showEditDialog">
    <button :style="{'backgroundColor': editBtnSmall.bgColor, 'border': editBtnSmall.border,'color': editBtnSmall.color}">{{editBtnSmall.title}}</button>
  </div>
</template>

<script>
  import { IsPC } from '@/utils/index'
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
        editBtnSmall: {
          bgColor: '#5584FF ',
          title: '确定',
          border: '1px solid #5584FF',
          color: '#333333'
        }
      }
    },
    watch: {
      passCache: {
        handler: function(val) {
          if (val !== '') {
            const passCacheJson = JSON.parse(val)
            this.editBtnSmall = passCacheJson.editBtnSmall ? passCacheJson.editBtnSmall : this.editBtnSmall
          } else {
            this.editBtnSmall = {
              bgColor: '#5584FF',
              title: '确定',
              border: '1px solid #5584FF',
              color: '#333333'
            }
          }
        },
        immediate: true,
        deep: true
      }
    },
    mounted: function() {
      let bgcolor = ''
      const newObj = {}
      if (IsPC()) {
        $('.btnsmall').hover(function() {
          bgcolor = this.style.backgroundColor
          this.style.backgroundColor = '#000'
          this.style.opacity = 0.5
          this.style.cursor = 'pointer'
        }, function() {
          this.style.backgroundColor = bgcolor
          this.style.opacity = 1
        })
      }
      this.$bus.$on('on-editBtnSmall', res => {
        this.editBtnSmall = res
        newObj.editBtnSmall = this.editBtnSmall
        this.cache = JSON.stringify(newObj)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      showEditDialog() {
        this.$bus.$emit('on-attraConfig', this, 'btnsmall-config')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
