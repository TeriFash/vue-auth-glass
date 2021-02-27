import Vue from "vue";
import Vuex from "vuex";
import utilities from "./utilities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  modules: {
    utilities
  }
});
