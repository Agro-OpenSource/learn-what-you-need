import Vue from 'vue';
import store from './stores';
import App from './App.vue';
import router from './router';
import './index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
