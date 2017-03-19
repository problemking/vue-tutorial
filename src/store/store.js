import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
  totalTime:JSON.parse(localStorage.getItem('vuePlantime')|| '0'),
  list: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})