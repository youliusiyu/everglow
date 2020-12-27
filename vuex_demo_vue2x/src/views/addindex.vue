<template>
  <div>
    <div>count：{{$store.state.count}}</div>
    <button @click="add">+</button>
    <button @click="addN">+N</button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      count: this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('add')
    },
    addN () {
      this.$store.commit('addN', 2)
    }
  }
}
</script>
