import Vue from "vue";
import Vuex from "vuex";
import Movies from "@/store/Movies";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Movies,
  },
});
