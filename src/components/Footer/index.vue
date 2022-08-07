<template>
  <el-footer style="background-color: white;">
    <div class="about">
      <p>联系我们：</p>
      <img src="./images/微信.png">
      <img src="./images/QQ.png">
      <img src="./images/微博.png">
      <p class="p1">客服专线：86-4119489</p>
      <img src="./images/小程序.png" class="big">
      <br />
      <p>
        麦麦快送-同城配送平台：关于我们&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;加入我们&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;合作&nbsp;&nbsp;|&nbsp;&nbsp;@123456&nbsp;&nbsp;|2022
      </p>
      <p class="p2">小程序下单</p>
    </div>

  </el-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
ul li {
  display: inline-block;
  height: 60px;
  margin-right: 20px;
}

.about {
  height: 100px;
}

img {
  float: none;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  vertical-align: middle;
}

.big {
  float: right;
  width: 100px;
  height: 100px;
  margin-right: 250px;
}

p {
  display: inline;
}

.p1 {
  margin-left: 150px;
}

.p2 {
  float: right;
  height: 5px;
  line-height: 5px;
  margin-left: -100px;
}
</style>