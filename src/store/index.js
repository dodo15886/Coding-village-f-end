import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  localhostUrl: "https://codingvillage.herokuapp.com",
  // localhostUrl: "http://localhost:3000",
  username: ""
};

const mutations = {
  setUsername: (state, username) => {
    state.username = username;
    localStorage.setItem("username", username);
  }
};

const getters = {
  getUsername: state => {
    if (localStorage.getItem("username") != "") {
      state.username = localStorage.getItem("username");
    }
    return state.username;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
