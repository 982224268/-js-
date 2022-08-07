<template>
    <div class="background">
        <div class="register">
            <span>骑手注册，请填写真实身份信息</span>
        </div>
        <div>
            <div class="input">
                <input type="text" placeholder="姓名" class="i">
            </div>
            <div class="input">
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </div>
            <div class="input">
                <input type="text" placeholder="身份证" class="i">
            </div>
             <div class="input">
                <input type="text" placeholder="手机号" class="i">
            </div>
            <div class="input">
                <input type="text" placeholder="验证码" class="check">
                <el-button type="warning" plain style="width:100px">验证码</el-button>
            </div>
            <div class="input">
                <input type="text" placeholder="邮箱" class="i">
            </div>
            <div class="input">
                <input type="password" placeholder="密码" class="i">
            </div>
            <div class="input">
                <input type="password" placeholder="重复密码" class="i">
            </div>
            <div class="input">
                <input name="m1" type="checkbox" :checked="agree">
                <span>我已阅读并同意<a href="#">《麦麦快送骑手聘用协议》</a></span>
            </div>
            <div class="input">
                <el-button type="warning" round style="width:300px" @click="waiting">立即注册</el-button>
            </div>
            <div class="input">
                已有账号，
                <router-link to="/riderLogin">立即登录</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio: '1'
        }
    },
    methods:{
        waiting(){
            this.$router.push('/waiting');
        }
    }
}
</script>

<style scoped>
.background {
    height: 600px;
    width: 100%;
}

.register {
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

.check {
    width: 202px;
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