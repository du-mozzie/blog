<template>
  <div>
    <Header></Header>
    <div class="b-content">
      <el-link v-show="editButton" class="edit" icon="el-icon-edit">
        <router-link :to="{ name: 'BlogEdit', params: { blogId: blog.id } }"
          >编辑</router-link
        >
      </el-link>

      <h2>{{ blog.title }}</h2>

      <el-divider></el-divider>

      <span> {{ blog.description }}</span>

      <el-divider></el-divider>

      <div class="markdown-body" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
// 添加样式markdown-body
import "github-markdown-css/github-markdown.css";
import Header from "../components/Header";

export default {
  name: "BlogDetail",
  components: { Header },
  data() {
    return {
      blog: {
        id: "",
        title: "",
        description: "",
        content: "",
      },
      editButton: false,
    };
  },
  created() {
    const blogId = this.$route.params.blogId;
    this.$axios.get("/blog/" + blogId).then((res) => {
      const blog = res.data.data;
      this.blog.id = blog.id;
      this.blog.title = blog.title;
      this.blog.description = blog.description;

      //md格式解析
      var markdownIt = require("markdown-it");
      var md = new markdownIt();

      var result = md.render(blog.content);

      this.blog.content = result;

      this.editButton = blog.userId === this.$store.getters.getUserInfo.id;
    });
  },
};
</script>

<style scoped>
.b-content {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 700px;
  padding: 20px 15px;
}
h2 {
  text-align: center;
}
.edit {
  float: right;
}
</style>
