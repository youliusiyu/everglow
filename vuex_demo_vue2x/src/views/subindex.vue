<template>
  <div>
    <div>count：{{count}}</div>
    <button @click="sub">-</button>
    <button @click="subNe">-N</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      num: this.title
    }
  },
  props: {
    title: String
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    // sub () {
    //   this.$store.commit('sub')
    // }
    subNe () {
      this.subN(3)
      console.log(this.num)
    }
  }
}
</script>
