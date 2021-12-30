import * as types from "./types";

const mutations = {
  [types.SET_USER_DETAILS](state, payload) {
    localStorage.setItem("smsh:loggedInUser", JSON.stringify(payload));
    state.loggedInUser = Object.assign({}, payload);
  },
};
export default mutations;
