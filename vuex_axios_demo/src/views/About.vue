<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="getEverglow()">GetEverglow</button>
		<button @click="getComments()">GetComments</button>
		<button @click="getProfile()">GetProfile</button>
		<button @click="postPosts()">PostPosts</button>
		<button @click="getPosts()">GetPosts</button>
		<button @click="putPosts()">PutPosts</button>
		<button @click="deletePosts()">DeletePosts</button>
	</div>
</template>

<script>
	import {
		GetEverglow,
		PostPosts,
		GetComments,
		GetProfile, 
		GetPosts,
		PutPosts,
		DeletePosts
	} from '../utils/api.js'

	export default {
		data() {
			return {

			}
		},
		methods: {
			getEverglow(e) {
				var params = {
					uid: '1'
				}
				GetEverglow(params).then(res => {
					console.log('GetEverglow', res)
				})
			},
			postPosts() {
				var params = {
					"title": "everglow",
					"author": "everglow"
				}
				PostPosts(params).then(res => {
					console.log('PostPosts', res)
				})
			},
			getComments() {
				GetComments().then(res => {
					console.log('GetComments', res)
				})
			},
			getProfile() {
				GetProfile().then(res => {
					console.log('GetProfile', res)
				})
			},
			getPosts() {
				var params = {
					"title": "everglow",
					"author": "everglow"
				}
				PostPosts(params).then(res => {
					console.log('PostPosts', res)
				})
			},
			putPosts() {
				var params = {
					"title": "3",
					"author": "3"
				}
				PostPosts(params).then(res => {
					console.log('PostPosts', res)
				})
			},
			deletePosts() {
				PostPosts().then(res => {
					console.log('PostPosts', res)
				})
			},
		},
		mounted() {
			// this.getEverglow()
		}
	}
</script>

<style scoped>

</style>
