import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import "@/assets/main.scss";
import { Server } from "miragejs";

if (window.Cypress) {
  // mirage cypress/test server
  new Server({
    environment: "test",
    routes() {
      let methods = ["get", "put", "patch", "post", "delete"];
      methods.forEach((method) => {
        this[method]("/*", async (schema, request) => {
          let [status, headers, body] = await window.handleFromCypress(request);
          return new Response(status, headers, body);
        });
      });
    },
  });
} else {
  if (process.env.NODE_ENV === "development") {
    require("@/miragejs").makeServer();
  }
}
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
