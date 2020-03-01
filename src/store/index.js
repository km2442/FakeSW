import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loginError: false,
    login: null,
    token: null,
    planets: [],
    people: []
  },
  mutations: {
    authUser(state, userData) {
      state.token = "Miracle fake token"
      state.login = userData.login
    },
    clearAuthData(state) {
      state.token = null
      state.login = null
    },
    setLoginError(state) {
      state.loginError = true;
    },
    resetLoginError(state) {
      state.loginError = false;
    },
    setPlanetsData(state, payload) {
      state.planets = payload;
    },
    setPeopleData(state, payload) {
      state.people = payload;
    }
  },
  actions: {
    login ({commit}, authData) {
      if(authData.login === "Luke" && authData.pass === "123") {
        commit('authUser', { login: authData.login });
        commit('resetLoginError');
        router.replace('/list');
      }
      else {
        commit('setLoginError');
      }
    },
    logout({commit}) {
      commit('clearAuthData');
      router.replace('/login');
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserAuthenticated (state) {
      return state.token !== null;
    },
    isLoginError(state) {
      return state.loginError !== false;
    },
    planets(state) {
      return state.planets;
    },
    people(state) {
      return state.people;
    }
  },
  modules: {
  }
})
