<template>
    <div class="home">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped>
.home {
    height: 600px;
    background-color: rgb(232, 232, 232);
}
</style>