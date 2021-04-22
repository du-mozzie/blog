<template>
  <div>
    <Header></Header>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          :timestamp="blog.created"
          placement="top"
          v-for="blog in blogs"
          :key="blog"
        >
          <el-card>
            <h4>
              <router-link
                :to="{ name: 'BlogDetail', params: { blogId: blog.id } }"
              >
                {{ blog.title }}
              </router-link>
            </h4>
            <p>{{ blog.description }}</p>

            <el-button type="text" @click="dropBlog(blog.id)"
              >点击删除</el-button
            >
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-pagination
        class="bpage"
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change="paging"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Blogs",
  components: {
    Header,
  },
  inject: ["reload"],
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5,
    };
  },

  methods: {
    paging(currentPage) {
      this.$axios.get("/blogs?currentPage=" + currentPage).then((res) => {
        this.blogs = res.data.data.records;
        this.currentPage = res.data.data.current;
        this.total = res.data.data.total;
        this.pageSize = res.data.data.size;
      });
    },
    dropBlog: function (id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get("/blog/delete/" + id, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            })
            .then((res) => {
              // window.location.reload()0
               this.$router.go(0);
              // this.reload();
            });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.paging(this.currentPage);
  },
};
</script>

<style scoped>
.bpage {
  margin: 0 auto;
  text-align: center;
}
.deleteButton {
  float: right;
  margin: 0 auto;
}
</style>
