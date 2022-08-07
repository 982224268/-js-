<template>
    <div class="background">
        <el-descriptions class="margin-top" title="基本信息" :column="3" border>
            <template slot="extra">
                <el-button type="primary" size="small">更新信息</el-button>
            </template>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                </template>
                李骑手
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    居住地
                </template>
                苏州市
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    出生日
                </template>
                1999/6/14
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    注册日期
                </template>
                2022/7/13
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                </template>
                江苏省苏州市吴中区吴中大道 1188 号
            </el-descriptions-item>
        </el-descriptions>
        <br>
        <el-divider></el-divider>
        <br>
        <el-descriptions class="margin-top" title="账户设置" :column="1" border style="width:30%">
            <el-descriptions-item style="width:50%">
                <template slot="label">
                    手机号
                </template>
                13645295237
                <el-button style="float: right;">修改</el-button>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    邮箱
                </template>
                26461684@qq.con
                <el-button style="float: right;">修改</el-button>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    密码
                </template>
                ***********
                <el-button style="float: right;">修改</el-button>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    账号绑定
                </template>
                <div>
                    <img src="./images/QQ.png" style="width:50px;height:50px;float: left; margin-left: 100px;">
                    <img src="./images/微信.png" style="width:50px;height:50px;float: right;margin-right: 100px;">
                </div>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    实名认证
                </template>
                4507****************84
                <div style="float: right;margin-right: 15px;">已实名</div>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    银行卡
                </template>
                4502***********3655
                <el-button style="float: right;">修改</el-button>
            </el-descriptions-item>
        </el-descriptions>
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
</style>