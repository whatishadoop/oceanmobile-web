<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <div class="logo-wrapper"><svg-icon icon-class="logo2" class="icon"/></div>
      <el-form-item prop="username" class="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入手机号码">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 10px;" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password" class="password">
        <el-input v-model="loginForm.password" type="text" placeholder="请输入验证码" @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 10px;" />

          <template slot="append"><div @click="getVerifyCode">{{btnTitle}}</div></template>
        </el-input>
      </el-form-item>
      <el-form-item style="width:100%;margin-top: 50px">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" round @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'Login',
    data() {
      return {
        btnTitle: '获取验证码',
        disabled: false, // 是否可点击,
        uuid: '',
        loginForm: {
          username: '',
          password: '',
          rememberMe: false
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', message: '手机号不能为空' }],
          password: [{ required: true, trigger: 'blur', message: '验证码不能为空' }]
        },
        loading: false,
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true // 最初绑定值的时候也执行函数
      }
    },
    created() {
      // this.getCookie()
    },
    methods: {
      getVerifyCode() {
        const messageCodeUrl = 'http://124.70.94.207:8201'
        if (this.disabled === false) {
          debugger
          this.disabled = true
          // 获取验证码
          this.validateBtn()
          // 发送验证码http请求接口
          const uuid = this._uuid()
          console.log(uuid)
          const url = messageCodeUrl + '/authority/sendSMSVerifiCode'
          this.uuid = this._uuid()
          this.$axios.get(url, {
            params: { // 携带的数据
              receiver: this.loginForm.username,
              uuid: uuid
            }
          }).then(res => {
            debugger
            console.log(res)
          }).catch(err => {
            this.$notify({ title: '错误', message: err, type: 'warning' })
            return false
          })
        }
      },
      validatePhone() {
        // 判断输入的手机号是否合法
        if (!this.username) {
          this.errors = {
            phone: '手机号码不能为空'
          }
          // return false
        } else if (!/^1[345678]\d{9}$/.test(this.username)) {
          this.errors = {
            phone: '请输入正确是手机号'
          }
          // return false
        } else {
          this.errors = {}
          return true
        }
      },
      validateBtn() {
        // 倒计时
        let time = 60
        const timer = setInterval(() => {
          if (time === 0) {
            clearInterval(timer)
            this.disabled = false
            this.btnTitle = '获取验证码'
          } else {
            this.btnTitle = time + '秒后重试'
            time--
          }
        }, 1000)
      },
      handleLogin() {
        this.$router.push({ path: this.redirect || '/index' })
        this.$refs.loginForm.validate(valid => {
          this.loading = false
          const messageCodeUrl = 'http://101.200.152.50'
          const url = messageCodeUrl + '/oauth/token'
          if (valid) {
            this.loading = true
            debugger
            const formData = {
              phoneNumber: this.loginForm.username,
              smsVerifiCode: this.loginForm.password,
              grant_type: 'phone',
              scope: 'all',
              imgCode: '',
              uuid: this.uuid
            }
            this.$axios.post(url, qs.stringify(formData), {
              headers: {
                Authorization: 'Basic cnVpcWlfYXBwOnJ1aXFpX2FwcA==',
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then(res => {
              debugger
              this.loading = false
              this.$store.dispatch('MessageCodeLogin', res).then(() => {
                this.loading = false
                this.$router.push({ path: this.redirect || '/' })
              }).catch(() => {
                this.loading = false
              })
            }).catch(err => {
              this.$notify({ title: '错误', message: err, type: 'warning' })
              return false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      _uuid() {
        var s = []
        var hexDigits = '0123456789abcdef'
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
        }
        s[14] = '4'
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
        s[8] = s[13] = s[18] = s[23] = ''

        this.uuidA = s.join('')
        return this.uuidA
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .username /deep/ .el-input__inner {
    border-radius: 20px;
  }
  .password /deep/ .el-input__inner {
    border-radius: 20px 0px 0px 20px;
  }
  .password /deep/ .el-input-group__append {
    border-radius: 0px 20px 20px 0px;
  }
  .login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #ffffff;  // 登录页面背景
    background-size: cover;
    /*.el-form{
      .el-form-item{
        .el-form-item__content{
          button{
            background-color: #336FFF;
          }
        }
      }
    }*/
  }
  .title {
    margin: 0px auto 83px auto;
    text-align: center;
    color: #707070;
    font-size: 26px;
  }

  .login-form {
    width: 340px;
    padding: 25px 25px 5px 25px;
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    margin-bottom: 50px;
    .icon {
      width: 100%;
      height: 100%;
    }
  }
</style>
