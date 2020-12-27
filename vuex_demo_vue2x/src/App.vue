<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <my-addindex></my-addindex>
    -----------------------------------------------
    <my-subindex v-bind:title="de"></my-subindex>
    <router-view/>
  </div>

</template>
<script>
import addindex from './views/addindex.vue'
import subindex from './views/subindex.vue'

export default {
  data () {
    return {
      de: 'tittttttt'
    }
  },
  components: {
    'my-addindex': addindex,
    'my-subindex': subindex
  },
  methods: {
    func (i = 2, n, val = 0) {
      const a = i + val
      i++
      console.log(`${i} + ${a}`)
      if (i !== n) {
        return this.func(i, n, a)
      } else {
        return a + i
      }
    }
  },
  mounted () {
    // const b = this.func(1, 100, 0)
    // console.log(b)
    setTimeout((res) => {
      console.log('setTimeout')
    }, 2000)

    setInterval((res) => {
      console.log('setInterval')
    }, 2000)
  }
}
</script>
