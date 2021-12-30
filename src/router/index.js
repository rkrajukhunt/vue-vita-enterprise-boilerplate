import Vue from "vue";
import Router from "vue-router";
import * as a from "./type";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "",
      redirect: { name: a.SMSH_TICKET_ROOT },
    },
    {
      path: "/ticket",
      name: a.SMSH_TICKET_ROOT,
      component: () => import("../containers/TicketContainer.vue"),
      redirect: { name: a.SMSH_TICKET_DETAILS, params: { id: 'movie-name-dynamic'} },
      meta: {
        auth: false,
        label: "Ticket Container",
        showProgressBar: true
      },
      children: [
        {
          path: "",
          name: a.SMSH_TICKET_HOME,
          component: () => import("../views/ticket/Home.vue"),
          meta: {
            auth: false, 
            label: "Ticket Home",
            showProgressBar: true
          },
        },
        {
          path: ":id/details",
          name: a.SMSH_TICKET_DETAILS,
          component: () => import("../views/ticket/Details.vue"),
          meta: {
            auth: false, 
            label: "Ticket Home",
            showProgressBar: true
          },
        },
        {
          path: "check-out",
          name: a.SMSH_TICKET_CHECKOUT,
          component: () => import("../views/ticket/Checkout.vue"),
          meta: {
            auth: false, 
            label: "Ticket Checkout",
            showProgressBar: true
          }
        },
      ]
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
      meta: {
        auth: false, 
        showProgressBar: true
      }
    }
  ]
});
