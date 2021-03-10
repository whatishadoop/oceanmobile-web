<template>
  <div :cache="cache" :cid="cid" ctype="personel-detail" obj="component" class="personeldetail">
    <div class="avatarDiv">
      <div class="content">
        <div class="figture">
          <img :src="imgurl_head" alt="">
        </div>
        <div class="details">
          <div class="nameJob">
            <span>罗翰定</span>
            <span></span>
          </div>
          <div class="phoneNum">
            <span>19082317723</span>
          </div>
        </div>
        <div class="rightarrow">果农</div>
      </div>
    </div>
  </div>
</template>

<script>
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
        imgurl_head: require('./images/img_head.svg'),
        imgurl_man: require('./images/icon_man.svg'),
        listItem: [{
          name: 'IMSI',
          item: '460006234567890'
        }, {
          name: 'MSISDN',
          item: '647231647328'
        }, {
          name: 'IMEI',
          item: '789431794328'
        }]
      }
    },
    mounted: function() {

    },
    destroyed() {
      console.log('删除组件!!!!!!!!!!!!!')
    },
    methods: {

    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "./main.scss";
</style>
