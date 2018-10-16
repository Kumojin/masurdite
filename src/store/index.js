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
      console.log(`Action: Loged, user: ${user}`);
      commit("login", user);
    },

    logout: ({ commit }) => {
      commit("logout");
    }
  }
});
