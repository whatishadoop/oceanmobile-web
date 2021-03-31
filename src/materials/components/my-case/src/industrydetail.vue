<template>
  <div>
    <div class="industrycase-wrapper">
      <ul class="case">
        <li
          v-for="(item, index) in contentItems"
          :key="index"
          class="case-item">
          <div class="content">
            <div class="name">{{item.title}}</div>
            <div class="motion-type">
              <el-tag v-for="(value,index) in item.industries" :key="index" style="margin-right: 6px;" size="mini">{{value}}</el-tag>
            </div>
            <div class="text-wrapper" @click="showDetails(item.url)">
              <span class="text">{{item.content}}
              </span>
              <div class="detail">
                <i class="el-icon-arrow-right" style="font-size: 14px;"></i>
              </div>
            </div>
            <div class="desct">
              <span class="source">{{item.website_name}}  {{item.publisher}}</span>
              <span class="date">{{item.date}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getIndustryInfoDetail } from '@/api/app'
  export default {
    data() {
      return {
        total: 0,
        contentItems: [],
        caseId: this.$route.query.currentCaseId,
        page: 1
      }
    },
    created() {
      this.$nextTick(() => {
        debugger
        this.getIndustryInfoDetail()
      })
    },
    methods: {
      getIndustryInfoDetail() {
        debugger
        const data = {
          data: {
            page: this.page,
            rows: 10,
            user_id: this.$store.state.user.user.userId,
            case_id: this.caseId
          }
        }
        getIndustryInfoDetail(data).then(res => {
          this.total = res.data.total
          this.contentItems = res.data.rows
        }).catch(err => {
          console.log(err)
        })
      },
      updateDataDetailByCondition() {
        debugger
        // 页码加1
        this.page += 1
        // // 如果加1后的页码乘以每页展示条数大于等于总条数
        // if (this.contentItems.length === this.totalPage) {
        //   return
        // }
        // 初始化默认查询
        const data = {
          data: {
            page: this.page,
            rows: 10,
            user_id: this.$store.state.user.user.userId,
            case_id: this.caseId
          }
        }
        // 初始化默认查询
        getIndustryInfoDetail(data).then(res => {
          debugger
          // 往数组的末尾压入查询出来的数据
          res.data.rows.forEach(item => {
            this.contentItems.push(item)
          })
          this.$bus.$emit('refreshIndustryInfo')
        }).catch(res => {
          console.log(res)
        })
      },
      showDetails(url) {
        const params = {
          url: url
        }
        this.$bus.$emit('showdetail', 'sentimenturl', params)
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .industrycase-wrapper {
    margin-top: 20px;
    .case {
      margin: 0;
      padding-left: 10px;
      padding-right: 10px;

      .case-item {
        display: flex;
        height: 140px;
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
            margin: 2px 0 8px 0;
            left: 19px;
            top: 139px;
            width: 300px;
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
            .text {
              height: 48px;
              line-height: 16px;
              color: #828283;
              font-size: 12px;
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
              width: 80px;
              height: 17px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
            .date {
              width: 120px;
              height: 17px;
              margin-left: 12px;
              color: rgba(174, 174, 174, 100);
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-regular;
              float: left;
            }
          }
        }
      }
    }
  }
</style>
