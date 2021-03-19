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
        <el-input v-model="loginForm.password" type="password" placeholder="请输入验证码" @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 10px;" />

          <template slot="append"><div @click="getVerifyCode">{{btnTitle}}</div></template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" round @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
      <p class="login-tip">系统默认用户名：admin，密码：123456</p>
    </el-form>
  </div>
</template>

<script>
  import Config from '@/config'
  import Cookies from 'js-cookie'
  export default {
    name: 'Login',
    data() {
      return {
        btnTitle: '获取验证码',
        disabled: false, // 是否可点击
        loginForm: {
          username: 'admin',
          password: '123456',
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
      this.getCookie()
    },
    methods: {
      getCookie() {
        const username = Cookies.get('username')
        let password = Cookies.get('password')
        const rememberMe = Cookies.get('rememberMe')
        password = password === undefined ? this.loginForm.password : password
        this.loginForm = {
          username: username === undefined ? this.loginForm.username : username,
          password: password,
          rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          const user = this.loginForm
          if (valid) {
            this.loading = true
            if (user.rememberMe) {
              Cookies.set('username', user.username, { expires: Config.passCookieExpires })
              Cookies.set('password', user.password, { expires: Config.passCookieExpires })
              Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
            } else {
              Cookies.remove('username')
              Cookies.remove('password')
              Cookies.remove('rememberMe')
            }
            this.$store.dispatch('Login', user).then(() => {
              this.loading = false
              this.$router.push({ path: this.redirect || '/index' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      getVerifyCode() {
        if (this.disabled === false) {
          this.disabled = true
          // 获取验证码
          this.validateBtn()
          // 发送验证码http请求接口
          // this.axios.get('http://127.0.0.1/your_url')
          //   .then(res => {
          //     console.log(res)
          //   }).catch(err => {
          //   this.$notify({ title: '错误', message: err, type: 'warning' })
          //   return false
          // })
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
        let time = 10
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
