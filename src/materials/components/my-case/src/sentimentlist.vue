<template>
  <div>
    <div class="situationcase-wrapper">
      <div class="situationcase-title">
        <el-tag type="info" class="item">全部 {{totalPage}}</el-tag>
        <el-tag type="info" class="item">预警 0</el-tag>
        <el-tag type="info" class="item">收藏 0</el-tag>
        <el-tag type="info" class="item" @click="showCondition" >帅选 <i class="el-icon-search"></i></el-tag>
      </div>
      <ul class="case">
        <li
          v-for="(item,index) in contentItems"
          :key="index"
          class="case-item"
          style="height: 160px;">
          <div class="content">
            <div class="name">{{item.title}}</div>
            <div class="motion-type">
              <el-tag style="margin-right: 6px;" size="mini">{{item.text_sentiment}}</el-tag>
              <el-tag v-if="item.important_events.length > 0" type="danger" style="margin-right: 6px;" size="mini">{{item.important_events[0]}}</el-tag>
              <el-tag v-if="item.important_events.length > 1" type="danger" style="margin-right: 6px;" size="mini">{{item.important_events[1]}}</el-tag>
              <el-tag v-show="item.match_key_words.length > 0" type="success" style="margin-right: 6px;" size="mini">{{item.match_key_words[0]}}</el-tag>
              <el-tag v-show="item.match_key_words.length > 1" type="success" style="margin-right: 6px;" size="mini">{{item.match_key_words[1]}}</el-tag>
            </div>
            <div class="text-wrapper" @click="showDetails(item.url)">
              <span class="text">{{item.content}}</span>
              <div class="detail">
                <i class="el-icon-arrow-right" style="font-size: 14px;"></i>
              </div>
            </div>
            <div class="desct">
              <span class="source">{{item.website_name}}  吴云芬</span>
              <span class="date">{{item.date}}</span>
            </div>
            <div class="actions">
              <div class="item"><span><i class="el-icon-delete"></i> 忽略</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 预警</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 收藏</span></div>
              <div class="item"><span><i class="el-icon-delete"></i> 更多</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getDataDetailByCondition } from '@/api/app'
  import { getTimestamp } from '@/utils/date'
  export default {
    data() {
      return {
        conditions: {
          data: {
            page: 1,
            rows: 10,
            user_id: this.$store.state.user.user.userId,
            conditions: {
              case_id: '8164',
              type_full_alarm_favorite: '全部',
              date: {
                start_date: 1,  // 测试
                end_date: Math.floor(new Date().getTime() / 1000)
              },
              media_type: '全部',
              relevant_or_precise: '全部',
              is_contain_important_events: 0,
              sentiment_type: '全部',
              is_repeat: 1,
              time_order_type: 'desc'
            }
          }
        },
        contentItems: [],
        totalPage: 0
      }
    },
    created() {
      this.$nextTick(() => {
        debugger
        this.getDataDetailByCondition()
      })
    },
    mounted() {
      debugger
      // 根据帅选条件进行查询
      this.$bus.$on('updateDataByConditons', (conditonObj) => {
        this.conditions.date.start_date = conditonObj.date.start_date
        this.conditions.date.end_date = conditonObj.date.start_date.date.end_date
        this.conditions.media_type = conditonObj.media_type
        this.conditions.relevant_or_precise = conditonObj.relevant_or_precise
        this.conditions.is_contain_important_events = conditonObj.is_contain_important_events
        this.conditions.sentiment_type = conditonObj.sentiment_type
        this.conditions.is_repeat = conditonObj.is_repeat
        this.getDataDetailByCondition()
      })
    },
    methods: {
      getDataDetailByCondition() {
        // 初始化默认查询
        const data = {
          data: this.conditions.data
        }
        getDataDetailByCondition(data).then(res => {
          debugger
          // for(var i = 0; i <res.data.rows. length; i++){
          //   this.contentItems.push(res.data.rows[i])
          // }
          this.contentItems = res.data.rows
          this.totalPage = res.data.filter_total
          console.log(res)
        }).catch(res => {
          console.log(res)
        })
      },
      showDetails(url) {
        const params = {
          url: url
        }
        this.$emit('showdetail', 'sentimenturl', params)
      },
      showCondition() {
        this.$emit('showdetail', 'sentimentcondition')
      },
      updateDataDetailByCondition() {
        debugger
        // 页码加1
        this.conditions.data.page += 1
        // // 如果加1后的页码乘以每页展示条数大于等于总条数
        // if (this.contentItems.length === this.totalPage) {
        //   return
        // }
        // 初始化默认查询
        const data = {
          data: this.conditions.data
        }
        // 初始化默认查询
        getDataDetailByCondition(data).then(res => {
          debugger
          // 往数组的末尾压入查询出来的数据
          this.contentItems = [...this.contentItems, ...res.data.rows]
          console.log(this.contentItems)
          this.$emit('refreshSentiment')
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.situationcase-wrapper {
    .situationcase-title {
      padding-left: 20px;
      padding-right: 16px;
      display: flex;
      .item {
        margin-right: 10px;
        text-align: center;
        flex: 1;
        &:last-child {
          margin-right: 0px;
          text-align: center;
        }
      }
      .title {
        font-size: 20px;
        line-height: 28px;
        color: #333333;
      }
      .subtitle {
        margin-left: 8px;
        font-size: 15px;
        line-height: 21px;
      }
    }

    .case {
      margin: 0;
      padding-left: 20px;
      padding-right: 16px;

      .case-item {
        display: flex;
        height: 74px;
        margin: 14px 0px 14px 0px;
        list-style: none;
        overflow: hidden;
        @include border-1px(rgba(7, 17, 27, 0.1));

        .icon {
          display: inline-block;
          vertical-align: top;
          margin-top: 10px;
          margin-right: 9px;
          width: 10px;
          height: 10px;
          /*背景图片设置必须是块元素*/
          background-size: 10px 10px;
          background-repeat: no-repeat;
        }

        .content {
          flex: 1;
          margin-top: 0;

          .name {
            margin: 2px 0 6px 0;
            left: 19px;
            top: 139px;
            width: 180px;
            height: 20px;
            color: rgba(16, 16, 16, 100);
            font-size: 14px;
            text-align: left;
            font-family: PingFangSC-bold;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .motion-type {
            display: flex;
            margin-bottom: 10px;
          }
          .text-wrapper {
            position: relative;
            height: 44px;
            .text {
              color: #828283;
              font-size: 12px;
              line-height: 16px;
              text-align: left;
              font-family: PingFangSC-regular;
              padding-right: 28px;
              /*多行文本溢出*/
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              &:last-child {
                margin-bottom: 13px;
              }
            }
            .detail {
              position: absolute;
              top: 18px;
              right: 1px;
            }
          }
          .desc {
            margin-bottom: 8px;
            margin-top: 11px;

            .count {
              /*margin-right: 59px;*/
              line-height: 14px;
              font-size: 14px;
              color: #161619;
              float: left;
            }

            .date {
              line-height: 18px;
              font-size: 13px;
              color: #000000;
              float: right;
            }
          }
          .desct {
            height: 30px;
            line-height: 30px;
            .detail {
              display: inline-block;
              float: right;
            }
            .source {
              width: 100px;
              height: 17px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
            .date {
              width: 130px;
              height: 17px;
              margin-left: 2px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
          }
          .actions {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;
            padding-left: 10px;
            .item {
              flex: 1 0 70px;
              font-size: 14px;
              text-align: left;
              &:after {
                content: " ";
                border-left: 1px solid rgba(174, 174, 178, 100);;
                margin-left: 12px;
              }
              &:last-child {
                &:after{
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
