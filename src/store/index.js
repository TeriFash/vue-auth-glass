import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isThemeMode: localStorage.getItem("isThemeMode") || null,
    colorMode: localStorage.getItem("colorMode") || null
  },
  mutations: {
    SET_COLOR_MODE(state, payload) {
      state.colorMode = payload;
    },
    INITIALIZE_MODE(state, value) {
      state.colorMode = value;
    }
  },
  actions: {
    initializeMode({ commit, state }) {
      if (!state.colorMode === localStorage.getItem("colorMode")) {
        const theme = localStorage.getItem("colorMode");
        commit("INITIALIZE_MODE", theme);
      }
    },
    toggleColorMode({ commit }) {
      const theme = localStorage.getItem("colorMode");
      commit("SET_COLOR_MODE", theme);
    }
  },
  getters: {
    colorMode: s => s.colorMode,
    isThemeMode: s => s.isThemeMode
  },
  modules: {}
});
