<template>
    <div class="background">
        <el-descriptions title="我的账户" style="width:800px">
            <el-descriptions-item label="余额（￥）">4645.1</el-descriptions-item>
            <el-descriptions-item label="今日收益（￥）">232.4</el-descriptions-item>
            <el-descriptions-item label="昨日收益（￥）">356</el-descriptions-item>
            <el-descriptions-item label="本月收益（￥）">4500.45</el-descriptions-item>
            <el-descriptions-item label="上月收益（￥）">4200.4</el-descriptions-item>
            <el-descriptions-item label="今年收益（￥）">456125</el-descriptions-item>
            <el-descriptions-item label="累计提现（￥）">564156</el-descriptions-item>
        </el-descriptions>
        <el-input v-model="input" style="width:10%" placeholder="请输入金额"></el-input>
        <el-button type="warning">立即提现</el-button>
        <div style="float:right">
            <p style="color:red">为什么无法提现？</p>
            <p>对于用户未确认收货、发生纠纷、收货未满24小时等不予提现</p>
        </div>
        <br>
        <br>
        <br>
        <div>收入记录</div>
        <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width:50%"
            layout="prev, pager, next" :total="50">
            <el-table-column prop="date" label="时间" width="180">
            </el-table-column>
            <el-table-column prop="change" label="变化" width="180">
            </el-table-column>
            <el-table-column prop="reason" label="原因">
            </el-table-column>
        </el-table>
        <div class="block" style="margin-top: 15px">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[1, 5, 10, 20]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2022-07-11 15:23:06',
                change: '+4.5',
                reason: '任务完成'
            }, {
                date: '2022-07-11 15:23:06',
                change: '+4.5',
                reason: '任务完成'
            }, {
                date: '2022-07-11 15:23:06',
                change: '+4.5',
                reason: '任务完成'
            }, {
                date: '2022-07-11 15:23:06',
                change: '+4.5',
                reason: '任务完成'
            }, {
                date: '2022-07-11 15:23:06',
                change: '+2',
                reason: '好评'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            }, {
                date: '2022-07-11 15:23:06',
                change: '-531',
                reason: '余额提现'
            },],
            currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 5, // 每页的数据条数
            input: ''//提现金额
        }
    },
    methods: {
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
        }
    }
}
</script>

<style scoped>
.background {
    height: 800px;
}
</style>