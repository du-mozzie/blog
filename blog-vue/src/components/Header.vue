<template>
  <div class="h-content">
    <h3>欢迎来到Du的博客</h3>
    <div class="block">
      <el-avatar :size="150" :src="user.avatar"></el-avatar>
    </div>
    <span style="font-size:30px">{{ user.username }}</span>
    <div class="h-link">
      <span><el-link href="/blogs">主页</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span><el-link href="/blog/add" type="success">发表博客</el-link></span>

      <el-divider direction="vertical"></el-divider>
      <span v-show="!hasLogin"><el-link type="primary" href="/login">登录</el-link></span>

      <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatar: "",
        username: "请先登录",
      },
      hasLogin: false
    };
  },
  methods: {
    logout() {
      this.$axios
        .get("/logout", {
          headers: {
            "Authorization": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.$store.commit("REMOVE_INFO");
          this.$router.push("/login");
        });
    },
  },
  created() {
    if (this.$store.getters.getUserInfo.username) {

      this.user.username = this.$store.getters.getUserInfo.username;
      this.user.avatar = this.$store.getters.getUserInfo.avatar;

      this.hasLogin = true;
    }
  },
};
</script>

<style>
.h-content {
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
}
.h-link {
  margin: 10px 0;
}
</style>
