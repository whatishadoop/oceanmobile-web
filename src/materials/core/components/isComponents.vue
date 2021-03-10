<template>
  <div>
    <div v-for="(v,i) in componentView" :key="i">
      <component :is="v.name" :pass-cache="v.passCache" obj="subComponent"></component>
    </div>
  </div>
</template>

<script>
  import { get } from '@/api/appPage'
  import { htmlReg } from '@/utils/index'
  export default {
    name: 'IsComponents',
    props: {
      id: {
        type: Number,
        required: true,
        default: 0
      }
    },
    data() {
      return {
        cid: 'C' + 0,
        cache: '',
        componentView: []
      }
    },
    watch: {
      id: {
        handler: function() {
          this.getData()
        },
        immediate: true
      }
    },
    mounted() {
      // const $this = this
      // $this.getData()
    },
    methods: {
      getData() {
        const $this = this
        get({ id: this.id }).then(res => {
          $this.componentView = htmlReg(res.contentParse)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
</style>
