import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  localhostUrl : "http://10.43.49.101:3000"
}

const store = new Vuex.Store({
  state: state
})

export default store;