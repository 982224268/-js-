
<template>
    <div class="home">
        <div class="lists">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="(item, index) in count" :key="index" class="infinite-list-item">
                    <el-descriptions :title="`订单${index + 1}`">
                        <el-descriptions-item label="价格">4.5元</el-descriptions-item>
                        <el-descriptions-item label="配送预计">30分钟</el-descriptions-item>
                        <el-descriptions-item label="接取地址">电子科技大学中山学院北门</el-descriptions-item>
                        <el-descriptions-item label="配送地址">石岐街道XX路XX小区A栋404</el-descriptions-item>
                        <el-descriptions-item label="备注">放在门口就可以了，谢谢</el-descriptions-item>
                        <el-descriptions-item label="标签">
                            <el-tag size="small">易碎</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="是否接取">
                            <el-button type="warning">立即接单</el-button>
                        </el-descriptions-item>
                    </el-descriptions>
                </li>
            </ul>
        </div>
        <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
        </ul> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        load() {
            if(this.count<40){
                this.count += 2
            }
        }
    }
}
</script>

<style scoped>
.home {}

li {
    list-style: none;
}

ul li {
    /* width: 200px;
    height: 300px; */
}

.lists {}
</style>
<!-- <template>
    <div class="home">
        <div class="lists">
            <ul>
                <li>
                <div class="list-wrap">
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4.5</i>
                    </strong>
                    <span>30分钟内送达</span>
                  </div>
                  <div class="start">
                        <span>720m</span> <span>电子科技大学中山学院北门</span>
                  </div>
                  <div class="end">
                        <span>2.3km</span> <span>石岐街道XX路XX小区A栋404</span>
                  </div>
                  <div class="remarks">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.home {
    height: 600px;
    background-color: rgb(232, 232, 232);
}
</style> -->