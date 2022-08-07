<template>
    <div>
        <el-form ref="form" :model="form" label-width="100px" label-position="right" style="width:500px;margin: auto;">
            <el-form-item label="寄件人">
                <el-input v-model="form.sendName" style="width:75%" placeholder="单行输入"></el-input><el-button type="primary" size="small">地址簿导入</el-button>
            </el-form-item>
            <el-form-item label="寄件人电话">
                <el-input v-model="form.sendPhone" placeholder="单行输入"></el-input>
            </el-form-item>
            <el-form-item label="寄件人地址">
                <el-input v-model="form.sendAddress" placeholder="单行输入"></el-input>
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item label="收件人">
                <el-input v-model="form.acceptName" style="width:75%" placeholder="单行输入"></el-input><el-button type="primary" size="small">地址簿导入</el-button>
            </el-form-item>
            <el-form-item label="收件人电话">
                <el-input v-model="form.acceptPhone" placeholder="单行输入"></el-input>
            </el-form-item>
            <el-form-item label="收件人地址">
                <el-input v-model="form.acceptAddress" placeholder="单行输入"></el-input>
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item :label="mode">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="定时配送时间" v-show="form.delivery">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                    </el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="物品类型">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="食品" name="type"></el-checkbox>
                    <el-checkbox label="书籍" name="type"></el-checkbox>
                    <el-checkbox label="易碎品" name="type"></el-checkbox>
                    <el-checkbox label="鲜花" name="type"></el-checkbox>
                    <el-checkbox label="服饰" name="type"></el-checkbox>
                    <el-checkbox label="其他" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="物品重量">
                <el-input-number v-model="form.weight" :min="1" :max="10" label="物品重量"></el-input-number>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                sendName: '',
                sendPhone: '',
                sendAddress: '',
                acceptName: '',
                acceptPhone: '',
                acceptAddress: '',
                delivery: false,
                date1: '',
                date2: '',
                type: [],
                weight: 1,
                desc: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    },
    computed: {
        mode() {
            if (this.form.delivery == false) {
                return "即时配送";
            } else {
                return "定时配送";
            }
        }
    }
}
</script>

<style>
</style>