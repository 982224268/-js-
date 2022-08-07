<template>
    <div class="background">
        <ul>
            <li>
                <el-descriptions title="进行中">
                    <el-descriptions-item label="价格">4.5元</el-descriptions-item>
                    <el-descriptions-item label="配送预计">30分钟</el-descriptions-item>
                    <el-descriptions-item label="订单号">5646115664</el-descriptions-item>
                    <el-descriptions-item label="寄件人姓名">张三</el-descriptions-item>
                    <el-descriptions-item label="寄件人电话">13725648265</el-descriptions-item>
                    <el-descriptions-item label="寄件人地址">电子科技大学中山学院北门</el-descriptions-item>
                    <el-descriptions-item label="收件人姓名">李四</el-descriptions-item>
                    <el-descriptions-item label="收件人电话">13625458265</el-descriptions-item>
                    <el-descriptions-item label="收件人地址">石岐街道XX路XX小区A栋404</el-descriptions-item>
                    <el-descriptions-item label="备注">放在门口就可以了，谢谢</el-descriptions-item>
                    <el-descriptions-item label="下单时间">2022-07-05 17:14:36</el-descriptions-item>
                    <el-descriptions-item label="订单类型">服饰</el-descriptions-item>
                    <el-descriptions-item label="物品重量">2kg</el-descriptions-item>
                    <el-descriptions-item label="标签">
                        <el-tag size="small">易碎</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="是否放弃">
                        <el-button type="warning">取消任务</el-button>
                    </el-descriptions-item>
                </el-descriptions>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background{
    height: 800px;
}
ul li{
    list-style: none;
};
</style>