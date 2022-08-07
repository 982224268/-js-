<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="white" text-color="black" active-text-color="#ffd04b">
        <img src="./images/riderLogo.png" alt="麦麦快送" @click="home">
        <el-menu-item index="1" @click="home">接单广场</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的任务</template>
            <el-menu-item index="2-1" @click="working">进行中</el-menu-item>
            <el-menu-item index="2-2" @click="history">历史任务</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">骑手培训</el-menu-item>
        <el-menu-item index="4">帮助中心</el-menu-item>
        <el-menu-item index="5" @click="riderWallet">我的钱包</el-menu-item>
        <div @click="rider"> 
            <el-avatar class="sign-in" > 骑手 </el-avatar>
        </div>
        

    </el-menu>

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
        home() {
            this.$router.push('/riderHome');
        },
        riderWallet() {
            this.$router.push('/riderWallet');
        },
        working(){
            this.$router.push('/Working');
        },
        history(){
            this.$router.push('/history');
        },
        rider(){
            console.log("aaa")
            this.$router.push('/rider');
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
}
</style>