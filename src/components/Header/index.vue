<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="white" text-color="black" active-text-color="#ffd04b">
            <img src="./images/logo.png" alt="麦麦快送" @click="home">
            <el-menu-item index="1" @click="home">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">骑手中心</template>
                <el-menu-item index="2-1" @click="riderRegister">成为骑手</el-menu-item>
                <el-menu-item index="2-2" @click="riderLogin">骑手登录</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">快送服务</template>
                <el-menu-item index="3-1" @click="send">寄件</el-menu-item>
                <el-menu-item index="3-2" @click="search">查件</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">订单管理</template>
                <el-menu-item index="4-1" @click="userOrder">我的订单</el-menu-item>
                <el-menu-item index="4-2" @click="userHistory">历史订单</el-menu-item>
                <el-menu-item index="4-3" @click="userAddress">地址簿</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">帮助中心</el-menu-item>
            <el-menu-item index="6">麦麦小程序</el-menu-item>
            <div class="sign-in">
                <i class="el-icon-user"></i>
                <el-button type="warning" icon="el-icon-search" @click="login">登录</el-button>
            </div>
        </el-menu>
    </div>

</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        login() {
            this.$router.push('/login');
        },
        home() {
            this.$router.push('/home');
        },
        riderRegister() {
            this.$router.push('/riderRegister');
        },
        riderLogin() {
            this.$router.push('/riderLogin');
        },
        send() {
            this.$router.push('/send')
        },
        search() {
            this.$router.push('/search');
        },
        userOrder(){
            this.$router.push('/userOrder');
        },
        userHistory(){
            this.$router.push('/userHistory');
        },
        userAddress(){
            this.$router.push('/userAddress');
        }
    }
}
</script>

<style scoped>
img {
    float: left;
    height: 60px;
    margin-right: 400px;
}

.sign-in {
    float: right;
    height: 60px;
}
</style>