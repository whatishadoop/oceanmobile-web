<template>
  <div class="personelinfo-container" >
    <ul style="padding-left: 10px;">
      <li v-for="(value,index) in personelinfo" :key="index">
        <div class="content">
          <span>{{value.name}}</span>
          <span @click="showDetails(value.id)">{{value.info}}</span>
        </div>
      </li>
    </ul>
    <span v-if="showEdit" class="edit label label-default" @click="showEditConfig">
      <i class="glyphicon glyphicon-edit"></i>
      编辑
		</span>
    <span v-if="showEdit" class="remove label label-default" @click="removeComponent">
      <i class="glyphicon glyphicon-remove"></i>
      删除
		</span>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        personelinfo: [
           {
            'name': '所属部门',
            'info': '大数据部门'
          },
          {
            'name': '岗位',
            'info': '项目管理'
          },
          {
            'name': '修改密码',
            'info': ''
          },
          {
            'name': '邮箱',
            'info': 'xxxxxxxxx@163.com'
          }
        ],
        showEdit: false
      }
    },
    methods: {
      showEditConfig() {
        // this.$bus.$emit('on-personelinfoconfig', this, 'personelInfo-config')
        this.$bus.$emit('on-attraConfig', this, 'personelInfo-config')
      },
      removeComponent() {
        this.$bus.$emit('on-showPersonelinfo', false)
      },
      showDetails(id) {
        if (id) {
          this.$bus.$emit('on-drawers', id, true)
        } else {
          console.log('无跳转')
        }
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .personelinfo-container{
    @include zxsk_bg($color-bg-1,$color-bg-2);
    margin-top: 11px;
    position: relative;
    /* &:hover{
      @include zxsk_bg($color-bg-3,$color-bg-3);
      opacity: 0.5;
    } */
    ul{
      list-style: none;
      li{
        height: 52px;
        overflow: hidden;
        .content{
          height: 30px;
          margin: 11px 16px;
          span:nth-child(1){
            float: left;
            line-height: 30px;
            font-family: NotoSansHans-Regular;
            font-size: 17px;
            @include zxsk-font-color($font-color-1,$font-color-5);
            letter-spacing: 0.29px;
            text-align: left;
          }
          span:nth-child(2){
            float: right;
            min-height: 30px;
            padding: 0 20px;
            line-height: 30px;
            font-family: NotoSansHans-Regular;
            font-size: 16px;
            @include zxsk-font-color($font-color-3,$font-color-4);
            letter-spacing: 0.27px;
            text-align: center;
            cursor: pointer;
            background: url("../images/rightarrow.svg") no-repeat right center;
          }
        }
      }
    }
    >span{
      position: absolute;
      cursor: pointer;
      z-index: 99;
      /*pointer-events: none;*/
    }
    .edit{
      right: 66px;
      top: 10px;
    }
    .remove{
      right: 10px;
      top: 10px;
      opacity: 1;
    }
  }
</style>
