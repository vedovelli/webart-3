import Vue from "vue";
import Vuex from "vuex";
import Movies from "@/store/modules/Movies";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Movies,
  },
});
