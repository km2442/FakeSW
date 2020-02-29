import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
//import axios from 'axios'

Vue.use(Vuex)
/* eslint-disable no-unused-vars */
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
    }
  },
  actions: {
    login ({commit, dispatch}, authData) {
      if(authData.login === "luke" && authData.pass === "123") {
        commit('authUser', { login: authData.login });
        commit('resetLoginError');
        router.replace('/list');
      }
      else {
        commit('setLoginError');
      }
    },
    logout(commit) {
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
    }
  },
  modules: {
  }
})
