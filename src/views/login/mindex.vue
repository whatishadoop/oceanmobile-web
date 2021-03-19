<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <div class="logo-wrapper"><svg-icon icon-class="logo2" class="icon"/></div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 10px;" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon" style="height: 39px;width: 13px;margin-left: 10px;" />
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
        loginForm: {
          username: 'admin',
          password: '123456',
          rememberMe: false
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
          password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
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
              this.$router.push({ path: this.redirect || '/mindex' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss">
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
    .el-input {
      height: 38px;
      input {
        height: 38px;
        border-radius: 19px;
        padding-left: 35px;
      }
    }
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
