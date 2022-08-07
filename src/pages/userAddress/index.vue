<template>
    <div class="background">
        <ul>
            <el-button type="primary">添加新地址</el-button>
            <br>
            <br>
            <div>当前已存地址</div>
            <el-divider></el-divider>
            <li>
                <el-descriptions column="1">
                    <el-descriptions-item label="号码">1</el-descriptions-item>
                    <el-descriptions-item label="用户名">李东生</el-descriptions-item>
                    <el-descriptions-item label="手机号">13752463308</el-descriptions-item>
                    <el-descriptions-item label="用户地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    <el-descriptions-item label="备注">
                        <el-tag size="small">家</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="操作">
                        <el-button>修改</el-button>
                        <el-button>删除</el-button>
                    </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
            </li>
            <li>
                <el-descriptions column="1">
                    <el-descriptions-item label="号码">2</el-descriptions-item>
                    <el-descriptions-item label="用户名">李四</el-descriptions-item>
                    <el-descriptions-item label="手机号">13652467609</el-descriptions-item>
                    <el-descriptions-item label="用户地址">广东省中山市电子科技大学中山学院北门</el-descriptions-item>
                    <el-descriptions-item label="备注">
                        <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="操作">
                        <el-button>修改</el-button>
                        <el-button>删除</el-button>
                    </el-descriptions-item>
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

ul li {
    list-style: none;
}
</style>