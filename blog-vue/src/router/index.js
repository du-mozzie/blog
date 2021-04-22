import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Blogs from '../views/Blogs'
import BlogDetail from '../views/BlogDetail'
import BlogEdit from '../views/BlogEdit'
import noFound from '../views/404'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    // 重定向到blogs页面
    redirect: { name: "Blogs" }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/*',
    name: 'noFound',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
