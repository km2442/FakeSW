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
    people: [],
    movies: [],
    species: [],
    starships: [],
    vehicles: []
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
    },
    setFilmsData(state, payload) {
      state.movies = payload;
    },
    setSpeciesData(state, payload) {
      state.species = payload;
    },
    setStarshipsData(state, payload) {
      state.starships = payload;
    },
    setVehiclesData(state, payload) {
      state.vehicles = payload;
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
    Planets(state) {
      return state.planets;
    },
    People(state) {
      return state.people;
    },
    Films(state) {
      return state.movies;
    },
    Species(state) {
      return state.species;
    },
    Starships(state) {
      return state.starships;
    },
    Vehicles(state) {
      return state.vehicles;
    }
  },
  modules: {
  }
})
