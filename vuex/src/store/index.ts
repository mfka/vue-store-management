import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const incrementAction = 'incrementAction';

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, _payload) {
      state.count++
    },
    decrement(state, _payload) {
      state.count--
    }
  },
  actions: {
    [incrementAction](context, payload) {
      context.commit('increment', payload)
    },
    decrementAction(context, payload) {
      context.commit('decrement', payload)
    },
  },
  modules: {
  },
  getters: {
    counter(state) {
      return state.count
    }
  }
})
