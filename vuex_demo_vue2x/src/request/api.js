import request from './request.js'

// axios get请求
export const GetEverglow = (params) => request.get('/everglow', { params })

// axios post 请求
export const PostPosts = (params) => request.post('/posts', params)
