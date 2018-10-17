import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    errors: []
  },
  getters: {
    isAuthentified: state => state.user !== null,
    getErrors: state => state.errors
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
    },

    flushErrors(state) {
      state.errors = [];
    },

    addError(state, error) {
      state.errors.push(error);
    },

    updateAudition(state, { ear, hz, value }) {
      state.user.profile.audition[ear][hz] = value;
    },

    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    }
  },
  actions: {
    /* eslint-disable no-console */
    login: ({ commit }, user) => {
      console.debug(`Action: Loged, user: ${user}`);
      commit("login", user);
    },

    logout: ({ commit }) => {
      commit("logout");
    },

    updateAudition({ commit }, audition) {
      const { ear, hz, value } = audition;
      console.debug(`
        Updating audition for ${ear} ear, at ${hz}Hz with value ${value}dB`);
      commit("updateAudition", audition);
    }
  }
});