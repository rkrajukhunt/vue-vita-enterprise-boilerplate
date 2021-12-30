import Vue from "vue";

export default {
  methods: {
    validationMessages(error) {
      if (error.status === 400) {
        Vue.notify({
          group: "eb-notification",
          title: "Bad Request ",
          text:
            "The server could not understand the request due to invalid syntax.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 402) {
        Vue.notify({
          group: "eb-notification",
          title: "Payment Required ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 403) {
        Vue.notify({
          group: "eb-notification",
          title: "Forbidden ",
          text: "Acccess Denied You are not allowed to READ this record",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 404) {
        Vue.notify({
          group: "eb-notification",
          title: "Not Found ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 405) {
        Vue.notify({
          group: "eb-notification",
          title: "Method Not Allowed ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 406) {
        Vue.notify({
          group: "eb-notification",
          title: "Not Acceptable",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 407) {
        Vue.notify({
          group: "eb-notification",
          title: " Proxy Authentication Required ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 408) {
        Vue.notify({
          group: "eb-notification",
          title: "Request Timeout ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 409) {
        Vue.notify({
          group: "eb-notification",
          title: "Conflict ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 500) {
        Vue.notify({
          group: "eb-notification",
          title: "Internal Server Error ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else if (error.status === 501) {
        Vue.notify({
          group: "eb-notification",
          title: "Not Implemented ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      } else {
        Vue.notify({
          group: "eb-notification",
          title: "Something went wrong ",
          text: "Please Try Again.",
          type: "error",
          duration: 7000
        });
      }
    }
  }
};
