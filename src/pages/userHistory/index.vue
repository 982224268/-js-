<template>
    <div class="background">
        <ul>
            <li v-for="a in 4">
                <div>订单号：5646115664</div>
                <div><span>状态：已完成</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>完成时间：2022-08-01 19:34</span></div>
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
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
    height: 800px;
}
ul li{
    list-style: none;
}
</style>