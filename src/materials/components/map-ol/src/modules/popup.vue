<template>
  <div class="avatar-container">
      <div class="informationDiv">
        <ul>
          <li v-for="(value,index) in details" :key="index">
            <div class="detailsNum">{{value.num}}</div>
            <div class="detailsName">{{value.name}}</div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        details: [
          {
            'name': '待接受',
            'num': 19000
          },
          {
            'name': '执行中',
            'num': 100
          },
          {
            'name': '挂起',
            'num': 120
          },
          {
            'name': '已退回',
            'num': 2
          },
          {
            'name': '已结案',
            'num': 2000
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .avatar-container{
    height: 200px;
    @include zxsk_bg($color-bg-1,$color-bg-2);
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
