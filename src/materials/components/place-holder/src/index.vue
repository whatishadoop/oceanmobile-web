<template>
  <div :style="{'height': editPlaceHolder.height, 'backgroundColor': editPlaceHolder.bgColor}" :cache="cache" :cid="cid" ctype="place-holder" obj="component" class="placeholder" @dblclick="showEditDialog"></div>
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
        height: '30px',
        backgroundColor: 'red',
        editPlaceHolder: {
          bgColor: 'red',
          height: '30px'
        }
      }
    },
     watch: {
      passCache: {
        handler: function(val) {
          if (val !== '') {
            const passCacheJson = JSON.parse(val)
            this.editPlaceHolder = passCacheJson.editPlaceHolder ? passCacheJson.editPlaceHolder : this.editPlaceHolder
          } else {
            this.editPlaceHolder = {
              bgColor: 'red',
              height: '30px'
            }
          }
        },
        immediate: true,
        deep: true
      }
    },
    mounted: function() {
      // const $this = this
      let bgcolor = ''
      const newObj = {}
      if (this.passCache !== '') {
        const passCacheJson = JSON.parse(this.passCache)
        this.editPlaceHolder = passCacheJson.editPlaceHolder ? passCacheJson.editPlaceHolder : this.editPlaceHolder
      }
      if (IsPC()) {
        $('.placeholder').hover(function() {
          // $this.showEdit = true
          bgcolor = this.style.backgroundColor
          this.style.backgroundColor = '#000'
          this.style.opacity = 0.5
          this.style.cursor = 'pointer'
        }, function() {
          // $this.showEdit = false
          this.style.backgroundColor = bgcolor
          this.style.opacity = 1
        })
      }
      this.$bus.$on('on-editPlaceHolder', res => {
        this.editPlaceHolder = res
        newObj.editPlaceHolder = this.editPlaceHolder
        this.cache = JSON.stringify(newObj)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      showEditDialog() {
        this.$bus.$emit('on-attraConfig', this, 'placehodler-config')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
