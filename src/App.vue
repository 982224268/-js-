<template>
  <div>
    <riderHeader v-show="$route.meta.ridershow"></riderHeader>
    <Header v-show="$route.meta.show"></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    <riderFooter v-show="$route.meta.ridershow"></riderFooter>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import riderHeader from './components/riderHeader'
import riderFooter from './components/riderFooter'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    riderHeader,
    riderFooter,
  }
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
