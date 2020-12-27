import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  responseType: 'json'
})
// 请求拦截
instance.interceptors.request.use(
  config => {
    // todo
    console.log('request请求拦截', config)
    return config
  },
  error => {
    // todo
    return error
  })

// 响应拦截
instance.interceptors.response.use(
  config => {
    // todo
    console.log('response响应拦截', config)
    return config
  },
  error => {
    // todo
    return error
  })

export default instance
