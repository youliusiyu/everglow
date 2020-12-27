<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div> {{arr}} </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { request } from '../request/request.js'
import { GetEverglow, PostPosts } from '../request/api.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      arr: ['q', 'b', 'x']
    }
  },
  methods: {
    out (x) {
      var temp = 2
      function inside (y) {
        console.log(x + y + (temp--))
      }
      inside(5)
    },
    instan () {
      request('/everglow', {
        uid: 1
      })
        .then(res => {
          console.log(res)
        })
    },
    getEverglowdata () {
      var data = { uid: 1 }
      GetEverglow(data)
    },
    postPostss () {
      var data = { id: 1 }
      PostPosts(data).then(res => {
        console.log('PostPosts', res)
      })
    }
  },
  mounted () {
    this.out(3)
    // this.arr[0] = 'r'
    this.$set(this.arr, 0, 'r')
    console.log(this.arr)
    console.log(Object.prototype.toString.call(this.arr))
    console.log(this.arr instanceof Array)
    // eval(`console.log(${this.arr})`)

    // this.instan()
    this.getEverglowdata()
    this.postPostss()
  }
}
</script>
