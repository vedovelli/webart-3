import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import '@/assets/main.scss';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  require('./miragejs').makeServer();
}

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
