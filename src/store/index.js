import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    increase(state) {
      return state.counter++;
    },
    decrease(state) {
      return state.counter--;
    },
  },
  actions: {},
  modules: {},
});
