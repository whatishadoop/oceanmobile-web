<template>
  <div :style="{'backgroundColor': editLeftarrowTitle.bgColor}" :cache="cache" :cid="cid" ctype="leftarrow-title" obj="component" class="leftarrowtitle" @dblclick="showEditDialog">
    {{editLeftarrowTitle.title}}
    <div class="clickBtn" @click="hideDetail"></div>
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
        editLeftarrowTitle: {
          bgColor: 'white',
          title: '标题'
        }
      }
    },
    watch: {
      passCache: {
        handler: function(val) {
          if (val !== '') {
            const passCacheJson = JSON.parse(val)
            this.editLeftarrowTitle = passCacheJson.editLeftarrowTitle ? passCacheJson.editLeftarrowTitle : this.editLeftarrowTitle
          } else {
            this.editLeftarrowTitle = {
              bgColor: 'white',
              title: '标题'
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
      if (this.passCache !== '') {
        const passCacheJson = JSON.parse(this.passCache)
        this.editLeftarrowTitle = passCacheJson.editLeftarrowTitle ? passCacheJson.editLeftarrowTitle : this.editLeftarrowTitle
      }
      if (IsPC()) {
        $('.leftarrowtitle').hover(function() {
          bgcolor = this.style.backgroundColor
          this.style.backgroundColor = '#000'
          this.style.opacity = 0.5
          this.style.cursor = 'pointer'
        }, function() {
          this.style.backgroundColor = bgcolor
          this.style.opacity = 1
        })
      }
      this.$bus.$on('on-editLeftarrowTitle', res => {
        this.editLeftarrowTitle = res
        newObj.editLeftarrowTitle = this.editLeftarrowTitle
        this.cache = JSON.stringify(newObj)
      })
    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {
      showEditDialog() {
        this.$bus.$emit('on-attraConfig', this, 'leftarrowtitle-config')
      },
      hideDetail() {
        this.$bus.$emit('on-hideSecondaryPage')
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
