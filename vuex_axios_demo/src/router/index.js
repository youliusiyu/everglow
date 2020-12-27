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
    name: 'Home',
    component: Home,
	components: {
		default: Main,
		a: Menu,
		b: Sidebar
	}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	children: [
	        // 当 /user/:id 匹配成功，
	        // UserHome 会被渲染在 User 的 <router-view> 中
	        { path: '/HelloWorld', component: HelloWorld },
	
	        // ...其他子路由
	      ]
  }
]

const router = new VueRouter({
  routes
})

export default router
