<template>
  <div class="avatar-container">
      <div class="avatarDiv">
        <div class="content">
          <div class="figture">
            <img src="../images/head.svg" alt="">
          </div>
          <div class="details">
            <div class="nameJob">
              <span>手机账户</span>
            </div>
            <div class="phoneNum">
              <span>{{phoneNum}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        phoneNum: this.$store.state.user.user.phoneNumber
      }
    },
    methods: {
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .avatar-container{
    /*background-color: #fff;*/
    @include zxsk_bg($color-bg-1,$color-bg-2);
    .avatarDiv{
      height: 105px;
      padding-top: 15px;
      .content{
        height: 60px;
        margin: 0 0 15px;
        .figture{
          width: 60px;
          height: 60px;
          margin: 0 16px;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .details{
          width: 100px;
          height: 50px;
          margin: 5px 0;
          float: left;
          .nameJob{
            height: 25px;
            line-height: 25px;
            span:nth-child(1){
              font-family: NotoSansHans-Regular;
              font-size: 17px;
              @include zxsk-font-color($font-color-1,$font-color-2);
              letter-spacing: 0.27px;
              text-align: left;
            }
            span:nth-child(2){
              padding: 6px 10px;
              background: url("../images/jobbgi.svg") no-repeat center center;
              color: #fff;
            }
          }
          .phoneNum{
            height: 25px;
            line-height: 25px;
            font-family: NotoSansHans-Regular;
            font-size: 14px;
            @include zxsk-font-color($font-color-3,$font-color-4);
            letter-spacing: 0.23px;
            text-align: left;
          }
        }
        .rightarrow{
          float: right;
          margin: 25px 16px;
          width: 8px;
          height: 13px;
          cursor: pointer;
          background: url("../images/rightarrow.svg") no-repeat left top;
        }
      }
    }
    .informationDiv{
      height: 110px;
      ul{
        height: 50px;
        list-style: none;
        display: flex;
        margin: 20px 10px 40px;
        li{
          flex: 1;
          div{
            height: 25px;
            text-align: center;
            line-height: 25px;
          }
          .detailsNum{
            font-family: NotoSansHans-Regular;
            font-size: 22px;
            @include zxsk-font-color($font-color-1,$font-color-2);
            letter-spacing: 0;
            text-align: center;
          }
          .detailsName{
            font-family: NotoSansHans-Regular;
            font-size: 13px;
            @include zxsk-font-color($font-color-3,$font-color-4);
            text-align: center;
          }
        }
      }
    }
  }
</style>
