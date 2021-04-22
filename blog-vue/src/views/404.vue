<template>
  <div class="notfound">
    <div class="wrapper">
      <div class="big">页面不见了！</div>
      <div>点击<el-link href="/blogs" type="primary">这里</el-link>返回首页.</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notfound {
  background-image: url("../assets/images/noFound/astronauta.jpg");
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.notfound .wrapper {
  position: absolute;
  top: 60%;
  right: 2%;
  color: #fff;
  width: 635px;
  font-size: 19px;
  line-height: 29px;
  -webkit-font-smoothing: antialiased;
  padding: 20px;
  font-family: "Source Sans Pro", sans-serif;
}
.notfound .wrapper .big {
  font-size: 74px;
  font-weight: 700;
  line-height: 68px;
  margin-bottom: 48px;
}
.notfound .wrapper a {
  color: #ffcc00;
  font-size: 42px;
  text-decoration: none;
  font-weight: 700;
}
@media only screen and (max-width: 666px) {
  .notfound .wrapper {
    left: auto;
    right: 0;
    width: 100%;
    max-width: 450px;
    top: 35%;
  }
  .notfound .wrapper .big {
    font-size: 42px;
    line-height: 50px;
    margin-bottom: 15px;
  }
}
</style>
