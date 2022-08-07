<template>
    <div class="background">
        <div style="margin-top:200px">
            <el-input v-model="input" placeholder="请输入10位订单号" style="width:400px;margin-left: 600px;"></el-input>
            <el-button style="background-color:#D36F00;color:white">查询</el-button>
        </div>
        <br>
        <div style="text-align: center;">查询结果</div>
        <el-divider></el-divider>
        <div>
            <div>订单号：5646115664</div>
            <div><span>状态：配送中</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>配送预计：30分钟</span></div>
            <el-descriptions>
                <el-descriptions-item label="寄件人姓名">张三</el-descriptions-item>
                <el-descriptions-item label="寄件人电话">13725648265</el-descriptions-item>
                <el-descriptions-item label="寄件人地址">电子科技大学中山学院北门</el-descriptions-item>
                <el-descriptions-item label="收件人姓名">李四</el-descriptions-item>
                <el-descriptions-item label="收件人电话">13625458265</el-descriptions-item>
                <el-descriptions-item label="收件人地址">石岐街道XX路XX小区A栋404</el-descriptions-item>
                <el-descriptions-item label="配送距离">3km</el-descriptions-item>
                <el-descriptions-item label="配送骑手">李骑手</el-descriptions-item>
                <el-descriptions-item label="骑手电话">136419453541</el-descriptions-item>
            </el-descriptions>
            <el-divider></el-divider>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style scoped>
.background {
    height: 800px;
}
</style>