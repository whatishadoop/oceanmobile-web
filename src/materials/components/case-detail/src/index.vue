<template>
  <div class="casedetail">
    <div class="content" style="position: relative; top: 0px; width: 100%;height: 100%;bottom: 0px;">
      <iframe
        :src="url"
        style="height: 100%;width:100%;
        frameborder=no"
        frameborder="no"
        border="0"
        marginWidth="0"
        marginHeight="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml'
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
  .casedetail{
    width: 100%;
    height: 100%;
    font-family: NotoSansHans-Regular;
    padding: 0px;
    background: #ffffff;
    h1{
      font-size: 20px;
      @include zxsk-font-color($font-color-1,$font-color-5);
      line-height: 28px;
      padding: 14px 0 10px 0;
    }
    .casestatusbox{
      display: flex;
      font-size: 12px;
      @include zxsk-font-color($font-color-1,$font-color-5);
      line-height: 17px;
      .status{
        color: #EF7340;
      }
    }
    p{
      font-size: 14px;
      color: #333;
      line-height: 30px;
      padding: 8px 0 10px 0;
      text-align: justify;
    }
    h2{
      font-size: 16px;
      color:#333333;
      line-height: 22px;
      font-weight: bold;
      margin-bottom: 2px;
    }
    ul{
      list-style: none;
      li{
        font-size: 14px;
        line-height: 27px;
        padding: 11px 10px 10px 10px;
        margin-top: 10px;
        border-radius: 2px;
        box-shadow: 0 1px 4px #eeeeee;
        .content{
          display: flex;
          justify-content: space-between;
          img{
            width:27px;
            height:27px;
          }
          .number{
            display:  inline-block;
            flex: 3;
            text-align: left;
            padding-left: 12px;
          }
          .place{
            flex:2;
            text-align: right;
            color:#999999;
          }
        }
      }
    }
    .btnbox{
      margin-top: 10px;
      .btncontent{
        display: flex;
        justify-content: space-between;
        input{
          width: 108px;
          height: 40px;
          border-radius: 20px;
          border: none;
          outline: none;
          background: #5584ff;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
</style>
