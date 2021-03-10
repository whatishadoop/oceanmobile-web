<template>
  <div :cache="cache" :cid="cid" ctype="btn" obj="component" class="btn" @dblclick="showEditDialog">
    <button :style="{'backgroundColor': editBtn.bgColor}">{{editBtn.title}}</button>
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
        editBtn: {
          bgColor: '#5584FF',
          title: '确定'
        }
      }
    },
    watch: {
      passCache: {
        handler: function(val) {
          if (val !== '') {
            const passCacheJson = JSON.parse(val)
            this.editBtn = passCacheJson.editBtn ? passCacheJson.editBtn : this.editBtn
          } else {
            this.editBtn = {
              bgColor: '#5584FF',
              title: '确定'
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
        $('.btn').hover(function() {
          bgcolor = this.style.backgroundColor
          this.style.backgroundColor = '#000'
          this.style.opacity = 0.5
          this.style.cursor = 'pointer'
        }, function() {
          this.style.backgroundColor = bgcolor
          this.style.opacity = 1
        })
      }
      this.$bus.$on('on-editBtnTitle', res => {
        this.editBtn = res
        newObj.editBtn = this.editBtn
        this.cache = JSON.stringify(newObj)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      showEditDialog() {
        this.$bus.$emit('on-attraConfig', this, 'btn-config')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
