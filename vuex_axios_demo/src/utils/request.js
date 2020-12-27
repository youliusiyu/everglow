import axios from 'axios'
import store from '../store'

const instance = axios.create({
	baseURL : 'http://localhost:3000',
	timeout : 6000,
	headers : {'Content-type':'application/json;charset=utf-8'}
})

instance.interceptors.request.use(
	config => {
		if(store.state.token) {
			config.headers.token = store.getters.getToken
		}
		console.log('请求拦截器', config)
		return config
	},
	error => {
		// do something
		console.log('请求拦截器error', error)
		
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	response => {
		// todo
		console.log('响应拦截器', response)
		var token = 'adfadfasdfasder'
		store.commit('setToken',token)
		return response.data
	},
	error => {
		// do something
		console.log('响应拦截器error', error)
		
		return Promise.reject(error)
	}
)

export default instance
