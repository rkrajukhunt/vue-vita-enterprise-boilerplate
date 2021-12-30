import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync, unsync } from "vuex-router-sync";

import "./plugins"
import "./mixins"

// Sync store with router
sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
  destroyed() {
    unsync();
  },
}).$mount("#app");
