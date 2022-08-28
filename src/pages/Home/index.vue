<template>
    <div class="home">
        <el-carousel indicator-position="outside" height="700px">
            <el-carousel-item v-for="(item, index) in lists" :key="index">
                <img :src="item.url">
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
    },
    data() {
        return {
            lists: [
                {
                    url: require('./images/1.jpg')
                },
                {
                    url: require('./images/2.jpg')
                },
                {
                    url: require('./images/3.jpg')
                },
                {
                    url: require('./images/4.jpg')
                },
            ]
        }
    }
}
</script>

<style scoped>
img {
    height: 100%;
    width: 100%;
}
</style>
