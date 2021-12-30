import Vue from "vue";
import overlayLoader from "./overlay-loader";
import error from "./error-handler";

Vue.mixin(overlayLoader);
Vue.mixin(error);
