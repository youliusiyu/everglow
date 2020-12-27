import request from './request.js'

export const GetEverglow = (params) => { return request.get('/everglow',{params}) } 

export const PostPosts = (params) => request.post('/posts',params)

export const GetPosts = (params) => request.get('/posts',params)

export const PutPosts = (params) => request.put('/posts',params)

export const DeletePosts = (params) => request.delete('/posts/7',params)

export const GetComments = (params) => request.get('/comments',{params})

export const GetProfile = (params) => request.get('/profile',{params})
