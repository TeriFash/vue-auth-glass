const state = {
  isThemeMode: localStorage.getItem("isThemeMode") || null,
  colorMode: localStorage.getItem("colorMode") || null
};

const getters = {
  colorMode: s => s.colorMode,
  isThemeMode: s => s.isThemeMode
};

const actions = {
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
};

const mutations = {
  SET_COLOR_MODE(state, payload) {
    state.colorMode = payload;
  },
  INITIALIZE_MODE(state, value) {
    state.colorMode = value;
  }
};

export default { state, getters, actions, mutations };
