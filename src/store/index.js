import Vue from "vue";
import Vuex from "vuex";
import { createLogger } from "vuex";

// Store functionality
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

// Modules functionality
import { auth, ticket } from "./modules";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// Create a new store
const store = new Vuex.Store({
  modules: {
    auth,
    ticket
  },
  actions,
  getters,
  mutations,
  state,
  plugins: debug ? [createLogger()] : [] // createLogger() createPersistedState() set logger only for development
});

export default store;
