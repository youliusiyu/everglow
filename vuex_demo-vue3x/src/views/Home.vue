<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
      <p @click="myfn">{{home}}</p>
      <ul>
        <li @click="objClick()"  v-for="(item, index) in family" :key="item.id" :value="index">{{item.id}}--{{item.name}}--{{item.gender}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {
  ref,
  reactive
} from 'vue'

export default {
  name: 'Home',
  setup () {
    const family = reactive([
      {
        id: 1,
        name: 'liu',
        gender: 0
      }
    ])
    const list = reactive({
      demo: 'hello',
      vue3: 'react'
    })
    const { home, myfn } = clickitem()

    function objClick () {
      console.log(list)

      var awq = Object.assign({}, { name: '1231412' })
      list.demo = Object.assign({}, { he: 'liu' })
      console.log(list)
    }
    return {
      home,
      family,
      myfn,
      objClick,
      list
    }
  }
}

function clickitem () {
  const home = ref('HOME')
  function myfn () {
    console.log(home)
    // home.value = 'tiger'
    home.value = 'tiger'
    console.log(home)
  }
  return { home, myfn }
}
</script>
