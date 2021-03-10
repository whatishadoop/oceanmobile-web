<template>
  <div>
    <div class="goods">
      <div ref="menuWrapper" class="menu-wrapper">
        <ul>
          <li class="menu-item current">
             <span class="text">
               <span class="icon"></span>精选热菜
             </span>
          </li>
          <li v-for="(value,index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="menu-item">
            <span class="text">
               <span class="icon"></span>精选热菜
             </span>
          </li>
        </ul>
      </div>
      <div ref="foodsWrapper" class="foods-wrapper">
        <ul>
          <li v-for="(value,index) in [1,2,3,4,5]" :key="index" class="food-list">
            <h1 class="title">单人特色套餐</h1>
            <ul>
              <li v-for="(value,index) in [1,2,3,4,5]" :key="index" class="food-item">
                <div>
                  <div class="icon">
                    <img width="57" height="57" src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114"/>
                  </div>
                </div>
                <div class="content">
                  <div class="name"></div>
                  <div class="desc"></div>
                  <div class="extra">
                    <span class="count">月售{{1124 + value}}份</span><span>好评率100%</span>
                  </div>
                  <div class="price">
                    <span class="now">24</span><span class="old">28</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })

        this.goodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          propTypes: 3
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  ul {
    li {
      list-style: none;
    }
  }
  .goods {
    position: relative;
    top: 0px;
    bottom: 46px;
    width: 100%;
    height: 450px;
    display: flex;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        display: table;
        height: 54px;
        width: 80px;
        padding: 0 12px;
        line-height: 14px;
        list-style: none;
        &.current {
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #fff;
          font-weight: 700;
          .text {
            @include border-none();
          }
        }
        .text {
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          font-size: 12px;
          @include border-1px(rgba(7, 17, 27, 0.1));
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            @include bg-image('decrease_3'); /*背景图片设置必须是块元素*/
            background-size: 12px 12px;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: rgb(147, 153, 159);
        background: #f3f5f7;
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        list-style: none;
        @include border-1px(rgba(7, 17, 27, 0.1));
        &:last-child {
          @include border-none();
          margin-bottom: 0;
          .icon {
            flex: 0 0 57px;
            margin-right: 10px;
          }
        }
        .content {
          flex: 1;
          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .desc, .extra {
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .desc {
            line-height: 12px;
            margin-bottom: 8px;
          }
          .extra {
            .count{
              margin-right: 12px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
        }
      }
    }
  }
</style>
