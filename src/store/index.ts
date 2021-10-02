import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: 0,
  },
  mutations: {
    setScreenWidth(state, val) {
      state.screenWidth = val;
    },
  },
  actions: {},
  modules: {},
});
