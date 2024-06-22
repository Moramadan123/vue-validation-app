import { createStore } from "vuex";
import router from "../index";

const state = {};
const getters = {};
const mutations = {
  redirectTo(payload) {
    router.push({ name: payload });
  },
};
const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", payload.val);
  },
};

export default createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {},
});
