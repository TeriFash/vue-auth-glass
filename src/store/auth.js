const state = {
  colorMode: localStorage.getItem("colorMode") || null
};

const getters = {
  colorMode: s => s.colorMode,
};

const actions = {
  toggleColorMode({ commit }) {
    const theme = localStorage.getItem("colorMode");
    commit("SET_COLOR_MODE", theme);
  }
};

const mutations = {
  SET_COLOR_MODE(state, payload) {
    state.colorMode = payload;
  },
};

export default { state, getters, actions, mutations };
