import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    },
    addN (state, n) {
      state.count += n
    },
    subN (state, n) {
      state.count -= n
    }
  },
  actions: {
  },
  modules: {
  }
})
