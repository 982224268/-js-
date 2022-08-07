<template>
  <div class="background">
    <div class="login">
      <span>骑手登录</span>
    </div>
    <div>
      <div class="input">
        <input type="text" placeholder="账号" class="i">
      </div>
      <br />
      <div class="input">
        <input type="password" placeholder="请输入密码" class="i">
      </div>
      <div class="input">
        <input name="m1" type="checkbox" :checked="agree">
        <span>我已阅读并同意<a href="#">《麦麦快送骑手隐私协议》</a></span>
      </div>
      <div class="input">
        <el-button type="warning" round style="width:300px" @click="riderLogin">登录</el-button>
      </div>
      <div class="input">
          没有账号，
          <router-link to="/riderRegister">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    riderLogin(){
      this.$router.push('/riderHome');
    }
  }
}
</script>

<style scoped>
.background {
  height: 600px;
  width: 100%;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
}

.input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

}

.i {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
</style>