import * as types from "./types";

export default {
  async [types.SET_USER_DETAILS]({ commit }, payload) {
    commit(types.SET_USER_DETAILS, payload);
  },
  async [types.RESET_USER_DETAILS]({ commit }) {
    sessionStorage.clear();
    localStorage.clear();
    commit(types.SET_USER_DETAILS, {});
  }, 
};
