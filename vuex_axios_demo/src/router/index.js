import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../components/menu.vue'
import Sidebar from '../components/sidebar.vue'
import Main from '../components/main.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
	children: [
	        // 当 /user/:id 匹配成功，
	        // UserHome 会被渲染在 Home 的 <router-view> 中
	        { path: '/HelloWorld', component: HelloWorld },
			{ path: '/board', component: () => import ('../components/board.vue') },
			{ path: '/about', component: () => import ('../views/About.vue') },
	        // ...其他子路由
	      ]
  }
]

const router = new VueRouter({
  routes
})

export default router
